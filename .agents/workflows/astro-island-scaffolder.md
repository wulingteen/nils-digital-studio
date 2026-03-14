---
description: Astro 孤島元件生成器 (Astro Island Scaffolder)
---

# Astro 孤島元件生成器 (Astro Island Scaffolder)

當使用者需要「建立新元件」、「新增動態區塊」或啟動此 Workflow 時，請使用以下標準化 SOP 來生成適用於此專案的 React Island 元件。

## 1. 元件架構守則
所有互動性、需要狀態 (State) 或動畫渲染 (Framer Motion) 的元件，都必須實作為 `.tsx` (React) 檔案，並放置於 `src/components/ui/` 或 `src/components/` 底下。
純靜態展示無互動的元件，才使用 `.astro`。

## 2. 完美的 React Island 模板
請使用以下結構生成檔案：

```tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// 若需要字典翻譯，可以考慮傳入 lang 或在內部建構 mapping

interface MyNewComponentProps {
  lang: 'en' | 'zh' | 'de';
  title?: string;
}

export default function MyNewComponent({ lang, title }: MyNewComponentProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // 避免 SSR 與 Client Hydration Mismatch

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative p-6 rounded-2xl bg-white/5 dark:bg-black/20 backdrop-blur-lg border border-primary/20"
    >
      <h3 className="text-xl font-bold text-foreground">{title || "動態元件"}</h3>
      <p className="text-muted-foreground mt-2">
        目前的語系環境是：{lang}
      </p>
    </motion.div>
  );
}
```

## 3. Astro 頁面注入規則
當您將產生的 TSX 元件放入 `.astro` 頁面（如 `idx.astro` 或 `Layout.astro`）時，🚨 **絕對不可忘記 Astro 孤島指令**：
- 必須加上 `client:load` (立即載入)、`client:idle` (閒置載入) 或 `client:visible` (滾動可視區載入)。
- 範例：`<MyNewComponent lang={lang} client:visible />`

## 4. 驗證與提交
- 建立後，執行 `npm run dev` 並透過瀏覽器截圖 (如有需要) 驗證深色/淺色模式下玻璃擬態 (Glassmorphism) 邊框是否清晰。
- 確認無誤後提交 Git。
