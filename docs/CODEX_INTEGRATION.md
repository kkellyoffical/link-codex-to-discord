# Codex Integration

`link-codex-to-discord` does not currently depend on a public first-class Codex plugin API.

Instead, `v1.2.3` provides a practical integration layer:

- a global CLI:
  - `link-codex-to-discord init`
  - `link-codex-to-discord start`
  - `link-codex-to-discord stop`
  - `link-codex-to-discord status`
  - `link-codex-to-discord doctor`
- an optional Codex helper skill installer:
  - `link-codex-to-discord integrate codex`

## What `integrate codex` does

It installs a local skill under:

```text
~/.codex/skills/link-codex-to-discord/SKILL.md
```

That skill tells Codex to manage the bridge through the local CLI instead of ad-hoc shell commands.

## Suggested workflow

```bash
git clone https://github.com/kkellyoffical/link-codex-to-discord.git
cd link-codex-to-discord
npm install
npm install -g .
link-codex-to-discord init --install-codex-skill
link-codex-to-discord doctor
link-codex-to-discord start
```

After that, you can ask Codex to inspect or manage the bridge using the installed helper skill.

## Current boundary

This is a user-friendly integration helper, not a native Codex slash-command plugin.

The long-term goal is to make Discord setup feel native inside Codex, but the current productized path is:

1. install the npm package
2. run the CLI setup
3. optionally install the Codex helper skill
4. manage the runtime through the CLI
