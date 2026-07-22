# Gizmo Shell Configurator

SPA-приложение для визуальной настройки оболочки `Gizmo.Client.UI` с live preview и экспортом готового CSS override.

## Что умеет

- визуально настраивать shell-палитру из 16 цветов;
- показывать интерактивную карту привязок: какой стиль управляет какими реальными элементами Host.Web;
- подсвечивать связанные элементы прямо в Real Host.Web по hover и закреплять подсветку кликом;
- сразу применять валидные изменения к live preview и Generated CSS без кнопки «Применить»;
- переключаться между быстрым Demo Preview и настоящим `Gizmo.Client.UI.Host.Web`;
- входить в настоящий Host.Web через автономный `demo / demo` и переходить по `Home`, `Apps`, `Shop`, `Profile`;
- применять Generated CSS непосредственно к реальным Blazor-компонентам на лету через same-origin preview;
- переключать 10 preview-маршрутов: `Home`, `Apps`, `Shop`, карточка товара,
  профиль, доступное время, покупки, вход, восстановление пароля и регистрация;
- воспроизводить внутреннюю навигацию, меню пользователя, корзину и состояния
  форм прямо внутри preview;
- показывать hover/click-детали карточек приложений с пакетом времени и ценой;
- использовать встроенный SVG-спрайт вместо emoji и растровых изображений;
- принимать точные `HEX`/`RGBA`-значения и прозрачность во всех color controls;
- импортировать существующий CSS override прямо в preview;
- экспортировать готовый CSS-файл для загрузки в custom CSS интерфейса Gizmo Client;
- добавлять в экспортируемый CSS комментарий с готовым пользовательским `.reg`-скриптом для цвета панели задач Windows;
- использовать 11 пересобранных пресетов на общей компактной системе токенов;
- проверять popup / dialog / tooltip поверхности через встроенный audit preview.

## Основные файлы

- `index.html` — SPA-разметка и preview-макеты;
- `styles.css` — стили самого конфигуратора и live preview;
- `app.js` — контролы, пресеты, генерация CSS, import/export логика;
- `scripts/sync-real-client.py` — перенос опубликованного Host.Web runtime в generated preview;
- `scripts/build-real-client.py` — временная fixture-подготовка, publish и синхронизация demo-login runtime;
- `scripts/package_release.py` — сборка и проверка standalone ZIP вместе с полным Host.Web runtime;
- `scripts/serve.py` — локальный static server с правильными MIME types для Blazor WebAssembly;
- `start-configurator.bat` — запуск конфигуратора двойным кликом в Windows;
- `package.json` — минимальные scripts для проверки JS.

## Настоящий Gizmo Client preview

Кнопка **Real Host.Web** открывает реальные Razor/Blazor-компоненты из
`Gizmo.Client.UI.Host.Web`. Host использует встроенный `TestClient`, поэтому
соединение с Gizmo Server, API, авторизация сервера и realtime не требуются.
Для входа используются `demo / demo`; после входа доступны настоящие страницы
`Home`, `Apps`, `Shop` и `Profile` с внутренней Blazor-навигацией.

Generated CSS вставляется только в документ preview iframe и обновляется при
каждом валидном изменении цвета, шрифта, эффекта, пресета или импортированного
CSS. Кнопка **Скачать CSS** сохраняет тот же CSS, который виден в настоящем UI.

Blazor runtime загружается лениво после первого нажатия **Real Host.Web**.
Первый запуск может занять несколько секунд. Generated folders `real-client/`
и `_framework/` не хранятся в Git, но включаются в standalone-архив.

## Компактная палитра

В панели доступны 16 значений: четыре поверхности, два цвета текста,
две точки акцентного градиента, контрастный акцент, одна граница, отдельный цвет
предупреждения, три отдельных цвета для `.giz-timeline-item` и
`.giz-time-product-expiration`, а также два остальных статуса. Warning больше
не меняет Timeline и Expiration. Для Expiration отдельно настраиваются текст и фон.
Glass/soft surfaces,
strong border, ghost text, карточки, hover-ссылки и disabled-кнопки рассчитываются автоматически. Старые CSS-переменные
сохраняются в экспорте, поэтому существующие селекторы Gizmo Client продолжают
работать.

В начале Generated CSS находится закомментированный блок
`gizmo-taskbar-color.reg`. Он использует `--shell-bg`, переводит RGB в Windows
ABGR DWORD и изменяет только пользовательские ключи `HKCU`.

## Запуск локально

### Windows

Запустить `start-configurator.bat` двойным кликом. По умолчанию откроется
`http://127.0.0.1:8920/`. Для другого порта:

```bat
start-configurator.bat 8899
```

### Linux/macOS

```bash
cd /root/projects/gizmo-shell-configurator
python3 scripts/serve.py --port 8899
```

Открыть:

- `http://127.0.0.1:8899`

### Обновление настоящего Host.Web runtime

Если исходники `Gizmo.Client.UI` находятся рядом с конфигуратором:

```bash
npm run build:real-client
```

Скрипт создаёт изолированный временный Git worktree, отключает в нём блокирующую
тестовую резервацию, делает маршруты совместимыми с `/real-client/`, публикует
Host.Web и синхронизирует runtime с marker `demoLogin: true`. Рабочая копия
внешнего репозитория не изменяется даже при аварийном завершении сборки.
Demo fixture заранее заполняет Login значениями `demo` / `demo` и возвращает
ровно 4 приложения и 4 товара через настоящий `TestClient`, поэтому Apps и
Shop используют нативные Blazor-карточки, а не HTML-моки конфигуратора.

Для другого расположения исходников или уже готового publish output:

```bash
npm run build:real-client -- --source-root /path/to/Gizmo.Client.UI
npm run sync:real-client -- --source /path/to/publish/wwwroot
```

При синхронизации `appsettings.*.json` удаляются, а API/realtime endpoints в
основном `appsettings.json` заменяются на localhost-заглушки. Standalone preview
не переносит конфигурацию реального Gizmo Server.

### Сборка standalone-архива

После `npm run build:real-client` собрать полный release ZIP можно командой:

```bash
npm run package:release -- --output /path/to/gizmo-shell-configurator-v1.2.1.zip
```

Packager использует явный allowlist, включает generated `real-client/` и
root-level `_framework/`, а затем проверяет runtime marker, обязательные Blazor
assemblies, localhost-only endpoints и все JavaScript bridge-файлы
`Gizmo.Client.UI`. Архив не создаётся, если runtime не прошёл синхронизацию или
любой обязательный asset отсутствует. Повторная проверка готового файла:

```bash
npm run package:release -- --check /path/to/gizmo-shell-configurator-v1.2.1.zip
```

## Проверка

- JS syntax: `node --check app.js`
- packager contracts: `npm run test:package`;
- полный E2E-набор: `npm test`;
- E2E проверяет компактную палитру, производные токены, все пресеты,
  карту привязок, Export → Import, Windows ABGR DWORD, 10 preview-маршрутов и настоящий Host.Web;
- real-host E2E проверяет Blazor `[client-theme]`, live CSS variable,
  вход `demo / demo`, маршруты Home/Apps/Shop/Profile, preview wallpaper,
  отсутствие browser errors и содержимое скачанного CSS;
- визуальная проверка выполнялась через Playwright screenshots;
- проверены все 10 маршрутов, интерактивная корзина и формы;
- в Demo Preview отсутствуют `<img>`, `data:image`, emoji и runtime console errors.

## Выходной результат

Кнопка **Скачать CSS** выгружает файл вида:

- `gizmo-shell-custom.css`

Этот файл можно загрузить как custom CSS override в интерфейсе клиента.
