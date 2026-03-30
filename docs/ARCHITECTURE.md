# Architecture

## Components

```text
Discord User
  -> Discord Server / DM
  -> Discord Bot
  -> Bridge Daemon
  -> Codex
     -> interactive terminal commands in tmux when exact TUI semantics matter
     -> local state files for status, audit, and session metadata
```

## Behavioral split

- `status`: prefer fast local state reads and render a compact panel from bound session metadata
- `compact`: prefer terminal-native execution when matching Codex TUI behavior matters
- normal prompts: bridge runtime may stream text and tool output separately
- post-run summaries: keep in-channel summaries short and move detailed traces to attachments

## Data sources

- session binding state: local bridge data files
- token usage and rate limits: local Codex session files
- account metadata: local Codex auth state
- code-change summaries: per-turn snapshots for files touched by `Edit`
- Discord command routing: slash commands and plain-message fallback

## Safety model

- isolate bot access with allowlists
- keep bot tokens and runtime configuration outside git
- keep release artifacts free of local machine details
