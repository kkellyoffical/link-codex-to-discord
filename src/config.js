const requiredKeys = [
  "DISCORD_BOT_TOKEN",
  "DISCORD_ALLOWED_USERS",
  "BRIDGE_DEFAULT_WORKDIR"
];

function readEnv(key, fallback = "") {
  return String(process.env[key] ?? fallback).trim();
}

export function loadConfig(env = process.env) {
  const config = {
    discordBotToken: readEnv("DISCORD_BOT_TOKEN"),
    discordAllowedUsers: readEnv("DISCORD_ALLOWED_USERS"),
    discordAllowedGuilds: readEnv("DISCORD_ALLOWED_GUILDS"),
    discordAllowedChannels: readEnv("DISCORD_ALLOWED_CHANNELS"),
    bridgeRuntime: readEnv("BRIDGE_RUNTIME", "codex"),
    bridgeDefaultMode: readEnv("BRIDGE_DEFAULT_MODE", "code"),
    bridgeDefaultModel: readEnv("BRIDGE_DEFAULT_MODEL", "gpt-5.4"),
    bridgeDefaultWorkdir: readEnv("BRIDGE_DEFAULT_WORKDIR"),
    codexExecutable: readEnv("CODEX_EXECUTABLE", "codex"),
    codexTmuxTarget: readEnv("CODEX_TMUX_TARGET", "codex:0.0")
  };

  const missing = requiredKeys.filter((key) => !String(env[key] ?? "").trim());
  return {
    config,
    missing
  };
}

export function summarizeConfig(config) {
  return {
    runtime: config.bridgeRuntime,
    defaultMode: config.bridgeDefaultMode,
    defaultModel: config.bridgeDefaultModel,
    defaultWorkdir: config.bridgeDefaultWorkdir || "(unset)",
    tmuxTarget: config.codexTmuxTarget,
    discordUserScope: config.discordAllowedUsers ? "configured" : "unset",
    discordGuildScope: config.discordAllowedGuilds ? "configured" : "unset",
    discordChannelScope: config.discordAllowedChannels ? "configured" : "unset"
  };
}
