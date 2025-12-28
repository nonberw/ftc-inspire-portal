# Автоматическая загрузка в GitHub
# Этот скрипт поможет максимально автоматизировать процесс

Write-Host "🚀 Автоматическая загрузка в GitHub" -ForegroundColor Green
Write-Host ""

# Проверка Git
$gitInstalled = Get-Command git -ErrorAction SilentlyContinue
if (-not $gitInstalled) {
    Write-Host "❌ Git не установлен!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Установите Git:" -ForegroundColor Yellow
    Write-Host "1. Скачайте: https://git-scm.com/download/win" -ForegroundColor Cyan
    Write-Host "2. Установите (все настройки по умолчанию)" -ForegroundColor Cyan
    Write-Host "3. Перезапустите этот скрипт" -ForegroundColor Cyan
    exit
}

Write-Host "✅ Git установлен" -ForegroundColor Green
Write-Host ""

# Инициализация репозитория
if (-not (Test-Path .git)) {
    Write-Host "📦 Инициализация Git репозитория..." -ForegroundColor Yellow
    git init
    Write-Host "✅ Репозиторий инициализирован" -ForegroundColor Green
} else {
    Write-Host "✅ Git репозиторий уже существует" -ForegroundColor Green
}

Write-Host ""

# Добавление файлов
Write-Host "📝 Добавление файлов..." -ForegroundColor Yellow
git add .
Write-Host "✅ Файлы добавлены" -ForegroundColor Green

Write-Host ""

# Проверка статуса
$status = git status --porcelain
if ($status) {
    Write-Host "💾 Создание коммита..." -ForegroundColor Yellow
    git commit -m "Initial commit - FTC Inspire Portal"
    Write-Host "✅ Коммит создан" -ForegroundColor Green
} else {
    Write-Host "ℹ️  Нет изменений для коммита" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "=" * 60 -ForegroundColor Cyan
Write-Host "✅ Локальный репозиторий готов!" -ForegroundColor Green
Write-Host ""
Write-Host "📤 Следующие шаги:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Создайте репозиторий на GitHub:" -ForegroundColor Cyan
Write-Host "   https://github.com/new" -ForegroundColor White
Write-Host "   Имя: ftc-inspire-portal" -ForegroundColor White
Write-Host "   НЕ ставьте галочки на README, .gitignore, license" -ForegroundColor White
Write-Host ""
Write-Host "2. После создания выполните:" -ForegroundColor Cyan
Write-Host "   git remote add origin https://github.com/nonberw/ftc-inspire-portal.git" -ForegroundColor White
Write-Host "   git branch -M main" -ForegroundColor White
Write-Host "   git push -u origin main" -ForegroundColor White
Write-Host ""
Write-Host "3. При запросе пароля используйте Personal Access Token:" -ForegroundColor Cyan
Write-Host "   https://github.com/settings/tokens" -ForegroundColor White
Write-Host "   Scope: repo (все галочки)" -ForegroundColor White
Write-Host ""
Write-Host "=" * 60 -ForegroundColor Cyan

