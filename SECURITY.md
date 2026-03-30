# Security Policy

## Scope

This repository only contains sanitized deployment and release documentation.
It should not contain live infrastructure secrets or production identifiers.

## Do not publish

Do not commit or upload:

- real `.env` files
- bot tokens
- production Discord IDs
- local audit or session logs
- screenshots containing paths, IDs, or sensitive prompts

## Reporting

If you find sensitive data accidentally committed, rotate the affected secret first and then purge it from git history before publishing a new release.

