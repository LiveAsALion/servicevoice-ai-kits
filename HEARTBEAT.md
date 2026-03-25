# HEARTBEAT.md

## Periodic Checks

### Memory Scale Monitor
Check file count in `life/` and `projects/` directories.
When total hits 60+ files: install Mem0/Qdrant vector search layer.
```bash
find /root/.openclaw/workspace/life /root/.openclaw/workspace/projects -type f | wc -l
```
Current threshold: **60 files**. Log current count each check.

### Standard Checks (rotate, 2–4x per day)
- Emails — any urgent unread?
- Calendar — events in next 24–48h?
- Project blockers — anything stalled?

