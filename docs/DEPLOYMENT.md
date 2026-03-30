# Deployment

## 1. Host prerequisites

Required:

- `node >= 20`
- `tmux`
- `git`
- `codex` CLI for `CTI_RUNTIME=codex`
- `claude` CLI for `CTI_RUNTIME=claude`

Recommended:

- macOS with `launchd`, or Linux with `systemd`
- a dedicated working directory for the bridge
- a dedicated Discord bot token for this bridge only

## 2. Clone and install

```bash
git clone https://github.com/kkellyoffical/link-codex-to-discord.git
cd link-codex-to-discord
npm install
```

The deployable runtime is already bundled in `dist/daemon.mjs`.

## 3. Discord bot setup

Create a bot in the Discord Developer Portal and enable:

- `Message Content Intent`

Recommended bot permissions:

- `View Channels`
- `Send Messages`
- `Read Message History`

Only grant additional permissions if your bridge features actually need them.

## 4. Runtime configuration

Create the bridge home and config:

```bash
mkdir -p ~/.claude-to-im
cp config.env.example ~/.claude-to-im/config.env
```

Edit `~/.claude-to-im/config.env` and set at minimum:

- `CTI_RUNTIME=codex` or `claude`
- `CTI_ENABLED_CHANNELS=discord`
- `CTI_DEFAULT_WORKDIR=/absolute/path/to/project`
- `CTI_DISCORD_BOT_TOKEN=...`
- `CTI_DISCORD_ALLOWED_USERS=...`
- `CTI_DISCORD_ALLOWED_GUILDS=...`
- `CTI_DISCORD_ALLOWED_CHANNELS=...`

Do not commit `config.env`.

## 5. Runtime checks

Before launch:

```bash
npm run check
bash scripts/doctor.sh
```

Useful manual checks:

```bash
codex --version
codex login status
tmux -V
```

## 6. Start the bridge

Foreground-style runtime:

```bash
npm start
```

Managed daemon:

```bash
bash scripts/daemon.sh start
bash scripts/daemon.sh status
bash scripts/daemon.sh logs 100
```

## 7. Service management

### macOS `launchd`

Use the bundled `scripts/daemon.sh` or adapt:

- `deploy/launchd/com.link-codex-to-discord.plist.example`

### Linux `systemd`

Adapt:

- `deploy/systemd/link-codex-to-discord.service.example`

## 8. Operational hygiene

- do not paste live bot tokens into issues or commit history
- scrub screenshots before sharing them
- do not store personal file paths in public release notes
- keep audit and session logs off the repository

## 9. Failure patterns to watch

- terminal commands timing out because the target tmux session is wrong
- bridge replies mixing command results and ordinary chat messages
- private paths leaking into Discord error output
- status reads becoming slow because they depend on fragile terminal scraping
