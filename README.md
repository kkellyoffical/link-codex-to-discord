# Link Codex To Discord

Deployable Discord bridge daemon for `Codex` and `Claude Code`.

This repository now includes the runtime files needed to deploy a working bridge:

- `dist/daemon.mjs`: bundled daemon runtime
- `scripts/daemon.sh`: start/stop/status/logs entrypoint
- `scripts/doctor.sh`: environment and auth diagnostics
- `scripts/supervisor-*.sh|ps1`: macOS, Linux, and Windows supervisors
- `config.env.example`: real runtime configuration template
- deployment docs, release docs, and service templates

It still does **not** include:

- live bot tokens
- Discord user, guild, or channel IDs
- local absolute machine paths
- private account metadata

## Repository layout

- `dist/`: deployable bundled runtime
- `scripts/`: daemon management, diagnostics, supervisors
- `docs/DEPLOYMENT.md`: end-to-end deployment steps
- `docs/ARCHITECTURE.md`: runtime behavior and data sources
- `docs/ROADMAP.md`: planned milestones
- `docs/RELEASE.md`: safe release workflow
- `config.env.example`: sanitized runtime config template
- `deploy/`: launchd/systemd examples

## Quick start

1. Install prerequisites:
   - Node.js >= 20
   - `tmux`
   - `codex` CLI and/or `claude` CLI

2. Install dependencies:

```bash
npm install
```

3. Create runtime config:

```bash
mkdir -p ~/.claude-to-im
cp config.env.example ~/.claude-to-im/config.env
```

4. Edit `~/.claude-to-im/config.env` and set at minimum:
   - `CTI_RUNTIME=codex` or `claude`
   - `CTI_ENABLED_CHANNELS=discord`
   - `CTI_DEFAULT_WORKDIR=/absolute/path/to/your/project`
   - `CTI_DISCORD_BOT_TOKEN=...`
   - `CTI_DISCORD_ALLOWED_USERS=...`
   - `CTI_DISCORD_ALLOWED_GUILDS=...`
   - `CTI_DISCORD_ALLOWED_CHANNELS=...`

5. Check the runtime:

```bash
npm run check
bash scripts/doctor.sh
```

6. Start the bridge:

```bash
bash scripts/daemon.sh start
```

7. Inspect status and logs:

```bash
bash scripts/daemon.sh status
bash scripts/daemon.sh logs 100
```

## AI agent deployment

For AI agents such as `Codex`, `Claude Code`, or similar terminal agents, use:

- [docs/AI_AGENT_DEPLOYMENT.md](./docs/AI_AGENT_DEPLOYMENT.md)

That guide is written as a deterministic deployment runbook an agent can execute step by step.

## Deployment notes

- The public repository is now deployable from a fresh clone.
- The bundled runtime in `dist/daemon.mjs` is the deployable artifact.
- `Codex` features such as `/status`, `/compact`, `/permissions`, and `/yolo` depend on local CLI auth and local session state.
- `/compact` uses a dedicated tmux target per Discord chat when possible, with an isolated fallback to avoid cross-session context bleed.
- For production use, prefer the provided `launchd` or `systemd` examples over ad-hoc terminal launches.

See [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md) for the full setup.
See [docs/RELEASE.md](./docs/RELEASE.md) for the release workflow.

## Security notes

- Never commit `config.env`.
- Never paste real bot tokens into issues or logs.
- Treat bridge audit logs and Codex session metadata as sensitive data.
- Re-check screenshots and pasted terminal output before sharing publicly.
