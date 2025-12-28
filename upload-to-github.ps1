# Скрипт для загрузки проекта в GitHub
# Запустите этот скрипт после создания репозитория на GitHub

Write-Host "🚀 Настройка Git репозитория..." -ForegroundColor Green

# Проверка, инициализирован ли git
if (-not (Test-Path .git)) {
    Write-Host "📦 Инициализация Git..." -ForegroundColor Yellow
    git init
} else {
    Write-Host "✅ Git уже инициализирован" -ForegroundColor Green
}

# Добавление всех файлов
Write-Host "📝 Добавление файлов..." -ForegroundColor Yellow
git add .

# Создание коммита
Write-Host "💾 Создание коммита..." -ForegroundColor Yellow
git commit -m "Initial commit - FTC Inspire Portal"

Write-Host ""
Write-Host "✅ Готово! Теперь выполните следующие шаги:" -ForegroundColor Green
Write-Host ""
Write-Host "1. Создайте репозиторий на GitHub:" -ForegroundColor Cyan
Write-Host "   https://github.com/new" -ForegroundColor White
Write-Host ""
Write-Host "2. После создания репозитория выполните:" -ForegroundColor Cyan
Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git" -ForegroundColor White
Write-Host "   git branch -M main" -ForegroundColor White
Write-Host "   git push -u origin main" -ForegroundColor White
Write-Host ""
Write-Host "3. Замените YOUR_USERNAME и YOUR_REPO на ваши данные" -ForegroundColor Yellow
Write-Host ""

