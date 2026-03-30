# Deployment

## 1. Host prerequisites

Required:

- `codex` CLI installed and authenticated
- `tmux` installed
- `git` installed
- `gh` optional but recommended for release operations

Recommended:

- macOS with `launchd`, or Linux with `systemd`
- a dedicated working directory for the bridge

## 2. Discord bot setup

Create a bot in the Discord Developer Portal and enable:

- `Message Content Intent`

Recommended bot permissions:

- `View Channels`
- `Send Messages`
- `Read Message History`

Only grant additional permissions if the bridge truly needs them.

## 3. Local configuration

Copy `.env.example`:

```bash
cp .env.example .env
```

Fill in:

- `DISCORD_BOT_TOKEN`
- `DISCORD_ALLOWED_USERS`
- `DISCORD_ALLOWED_GUILDS`
- `DISCORD_ALLOWED_CHANNELS`
- `BRIDGE_DEFAULT_WORKDIR`

Do not commit `.env`.

## 4. Launch strategy

### macOS `launchd`

Create a LaunchAgent that runs the bridge daemon under the intended user account.

Key points:

- run from a stable working directory
- write logs to a dedicated log path
- inject env vars from a private file or a wrapper script

### Linux `systemd`

Use a user service or a locked-down system service.

Key points:

- `WorkingDirectory=` must be explicit
- use `EnvironmentFile=` for secrets
- restart on failure

## 5. Runtime health checks

Before inviting the bot into a production server:

```bash
codex --version
tmux -V
codex login status
```

Check process supervisor state and logs after launch.

## 6. Operational hygiene

- do not paste live bot tokens into issues or commit history
- scrub screenshots before sharing them
- do not store personal file paths in public release notes
- keep audit and session logs off the repository

## 7. Failure patterns to watch

- terminal commands timing out because the target tmux session is wrong
- bridge replies mixing command results and ordinary chat messages
- private paths leaking into Discord error output
- status reads becoming slow because they depend on fragile terminal scraping
