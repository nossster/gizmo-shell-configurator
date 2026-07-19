# Gizmo Shell Configurator

SPA-приложение для визуальной настройки оболочки `Gizmo.Client.UI` с live preview и экспортом готового CSS override.

## Что умеет

- визуально настраивать shell-палитру Gizmo Client UI;
- переключать preview: `Home`, `Apps`, `Shop`, `Profile`, `Login`;
- показывать цвета в формате `hex` во всех color controls;
- импортировать существующий CSS override прямо в preview;
- экспортировать готовый CSS-файл для загрузки в custom CSS интерфейса Gizmo Client;
- использовать 10 готовых пресетов: 5 тёмных и 5 светлых;
- проверять popup / dialog / tooltip поверхности через встроенный audit preview.

## Основные файлы

- `index.html` — SPA-разметка и preview-макеты;
- `styles.css` — стили самого конфигуратора и live preview;
- `app.js` — контролы, пресеты, генерация CSS, import/export логика;
- `package.json` — минимальные scripts для проверки JS.

## Запуск локально

```bash
cd /root/projects/gizmo-shell-configurator
python3 -m http.server 8899 --bind 127.0.0.1
```

Открыть:

- `http://127.0.0.1:8899`

## Проверка

- JS syntax: `node --check app.js`
- npm shortcut: `npm test`
- визуальная проверка выполнялась через Playwright screenshots;
- runtime console errors: `playwright-console.log`

## Выходной результат

Кнопка **Скачать CSS** выгружает файл вида:

- `gizmo-shell-custom.css`

Этот файл можно загрузить как custom CSS override в интерфейсе клиента.
