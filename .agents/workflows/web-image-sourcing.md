---
description: 自動從網路尋找免版權圖片並轉換格式 (Web Image Sourcing)
---

# Web Image Sourcing Guideline

當使用者要求「配圖」或是為文章設計首圖，但不希望生圖（或要求使用現成素材）時，請啟動此流程。本質上，這是一個避免浪費算力與避免生圖瑕疵的實用策略。

## 流程規範

### 第一階段：決定下載來源與關鍵字
1. **確定圖像主題**：根據內容（例如「駭客」、「辦公室」、「雲端伺服器」）選擇相關關鍵字。
2. **尋找來源 URL (Unsplash Direct CDN)**：

   ⚠️ **注意：`images.unsplash.com/featured/` 和 `source.unsplash.com/` 這兩種舊格式均已失效，會回傳 404 或 503，請勿使用。**

   正確做法是使用**已知有效的 Unsplash 直接 Photo ID URL**。以下是按主題整理的可用圖片 ID 清單：

   | 主題 | Photo ID | 說明 |
   |------|----------|------|
   | AI / Neural Network | `1620712943543-bcc4688e7485` | 神經網路抽象視覺 |
   | Engineering / Infrastructure | `1558494949-ef010cbdcc31` | 工程基礎設施 |
   | Coding / Technology | `1461749280684-dccba630e2f6` | 程式碼螢幕 |
   | Data / Analytics | `1551288049-bebda4e38f71` | 資料分析圖表 |
   | Cloud / Server | `1558494950-f3e5a6c6e6e6` | 雲端伺服器 |
   | Business / Meeting | `1556761175-b413da4baf72` | 商業會議 |
   | Security / Lock | `1555949963-ff9fe0c870cb` | 安全鎖 |
   | Robot / Automation | `1485827404703-89b55fcc595e` | 機器人自動化 |
   | Abstract / Purple | `1518770660439-4636190af475` | 抽象紫色科技 |
   | Finance / Banking | `1554774853-719586f82d77` | 金融銀行 |

   使用格式：
   ```
   https://images.unsplash.com/photo-{PHOTO_ID}?w=1200&q=80
   ```
   例如：`https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80`

   **如果上表找不到合適主題**：先用 `curl -L -I` 測試 URL 是否回傳 `HTTP/2 200` 再下載，避免浪費時間。可嘗試在 Unsplash 網站搜尋後從 URL 複製 Photo ID（格式為 `/photo-XXXXX`）。

### 第二階段：下載並轉檔
為確保網站（特別是 Astro 或 Next.js 專案）的效能與 SEO 分數，所有首圖與插入圖片**必須**轉換為 `webp`，並控制寬度。

1. **下載圖片至暫存區**：
   使用 `curl` 將圖片暫存到 `/tmp`。
   ```bash
   curl -L -o /tmp/raw_image.jpg "https://images.unsplash... (URL)"
   ```
2. **利用 Python (Pillow) 轉檔為 WEBP**：
   撰寫或執行 Python 腳本將圖片：
   - 裁切或調整寬度為最大 1200px (LANCZOS)。
   - 統一轉成 `RGB` 以防萬一。
   - 儲存至最終靜態目錄，例如 `public/images/blog/<filename>.webp`，並將品質設定為 `80`。

範例 Python 腳本 (經由 `run_command` 執行)：
```python
from PIL import Image
import sys

input_path = '/tmp/raw_image.jpg'
output_path = '/Users/litseliu/prototypes/nils-digital-studio/public/images/blog/my-topic.webp'

try:
    img = Image.open(input_path)
    if img.mode in ('RGBA', 'P'):
        img = img.convert('RGB')
    w, h = img.size
    if w > 1200:
        ratio = 1200.0 / w
        img = img.resize((1200, int(h * ratio)), Image.Resampling.LANCZOS)
    img.save(output_path, format='WEBP', quality=80)
    print(f"Success! Image saved to {output_path} with size {img.size}")
except Exception as e:
    print(f"Error: {e}")
```

### 第三階段：後續處理
1. 在對應的 Markdown 文件中更新 `coverImage` 路徑：`coverImage: "/images/blog/my-topic.webp"`。
2. 加入對應的 alt-text (如果需要)：`![alt text](/images/blog/my-topic.webp)`。

## 注意事項
- **版權問題**：僅使用公有領域（Public Domain）或免費商業使用（如 Unsplash、Pixabay、或是使用授權的開源圖庫）抓取圖片。
- **快取清理**：`/tmp` 目錄中的多餘素材不需要特別手動清除，隨著系統重啟會自動釋放，但如果有極大檔案需留意。
