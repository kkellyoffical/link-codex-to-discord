# AI Agent Deployment

Use this runbook when an AI agent such as `Codex`, `Claude Code`, or another terminal agent must deploy the bridge without asking for creative interpretation.

## Goal

Deploy `link-codex-to-discord` on the current machine and leave it in a state where:

- dependencies are installed
- runtime config exists at `~/.link-codex-to-discord/config.env`
- the daemon can be started with `bash scripts/daemon.sh start`
- health checks pass far enough to confirm environment wiring

## Preconditions

The agent should verify:

1. `node -v`
2. `tmux -V`
3. `codex --version` or `claude --version`
4. the repository root is the current working tree

If any required binary is missing, stop and report the missing prerequisite.

## Required operator-provided values

The agent must not invent these values:

- `CTI_RUNTIME`
- `CTI_DEFAULT_WORKDIR`
- `CTI_DISCORD_BOT_TOKEN`
- `CTI_DISCORD_ALLOWED_USERS`
- `CTI_DISCORD_ALLOWED_GUILDS`
- `CTI_DISCORD_ALLOWED_CHANNELS`

If they are not already available in local context, the agent should ask for them.

## Deterministic procedure

### 1. Install dependencies

```bash
npm install
```

### 2. Create runtime home

```bash
mkdir -p ~/.link-codex-to-discord
```

### 3. Create config from template

If `~/.link-codex-to-discord/config.env` does not exist:

```bash
cp config.env.example ~/.link-codex-to-discord/config.env
```

### 4. Write required config values

Set or update at least:

```dotenv
CTI_RUNTIME=codex
CTI_ENABLED_CHANNELS=discord
CTI_DEFAULT_WORKDIR=/absolute/path/to/project
CTI_DISCORD_BOT_TOKEN=...
CTI_DISCORD_ALLOWED_USERS=...
CTI_DISCORD_ALLOWED_GUILDS=...
CTI_DISCORD_ALLOWED_CHANNELS=...
```

Do not commit this file.

### 5. Validate local runtime

```bash
npm run check
bash scripts/doctor.sh
```

If `doctor.sh` reports missing auth for the selected runtime, stop and report the exact missing auth step.

### 6. Start the daemon

```bash
bash scripts/daemon.sh start
```

### 7. Confirm status

```bash
bash scripts/daemon.sh status
```

Successful deployment means:

- process is running
- `status.json` reports `running: true`

### 8. Fetch recent logs

```bash
bash scripts/daemon.sh logs 100
```

Review the last lines for:

- Discord adapter start
- slash command sync
- bridge started

## Expected follow-up checks

After deployment, the operator should verify in Discord:

- bot is online
- slash commands appear
- `/status` responds

## Failure handling

If deployment fails, the agent should return:

1. the exact failing command
2. the exact stderr/stdout excerpt
3. the next minimal remediation step

The agent should avoid broad rewrites or speculative changes when a single failing prerequisite explains the problem.
