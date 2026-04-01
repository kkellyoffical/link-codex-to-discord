# Link Codex To Discord

`Codex` 와 `Claude Code` 를 위한 배포 가능한 Discord 브리지 데몬입니다.

## 저장소에 포함된 내용

- `dist/daemon.mjs`: 번들된 런타임
- `scripts/daemon.sh`: 시작, 중지, 상태, 로그
- `scripts/doctor.sh`: 진단 스크립트
- `scripts/supervisor-*.sh|ps1`: macOS, Linux, Windows 감독 스크립트
- `config.env.example`: 런타임 설정 템플릿
- 배포, 아키텍처, 릴리스, 로드맵 문서

## 저장소에 포함되지 않는 내용

- 실제 bot token
- 비공개 Discord 사용자, 서버, 채널 ID
- 로컬 절대 경로
- 비공개 계정 메타데이터

## 빠른 시작

1. 필요한 환경을 설치합니다:
   - Node.js `>= 20`
   - `tmux`
   - `codex` CLI 및/또는 `claude` CLI
2. 의존성을 설치합니다:

```bash
npm install
```

3. 설정 파일을 만듭니다:

```bash
mkdir -p ~/.link-codex-to-discord
cp config.env.example ~/.link-codex-to-discord/config.env
```

4. `~/.link-codex-to-discord/config.env` 를 수정하고 최소한 다음을 설정합니다:
   - `CTI_RUNTIME=codex` 또는 `claude`
   - `CTI_ENABLED_CHANNELS=discord`
   - `CTI_DEFAULT_WORKDIR=/absolute/path/to/your/project`
   - `CTI_DISCORD_BOT_TOKEN=...`
   - `CTI_DISCORD_ALLOWED_USERS=...`
   - `CTI_DISCORD_ALLOWED_GUILDS=...`
   - `CTI_DISCORD_ALLOWED_CHANNELS=...`

5. 런타임을 확인합니다:

```bash
npm run check
bash scripts/doctor.sh
```

6. 데몬을 시작합니다:

```bash
bash scripts/daemon.sh start
```

7. 상태와 로그를 확인합니다:

```bash
bash scripts/daemon.sh status
bash scripts/daemon.sh logs 100
```

## 참고

- `dist/daemon.mjs` 가 실제 배포 산출물입니다
- `/compact` 는 이제 메인 경로에서 tmux 주입이 아니라 native Codex app-server 를 사용합니다
- 운영 환경에서는 `launchd` 또는 `systemd` 예제를 권장합니다

## 추가 문서

- 배포: [../docs/DEPLOYMENT.md](../docs/DEPLOYMENT.md)
- AI 에이전트 배포: [../docs/AI_AGENT_DEPLOYMENT.md](../docs/AI_AGENT_DEPLOYMENT.md)
- 아키텍처: [../docs/ARCHITECTURE.md](../docs/ARCHITECTURE.md)
- 릴리스 절차: [../docs/RELEASE.md](../docs/RELEASE.md)

## 감사

- [`op7418/claude-to-im`](https://github.com/op7418/claude-to-im)
- [OpenAI Codex CLI / Codex SDK](https://github.com/openai/codex)
- [discord.js](https://discord.js.org/)
