---
description: 安全 Git 推送流程 (Git Safe Push)
---

# 安全 Git 推送流程 (Git Safe Push)

處理 `git push` 失敗、遠端有新 commit、分支衝突等情況的標準作業程序。

## 標準推送流程

每次推送前，依序執行以下步驟：

```bash
# 1. 確認目前狀態
git status

# 2. 暫存並 commit（如果尚未 commit）
git add <files>
git commit -m "feat: ..."

# 3. 推送（優先用 --rebase 避免無意義的 merge commit）
git pull --rebase && git push
```

## 常見錯誤處理

### ❌ `rejected: fetch first`（遠端有新 commit）
```bash
git pull --rebase
git push
```
- `--rebase` 會把你的 commit 接在遠端最新 commit 之後，保持線性歷史
- 如果 rebase 過程中有衝突，手動解決後執行 `git rebase --continue`

### ❌ Rebase 衝突無法解決
```bash
git rebase --abort   # 取消 rebase，回到 pull 前的狀態
git pull --no-rebase  # 改用 merge 策略
git push
```

### ❌ `rejected: non-fast-forward`（本地落後太多）
先確認不會覆蓋別人的工作：
```bash
git log origin/main..HEAD   # 查看本地有哪些 commit 還沒在遠端
git log HEAD..origin/main   # 查看遠端有哪些 commit 還沒在本地
```
確認安全後才執行 `git pull --rebase && git push`。

### ❌ 有 uncommitted changes 導致 pull 失敗
```bash
git stash
git pull --rebase
git stash pop
git push
```

## ⚠️ 禁止事項
- **禁止** `git push --force` 到 `main` 分支，除非使用者明確要求
- **禁止** `git reset --hard` 來「清掉問題」，先診斷再決定
- **禁止** 跳過 pre-commit hooks（`--no-verify`），hook 失敗要修根本問題

## 推送成功後的確認
```bash
git log --oneline -5   # 確認 commit 已在遠端
```
看到最新 commit 的 hash 出現即表示成功。
