# Claude Code 專案指引

## Git 工作流程

- 完成任務後，直接將 feature branch **merge 進 `main` 並推送**，不需開 Pull Request。
- 流程：`git checkout main` → `git pull origin main` → `git merge <feature-branch> --no-edit` → `git push origin main`
