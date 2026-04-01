# Link Codex To Discord

Deployable Discord bridge daemon for `Codex` and `Claude Code`.

## What This Repository Includes

- `dist/daemon.mjs`: bundled runtime
- `scripts/daemon.sh`: start, stop, status, logs
- `scripts/doctor.sh`: diagnostics
- `scripts/supervisor-*.sh|ps1`: macOS, Linux, Windows supervisors
- `config.env.example`: runtime configuration template
- deployment, architecture, release, and roadmap docs

## What It Does Not Include

- live bot tokens
- private Discord user, guild, or channel IDs
- local absolute machine paths
- private account metadata

## Quick Start

1. Install prerequisites:
   - Node.js `>= 20`
   - `tmux`
   - `codex` CLI and/or `claude` CLI
2. Install dependencies:

```bash
npm install
```

3. Create runtime config:

```bash
mkdir -p ~/.link-codex-to-discord
cp config.env.example ~/.link-codex-to-discord/config.env
```

4. Edit `~/.link-codex-to-discord/config.env` and set at minimum:
   - `CTI_RUNTIME=codex` or `claude`
   - `CTI_ENABLED_CHANNELS=discord`
   - `CTI_DEFAULT_WORKDIR=/absolute/path/to/your/project`
   - `CTI_DISCORD_BOT_TOKEN=...`
   - `CTI_DISCORD_ALLOWED_USERS=...`
   - `CTI_DISCORD_ALLOWED_GUILDS=...`
   - `CTI_DISCORD_ALLOWED_CHANNELS=...`

5. Validate:

```bash
npm run check
bash scripts/doctor.sh
```

6. Start the daemon:

```bash
bash scripts/daemon.sh start
```

7. Inspect status and logs:

```bash
bash scripts/daemon.sh status
bash scripts/daemon.sh logs 100
```

## Notes

- The bundled runtime in `dist/daemon.mjs` is the deployable artifact.
- `/compact` now uses native Codex app-server compaction instead of tmux injection on the main path.
- For production, prefer the provided `launchd` or `systemd` examples.

## More Documentation

- Deployment: [../docs/DEPLOYMENT.md](../docs/DEPLOYMENT.md)
- AI agent deployment: [../docs/AI_AGENT_DEPLOYMENT.md](../docs/AI_AGENT_DEPLOYMENT.md)
- Architecture: [../docs/ARCHITECTURE.md](../docs/ARCHITECTURE.md)
- Release workflow: [../docs/RELEASE.md](../docs/RELEASE.md)

## Acknowledgements

- [`op7418/claude-to-im`](https://github.com/op7418/claude-to-im)
- [OpenAI Codex CLI / Codex SDK](https://github.com/openai/codex)
- [discord.js](https://discord.js.org/)
