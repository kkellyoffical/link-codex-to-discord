# Release Guide

This repository is set up for tag-based GitHub Releases.

## Recommended release process

1. Update docs and templates.
2. Commit changes on the default branch.
3. Create a semantic version tag:

```bash
git tag -a v0.1.0 -m "v0.1.0"
git push origin v0.1.0
```

4. Let the GitHub Actions workflow create the Release entry.

## Manual release with GitHub CLI

If you want to create a release manually:

```bash
gh release create v0.1.0 \
  --title "v0.1.0" \
  --generate-notes
```

If you need to attach files:

```bash
gh release create v0.1.0 \
  ./path/to/asset1.zip \
  ./path/to/asset2.tar.gz \
  --title "v0.1.0" \
  --generate-notes
```

## What to include in a release

Recommended:

- changelog summary
- deployment notes
- breaking changes
- upgrade instructions

Optional:

- sanitized config templates
- packaged scripts
- sample service files

Do not include:

- live `.env`
- logs
- local session dumps
- screenshots containing private IDs or paths

## Release policy

- use tags only for versions you are willing to support
- prefer one release note per version tag
- keep pre-release tags explicit, for example `v0.2.0-beta.1`

## Official references

- GitHub Docs, About releases:
  https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases
- GitHub Docs, Managing releases:
  https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository
- GitHub CLI manual, `gh release create`:
  https://cli.github.com/manual/gh_release_create

