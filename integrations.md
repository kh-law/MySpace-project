# MySpace — підключення бронювання (Sheets + Telegram + LiqPay)

Сайт статичний, тому вся серверна частина — один Google Apps Script. Нічого хостити не треба.

## 1. Google Sheets
Створи таблицю «MySpace bookings» з заголовками в рядку 1:
`Дата створення | Дата сеансу | Час | Годин | Гостей | Сума | Статус | Ім'я | Телефон | Telegram | Фільм | Ключ дня | Снеки`

Колонка **Ключ дня** (L) — технічна, вигляду `2026-8-14`; сайт за нею визначає, які години викреслити.

## 2. Telegram-бот
1. У @BotFather → `/newbot` → отримаєш токен.
2. Додай бота в чат кінозалу (або напиши йому в особисті від @myspacerv).
3. Дізнайся chat id: відкрий `https://api.telegram.org/bot<ТОКЕН>/getUpdates` після першого повідомлення боту.
Токен і chat id зберігай лише в Apps Script (Project Settings → Script properties), не в коді сайту.

## 3. Apps Script
Extensions → Apps Script, вставити:

```js
function doPost(e) {
  const b = JSON.parse(e.postData.contents);
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  sh.appendRow([new Date(), b.date, b.time, b.hours, b.guests, b.total, b.status, b.name, b.phone, b.telegram, b.film, b.dayKey, b.snacks]);

  const p = PropertiesService.getScriptProperties();
  const text = [
    'Нове бронювання MySpace',
    b.date + ' · ' + b.time + ' (' + b.hours + ' год)',
    'Гостей: ' + b.guests,
    'Фільм: ' + (b.film || '—'),
    'Снеки: ' + (b.snacks || '—'),
    'Сума: ' + b.total + ' грн — ' + b.status,
    b.name + ' · ' + (b.phone || '') + ' ' + (b.telegram || '')
  ].join('\n');
  UrlFetchApp.fetch('https://api.telegram.org/bot' + p.getProperty('TG_TOKEN') + '/sendMessage', {
    method: 'post',
    payload: { chat_id: p.getProperty('TG_CHAT'), text: text }
  });
  return ContentService.createTextOutput('ok');
}

// Віддає зайняті години сайту (JSONP). Ключ дня — "рік-місяць(0-11)-день".
function doGet(e) {
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const rows = sh.getDataRange().getValues().slice(1);
  const out = {};
  rows.forEach(function (r) {
    const dayKey = r[11];            // колонка L — ключ дня
    const time = String(r[2] || ''); // колонка C — "18:00–21:00"
    if (!dayKey || !time) return;
    const m = time.match(/(\d{1,2}):00.(\d{1,2}):00/);
    if (!m) return;
    const from = Number(m[1]), to = Number(m[2]);
    out[dayKey] = out[dayKey] || [];
    for (var h = from; h < to; h++) if (out[dayKey].indexOf(h) === -1) out[dayKey].push(h);
  });
  const cb = e.parameter.callback;
  const json = JSON.stringify(out);
  return cb
    ? ContentService.createTextOutput(cb + '(' + json + ')').setMimeType(ContentService.MimeType.JAVASCRIPT)
    : ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
}
```

Script properties: `TG_TOKEN`, `TG_CHAT`.
Deploy → New deployment → Web app → Execute as: **Me**, Who has access: **Anyone** → скопіюй URL.

## 4. LiqPay
У кабінеті ПриватБанку створи платіжне посилання (або сторінку оплати) і візьми його URL.
Повна сума списується одразу. Статус «оплачено» в таблиці ставиться вручну або через callback LiqPay (потрібен другий `doPost` — зроблю, коли буде акаунт).

## 5. Вставити в сайт
`ui_kits/website/BookingScreen.jsx`, початок файлу:

```js
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/.../exec";
const LIQPAY_URL = "https://www.liqpay.ua/api/3/checkout?...";
```

Після цього кнопка «Оплатити» пише рядок у таблицю, надсилає повідомлення в Telegram і веде на оплату,
а при завантаженні сторінки сайт підтягує з таблиці вже зайняті години й викреслює їх.
Поки поля порожні — заявка й зайняті години зберігаються лише в браузері (для демо).

Важливо: після будь-якої зміни коду Apps Script потрібно зробити новий deploy (або Manage deployments → Edit → New version).
