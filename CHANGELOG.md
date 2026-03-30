# Changelog

## v1.0.0

- first public usable release
- repository now ships a deployable `dist/daemon.mjs` runtime instead of only a public scaffold
- added real daemon and supervisor scripts for macOS, Linux, and Windows
- added `config.env.example` aligned with the live bridge runtime
- updated deployment guidance so a fresh clone can be configured and started directly
- added an AI-agent deployment guide for Codex, Claude Code, and similar agents

## v0.3.0

- documented the now-working `/status` and `/compact` behavior for the Discord bridge runtime
- documented panel-style status rendering for session, usage, rate limits, and account state
- documented simplified tail summaries for `Tool Activity` and `Code Changes`
- clarified that code-change statistics are based on per-turn `Edit` snapshots rather than whole-worktree diffs
- refreshed roadmap and architecture notes to match the current bridge behavior

## v0.2.0

- added a minimal public Node.js scaffold under `src/`
- added `systemd` and `launchd` example service definitions
- added a public roadmap
- refreshed README for public project positioning
- kept all deployment data sanitized

## v0.1.0

- initial public release
- added sanitized deployment guidance for a Discord-to-Codex bridge
- added architecture and release documentation
- added example environment template
- added tag-based GitHub Release workflow
