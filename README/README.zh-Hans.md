# Link Codex To Discord

面向 `Codex` 和 `Claude Code` 的可部署 Discord 桥接守护进程。

## 仓库包含内容

- `dist/daemon.mjs`：打包后的运行时
- `scripts/daemon.sh`：启动、停止、状态、日志
- `scripts/doctor.sh`：诊断脚本
- `scripts/supervisor-*.sh|ps1`：macOS、Linux、Windows 监督脚本
- `config.env.example`：运行时配置模板
- 部署、架构、发布与路线图文档

## 仓库不包含内容

- 真实 bot token
- 私有 Discord 用户、服务器、频道 ID
- 本地绝对路径
- 私有账号信息

## 快速开始

1. 安装前置环境：
   - Node.js `>= 20`
   - `tmux`
   - `codex` CLI 和/或 `claude` CLI
2. 安装依赖：

```bash
npm install
```

3. 创建运行配置：

```bash
mkdir -p ~/.link-codex-to-discord
cp config.env.example ~/.link-codex-to-discord/config.env
```

4. 编辑 `~/.link-codex-to-discord/config.env`，至少设置：
   - `CTI_RUNTIME=codex` 或 `claude`
   - `CTI_ENABLED_CHANNELS=discord`
   - `CTI_DEFAULT_WORKDIR=/absolute/path/to/your/project`
   - `CTI_DISCORD_BOT_TOKEN=...`
   - `CTI_DISCORD_ALLOWED_USERS=...`
   - `CTI_DISCORD_ALLOWED_GUILDS=...`
   - `CTI_DISCORD_ALLOWED_CHANNELS=...`

5. 校验环境：

```bash
npm run check
bash scripts/doctor.sh
```

6. 启动守护进程：

```bash
bash scripts/daemon.sh start
```

7. 查看状态与日志：

```bash
bash scripts/daemon.sh status
bash scripts/daemon.sh logs 100
```

## 说明

- 可部署产物是 `dist/daemon.mjs`
- `/compact` 主路径现在走原生 Codex app-server，不再依赖 tmux 注入
- 生产环境建议优先使用仓库提供的 `launchd` 或 `systemd` 示例

## 更多文档

- 部署文档：[../docs/DEPLOYMENT.md](../docs/DEPLOYMENT.md)
- AI agent 自动部署：[../docs/AI_AGENT_DEPLOYMENT.md](../docs/AI_AGENT_DEPLOYMENT.md)
- 架构说明：[../docs/ARCHITECTURE.md](../docs/ARCHITECTURE.md)
- 发布流程：[../docs/RELEASE.md](../docs/RELEASE.md)

## 致谢

- [`op7418/claude-to-im`](https://github.com/op7418/claude-to-im)
- [OpenAI Codex CLI / Codex SDK](https://github.com/openai/codex)
- [discord.js](https://discord.js.org/)
