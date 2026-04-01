# Link Codex To Discord

Daemon de passerelle Discord déployable pour `Codex` et `Claude Code`.

## Ce dépôt contient

- `dist/daemon.mjs` : le runtime empaqueté
- `scripts/daemon.sh` : démarrage, arrêt, état, journaux
- `scripts/doctor.sh` : diagnostics
- `scripts/supervisor-*.sh|ps1` : superviseurs macOS, Linux et Windows
- `config.env.example` : modèle de configuration
- la documentation de déploiement, d’architecture, de versionnement et de feuille de route

## Ce dépôt ne contient pas

- de vrais jetons bot
- d’identifiants Discord privés
- de chemins absolus de machine locale
- de métadonnées de compte privées

## Démarrage rapide

1. Installez les prérequis :
   - Node.js `>= 20`
   - `tmux`
   - `codex` CLI et/ou `claude` CLI
2. Installez les dépendances :

```bash
npm install
```

3. Créez la configuration :

```bash
mkdir -p ~/.link-codex-to-discord
cp config.env.example ~/.link-codex-to-discord/config.env
```

4. Modifiez `~/.link-codex-to-discord/config.env` et définissez au minimum :
   - `CTI_RUNTIME=codex` ou `claude`
   - `CTI_ENABLED_CHANNELS=discord`
   - `CTI_DEFAULT_WORKDIR=/absolute/path/to/your/project`
   - `CTI_DISCORD_BOT_TOKEN=...`
   - `CTI_DISCORD_ALLOWED_USERS=...`
   - `CTI_DISCORD_ALLOWED_GUILDS=...`
   - `CTI_DISCORD_ALLOWED_CHANNELS=...`

5. Vérifiez l’environnement :

```bash
npm run check
bash scripts/doctor.sh
```

6. Démarrez le daemon :

```bash
bash scripts/daemon.sh start
```

7. Consultez l’état et les journaux :

```bash
bash scripts/daemon.sh status
bash scripts/daemon.sh logs 100
```

## Notes

- `dist/daemon.mjs` est l’artefact déployable
- `/compact` utilise désormais le compactage natif Codex app-server sur le chemin principal
- En production, préférez les exemples `launchd` ou `systemd`

## Documentation complémentaire

- Déploiement : [../docs/DEPLOYMENT.md](../docs/DEPLOYMENT.md)
- Déploiement pour agents IA : [../docs/AI_AGENT_DEPLOYMENT.md](../docs/AI_AGENT_DEPLOYMENT.md)
- Architecture : [../docs/ARCHITECTURE.md](../docs/ARCHITECTURE.md)
- Processus de release : [../docs/RELEASE.md](../docs/RELEASE.md)

## Remerciements

- [`op7418/claude-to-im`](https://github.com/op7418/claude-to-im)
- [OpenAI Codex CLI / Codex SDK](https://github.com/openai/codex)
- [discord.js](https://discord.js.org/)
