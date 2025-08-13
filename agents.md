## Agents guide: `function.md` docs in every folder and the changelog workflow

### Purpose
- **Goal**: Ensure every folder explains the purpose of its documents and that changes across the repo are transparently tracked.
- **Outcomes**: Each folder contains a `function.md`; the repository root contains a single `CHANGELOG.md` that is updated with every change.

### Scope
- Applies to all contributors (humans and AI agents) and to all folders in this repository.
- Includes instructions for creating and updating `function.md` files and maintaining the root `CHANGELOG.md`.

### Core rules
- **Every folder must contain a `function.md`** describing the folder’s purpose and its documents.
- **The root `CHANGELOG.md` must be updated for every change** merged into the default branch.
- **Keep entries concise and factual**; link to commits or PRs where possible.

## How to create a new `function.md` in a folder
1. Create a file named `function.md` inside the target folder.
2. Copy the template from the section below and fill it out.
3. Verify the table lists every file in the folder with a short purpose statement.
4. Commit with a clear message (see “Commit message guidance”).
5. Update the root `CHANGELOG.md` under “Unreleased”.

## How to update an existing `function.md`
When any file within a folder is added, modified, renamed, or removed:
- Update that folder’s `function.md` “Documents index” table accordingly.
- Update the “Last updated” date and author.
- Add a bullet to “Update history” describing the change and referencing the PR/commit.
- Update the root `CHANGELOG.md`.

## `function.md` template (copy/paste)
```markdown
## Function: <folder-path>

- **Purpose**: <1–3 sentences explaining the folder’s role and why these documents exist>
- **Owners**: <names or team>
- **Audience**: <who reads/uses these docs>
- **Last updated**: YYYY-MM-DD by <name>

### Documents index
| File | Purpose | Status | Last updated |
|------|---------|--------|--------------|
| <file-name.ext> | <short purpose> | Draft/Active/Deprecated | YYYY-MM-DD |

### Conventions and dependencies
- <notes about naming, links to standards, external dependencies>

### Update history (local to this folder)
- YYYY-MM-DD: <short description> (by <name>, ref: <PR #/commit hash>)
```

## Changelog workflow
- The repository root contains a single `CHANGELOG.md` following the “Keep a Changelog” style.
- For every change (docs or code), add an entry under the “Unreleased” section.
- Group changes under these headings: **Added**, **Changed**, **Deprecated**, **Removed**, **Fixed**, **Security**.
- When cutting a release or notable checkpoint, add a dated section and move the “Unreleased” entries under it.

### Example `CHANGELOG.md` entry
```markdown
## Unreleased
### Added
- Introduced `function.md` in `src/pages/blog/` describing post files (PR #123).

### Changed
- Updated `src/components/Header.astro` docs to reflect new nav structure (commit abc1234).
```

## Commit message guidance
- Prefer conventional commits: `docs:`, `feat:`, `fix:`, `chore:`, `refactor:`, `test:`.
- Mention the folder you touched and whether you updated `function.md` and `CHANGELOG.md`.
  - Example: `docs: add function.md to src/pages/demos and update CHANGELOG`

## PR checklist (must-have)
- `function.md` exists or is updated in every folder you changed.
- `CHANGELOG.md` updated under “Unreleased”.
- Links to PRs/commits added in relevant `function.md` update histories.

## Quick checks (optional helpers)
- Find folders missing a `function.md` (macOS/Linux):
```bash
find . -type d \
  -not -path "*/node_modules/*" \
  -not -path "*/.git/*" \
  -not -path "." \
  -exec sh -c 'test -f "$0/function.md" || echo "$0"' {} \;
```

## Style notes
- Keep descriptions short and action-oriented. One sentence is often enough.
- Use present tense. Avoid marketing language; be specific.
- Prefer tables for document indexes to keep things scannable.


