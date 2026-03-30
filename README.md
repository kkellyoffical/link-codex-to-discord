# Link Codex To Discord

Sanitized deployment and release documentation for operating a Discord-to-Codex bridge.

This repository is a sanitized open-source scaffold. It contains:

- deployment guidance for running the Discord bridge on a private host
- a minimal Node.js project skeleton
- documentation for the current Discord bridge UX model
- environment variable templates with placeholders only
- release and versioning guidance
- a minimal GitHub Actions workflow for tag-based GitHub Releases

It does not contain:

- personal tokens
- Discord user, guild, or channel IDs
- local absolute machine paths
- private account metadata

## Repository layout

- `src/`: minimal public project skeleton
- `docs/DEPLOYMENT.md`: host setup, configuration, launch, health checks
- `docs/ARCHITECTURE.md`: component diagram and runtime behavior
- `docs/ROADMAP.md`: planned milestones
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
3. Run the scaffold locally:

```bash
npm run check
npm start
```

4. Adapt the scaffold to your real Discord adapter and Codex runtime.
5. Start the daemon under a supervisor such as `launchd` or `systemd`.
6. Run health checks before inviting the bot into a production Discord server.

## Project status

Current scope:

- safe public documentation
- release workflow
- deploy templates
- minimal scaffold for future implementation
- documented live bridge behavior for:
  - `/status` with local state reads and panel-style rendering
  - `/compact` with terminal-native execution semantics
  - tail summaries for `Tool Activity` and `Code Changes`

Not yet included:

- production bot runtime
- live token handling
- host-specific supervisor wiring
- private operational data

## Current UX direction

- `/status` should read fast local state and render as a compact status panel.
- `/compact` should prefer terminal-native behavior when matching Codex TUI semantics matters.
- post-run summaries should stay short in-channel and move full detail into attachments or logs.
- code-change counts should be derived from per-turn file snapshots, not whole-worktree diffs.

## Release model

Recommended versioning:

- `v0.x.y` while the system is still changing frequently
- `v1.x.y` once command behavior and deployment layout are stable

Recommended release trigger:

- push a signed or annotated tag such as `v0.3.0`
- let GitHub Actions create the Release entry automatically

See [docs/RELEASE.md](./docs/RELEASE.md) for the full workflow.
See [docs/ROADMAP.md](./docs/ROADMAP.md) for planned milestones.

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
