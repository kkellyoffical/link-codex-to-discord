# Link Codex To Discord

Развёртываемый Discord-мост для `Codex` и `Claude Code`.

## Что входит в репозиторий

- `dist/daemon.mjs` — собранный runtime
- `scripts/daemon.sh` — запуск, остановка, статус, логи
- `scripts/doctor.sh` — диагностика
- `scripts/supervisor-*.sh|ps1` — супервизоры для macOS, Linux и Windows
- `config.env.example` — шаблон конфигурации
- документация по развёртыванию, архитектуре, релизам и roadmap

## Чего здесь нет

- реальных bot token
- приватных Discord ID
- абсолютных локальных путей
- приватных данных аккаунтов

## Быстрый старт

1. Установите зависимости окружения:
   - Node.js `>= 20`
   - `tmux`
   - `codex` CLI и/или `claude` CLI
2. Установите зависимости проекта:

```bash
npm install
```

3. Создайте конфигурацию:

```bash
mkdir -p ~/.link-codex-to-discord
cp config.env.example ~/.link-codex-to-discord/config.env
```

4. Отредактируйте `~/.link-codex-to-discord/config.env` и задайте минимум:
   - `CTI_RUNTIME=codex` или `claude`
   - `CTI_ENABLED_CHANNELS=discord`
   - `CTI_DEFAULT_WORKDIR=/absolute/path/to/your/project`
   - `CTI_DISCORD_BOT_TOKEN=...`
   - `CTI_DISCORD_ALLOWED_USERS=...`
   - `CTI_DISCORD_ALLOWED_GUILDS=...`
   - `CTI_DISCORD_ALLOWED_CHANNELS=...`

5. Проверьте runtime:

```bash
npm run check
bash scripts/doctor.sh
```

6. Запустите daemon:

```bash
bash scripts/daemon.sh start
```

7. Проверьте статус и логи:

```bash
bash scripts/daemon.sh status
bash scripts/daemon.sh logs 100
```

## Примечания

- `dist/daemon.mjs` — основной развёртываемый артефакт
- `/compact` теперь использует native Codex app-server вместо tmux-инъекции на основном пути
- Для production предпочтительнее примеры `launchd` или `systemd`

## Дополнительная документация

- Развёртывание: [../docs/DEPLOYMENT.md](../docs/DEPLOYMENT.md)
- Развёртывание для AI-агентов: [../docs/AI_AGENT_DEPLOYMENT.md](../docs/AI_AGENT_DEPLOYMENT.md)
- Архитектура: [../docs/ARCHITECTURE.md](../docs/ARCHITECTURE.md)
- Процесс релизов: [../docs/RELEASE.md](../docs/RELEASE.md)

## Благодарности

- [`op7418/claude-to-im`](https://github.com/op7418/claude-to-im)
- [OpenAI Codex CLI / Codex SDK](https://github.com/openai/codex)
- [discord.js](https://discord.js.org/)
