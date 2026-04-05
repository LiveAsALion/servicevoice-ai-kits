import subprocess, sys

# Convert markdown to HTML first with pandoc, then HTML to PDF with weasyprint
result = subprocess.run([
    "pandoc",
    "/root/.openclaw/workspace/hcg-evaluation-report.md",
    "-o", "/root/.openclaw/workspace/hcg-eval.html",
    "--standalone",
    "--metadata", "title=Healthcare Guardian — Full Project Evaluation",
    "--css=/root/.openclaw/workspace/hcg-eval.css",
    "--highlight-style=tango"
], capture_output=True, text=True)

if result.returncode != 0:
    print("Pandoc error:", result.stderr)
    sys.exit(1)

print("HTML generated.")

from weasyprint import HTML, CSS

HTML(filename="/root/.openclaw/workspace/hcg-eval.html").write_pdf(
    "/root/.openclaw/workspace/HCG-Evaluation-Report.pdf"
)
print("PDF written successfully.")
