# Link Codex To Discord

Sanitized deployment and release documentation for operating a Discord-to-Codex bridge.

This repository is intentionally documentation-first. It contains:

- deployment guidance for running the Discord bridge on a private host
- environment variable templates with placeholders only
- release and versioning guidance
- a minimal GitHub Actions workflow for tag-based GitHub Releases

It does not contain:

- personal tokens
- Discord user, guild, or channel IDs
- local absolute machine paths
- private account metadata

## Repository layout

- `docs/DEPLOYMENT.md`: host setup, configuration, launch, health checks
- `docs/ARCHITECTURE.md`: component diagram and runtime behavior
- `docs/RELEASE.md`: how to publish releases safely
- `SECURITY.md`: security and disclosure notes
- `CHANGELOG.md`: release history
- `LICENSE`: repository license
- `.env.example`: sanitized configuration template
- `.github/workflows/release.yml`: create a GitHub Release from a version tag

## Intended architecture

```text
Discord
  -> Bot Token / Slash Commands
  -> Bridge Daemon
  -> Local Codex runtime
     -> tmux-backed interactive terminal for terminal-native commands
     -> local state files for status and audit
```

## Quick start

1. Read [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md).
2. Copy `.env.example` to `.env` and fill in your own values.
3. Start the daemon under a supervisor such as `launchd` or `systemd`.
4. Run health checks before inviting the bot into a production Discord server.

## Release model

Recommended versioning:

- `v0.x.y` while the system is still changing frequently
- `v1.x.y` once command behavior and deployment layout are stable

Recommended release trigger:

- push a signed or annotated tag such as `v0.3.0`
- let GitHub Actions create the Release entry automatically

See [docs/RELEASE.md](./docs/RELEASE.md) for the full workflow.

## Security notes

- Never commit live `.env` files.
- Never embed raw Discord IDs or personal paths in screenshots or logs.
- Treat audit logs and session metadata as sensitive operational data.
- Keep operational secrets and host-specific supervisor files outside the repository.

## Public release readiness

This repository has been prepared for public release as a documentation and deployment guide.
It has been checked to avoid embedding:

- live bot tokens
- personal email addresses
- host-local absolute paths
- user, guild, or channel IDs
