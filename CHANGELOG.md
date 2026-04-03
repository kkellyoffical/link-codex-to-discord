# Changelog

## v1.2.2

- strengthened `/status` execution visibility with a dedicated `Execution` section that now appears before usage and account details
- added derived shell runtime signals for background activity, including shell state, shell snapshot age, recent terminal activity, and last command
- added derived collaboration signals from native Codex session events, including active/completed subagent counts, last subagent event, and compaction/interruption totals
- improved the top-level `/status` overview lines so shell and subagent state are visible without expanding the full panel

## v1.2.1

- polished `/status` into a clearer two-layer status panel with an `Execution` section for shell snapshot and agent activity visibility
- published the refreshed repository homepage with multilingual README navigation, logo assets, and banner artwork

## v1.2.0

- moved `/compact` off tmux injection and onto native Codex app-server compaction, removing the detached tmux dependency from the main compact path
- pinned the runtime to the intended Codex executable path and aligned the live bridge with the updated local Codex installation
- rebranded the runtime, launchd label, scripts, docs, and default project home around `link-codex-to-discord`
- added acknowledgements in the README for the upstream projects that informed the current system

## v1.1.0

- reworked `/compact` to prefer a dedicated tmux target per Discord chat, reusing the same native Codex terminal instead of always launching a fresh isolated tmux session
- added `tmuxTarget` lifecycle to chat bindings so `/new`, `/resume`, and native-thread changes clear stale compact terminals instead of risking context bleed
- kept `/compact` safe with an isolated-tmux fallback when the dedicated terminal cannot be prepared
- exposed the current compact terminal binding in `/status` as `Compact tmux` for easier runtime verification

## v1.0.5

- expanded `/log` into four output levels: `simple`, `medium`, `verbose`, and `debug`
- changed `simple` to keep a minimal final summary instead of showing only the final answer
- added `medium` mode for task-stage progress without detailed logs
- improved in-flight follow-up feedback with explicit queue acknowledgement before the next turn runs

## v1.0.4

- fixed `/new` so creating a new session now clears the previous native thread binding instead of accidentally continuing the old context
- trimmed legacy Discord slash commands from the command picker after newer interactive flows replaced them
- re-verified the `/resume` selector and confirmation flow against the current runtime behavior

## v1.0.3

- replaced the old common-directory pickers with hierarchical directory browsers for `/new` and `/cwd`, starting from `/` and supporting up/home/confirm/cancel flows
- added in-browser folder creation for the directory browsers
- added `/log` with selector-based output detail levels: `simple`, `verbose`, and `debug`
- changed in-flight follow-up messages from silent blocking to explicit queueing, with immediate acknowledgement and automatic next-turn execution after the current turn finishes

## v1.0.2

- added an interactive directory picker for `/new` when no path is supplied
- added an interactive directory picker for `/cwd` when no path is supplied
- replaced low-level `os error 2` failures with a clearer “working directory is unavailable” message

## v1.0.1

- fixed the GitHub release workflow so reruns and pre-existing releases no longer fail with `Release.tag_name already exists`
- made the release job idempotent by falling back from `create` to `edit` when the release already exists

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
