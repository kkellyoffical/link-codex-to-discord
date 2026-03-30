export class DiscordCodexBridge {
  constructor(config) {
    this.config = config;
  }

  async start() {
    const summary = {
      runtime: this.config.bridgeRuntime,
      workdir: this.config.bridgeDefaultWorkdir,
      tmuxTarget: this.config.codexTmuxTarget
    };
    console.log("[link-codex-to-discord] starting scaffold");
    console.log(JSON.stringify(summary, null, 2));
    console.log(
      "[link-codex-to-discord] this repository is a sanitized scaffold. " +
      "Wire your real Discord adapter, Codex session binding, and supervisor here."
    );
  }

  async stop() {
    console.log("[link-codex-to-discord] stopping scaffold");
  }
}
