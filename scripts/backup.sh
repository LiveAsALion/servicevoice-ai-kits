#!/bin/bash
# OpenClaw critical file backup — pushes to private GitHub repo nightly

set -e

TIMESTAMP=$(date +%Y-%m-%d)
BACKUP_DIR="/tmp/openclaw-backup-$$"
BACKUP_FILE="$BACKUP_DIR/backup-$TIMESTAMP.tar.gz"
REPO_DIR="/tmp/openclaw-backup-repo-$$"
LOG="/var/log/openclaw-backup.log"
PAT=$(grep GITHUB_PAT /root/.openclaw/.env.secrets | cut -d= -f2)

echo "[$TIMESTAMP] Starting backup..." >> $LOG

# Create temp dirs
mkdir -p $BACKUP_DIR $REPO_DIR

# Package critical files
tar -czf $BACKUP_FILE \
  --exclude='/root/.openclaw/workspace/speedshield/.git' \
  --exclude='/root/.openclaw/agents' \
  /root/.openclaw/.env.secrets \
  /root/.openclaw/workspace/secrets/ \
  /root/.openclaw/workspace/life/ \
  /root/.openclaw/workspace/memory/ \
  /root/.openclaw/workspace/MEMORY.md \
  /root/.openclaw/workspace/SOUL.md \
  /root/.openclaw/workspace/USER.md \
  /root/.openclaw/workspace/AGENTS.md \
  /root/.openclaw/workspace/HEARTBEAT.md \
  /root/.openclaw/workspace/TOOLS.md \
  2>> $LOG

SIZE=$(du -sh $BACKUP_FILE | cut -f1)
echo "[$TIMESTAMP] Archive created: $SIZE" >> $LOG

# Clone backup repo and push
git clone --quiet "https://LiveAsALion:$PAT@github.com/LiveAsALion/openclaw-backups.git" $REPO_DIR 2>> $LOG
cp $BACKUP_FILE $REPO_DIR/

cd $REPO_DIR
git config user.email "liveasalion@proton.me"
git config user.name "OpenClaw Backup Bot"

# Keep only last 7 backups (rolling window)
ls -t backup-*.tar.gz 2>/dev/null | tail -n +8 | xargs -r git rm --quiet

git add .
git commit --quiet -m "Backup $TIMESTAMP ($SIZE)" 2>> $LOG
git push --quiet origin main 2>> $LOG

echo "[$TIMESTAMP] Backup pushed to GitHub. Done." >> $LOG

# Cleanup
rm -rf $BACKUP_DIR $REPO_DIR
