import { loadConfig, summarizeConfig } from "./config.js";
import { DiscordCodexBridge } from "./bridge.js";

async function main() {
  const { config, missing } = loadConfig();
  if (missing.length > 0) {
    console.error("[link-codex-to-discord] missing required environment variables:");
    for (const key of missing) {
      console.error(`- ${key}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log("[link-codex-to-discord] config summary");
  console.log(JSON.stringify(summarizeConfig(config), null, 2));

  const bridge = new DiscordCodexBridge(config);
  await bridge.start();
}

main().catch((error) => {
  console.error("[link-codex-to-discord] fatal error");
  console.error(error instanceof Error ? error.stack || error.message : String(error));
  process.exit(1);
});
