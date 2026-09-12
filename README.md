# MySpace — приватний кінозал

Статичний сайт. Нічого збирати не потрібно: усі файли віддаються як є.

## Публікація на GitHub Pages
1. Створити репозиторій (напр. `myspace`) на github.com.
2. Завантажити вміст цієї папки в корінь репозиторію (`index.html` мусить бути в корені).
3. Settings → Pages → Source: **Deploy from a branch**, Branch: `main`, Folder: `/ (root)` → Save.
4. Через 1–2 хвилини сайт буде на `https://<username>.github.io/myspace/`.

Файл `.nojekyll` потрібен, щоб Pages не обробляв папки через Jekyll.

## Структура
- `index.html` — точка входу
- `*.jsx` — екрани (транспілюються у браузері через Babel standalone)
- `ds/` — дизайн-система: токени та бандл компонентів
- `assets/` — фото залу, 48 кадрів для анімації, відео, логотипи

## Бронювання
Запис у Google Sheets, Telegram-сповіщення та оплата LiqPay підключаються двома константами
на початку `BookingScreen.jsx` — інструкція в `integrations.md`.
