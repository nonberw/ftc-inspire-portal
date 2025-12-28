# 📤 Пошаговая инструкция для загрузки в GitHub

## Шаг 1: Создайте репозиторий на GitHub

1. Зайдите на https://github.com/new
2. Repository name: `ftc-inspire-portal` (или любое другое)
3. Description: "FTC Inspire Award Portal - мощный инструмент аутрича"
4. Выберите Public или Private
5. **НЕ** ставьте галочки на "Add a README file", "Add .gitignore", "Choose a license"
6. Нажмите **"Create repository"**

## Шаг 2: Запустите скрипт

Откройте PowerShell в папке проекта и выполните:

```powershell
.\upload-to-github.ps1
```

Или выполните команды вручную:

```powershell
# Инициализация
git init

# Добавить файлы
git add .

# Создать коммит
git commit -m "Initial commit - FTC Inspire Portal"
```

## Шаг 3: Подключите к GitHub

После создания репозитория GitHub покажет инструкции. Выполните:

```powershell
# Замените YOUR_USERNAME на ваш GitHub username
# Замените ftc-inspire-portal на имя вашего репозитория
git remote add origin https://github.com/YOUR_USERNAME/ftc-inspire-portal.git

# Переименовать ветку в main
git branch -M main

# Загрузить код
git push -u origin main
```

## Шаг 4: Авторизация

Если попросит логин/пароль:
- **Username**: ваш GitHub username
- **Password**: используйте **Personal Access Token** (не пароль!)

### Как создать Personal Access Token:

1. Зайдите на https://github.com/settings/tokens
2. Нажмите "Generate new token" → "Generate new token (classic)"
3. Note: "FTC Portal Upload"
4. Выберите срок действия (например, 90 days)
5. Выберите scope: ✅ **repo** (все галочки в repo)
6. Нажмите "Generate token"
7. **Скопируйте токен** (он показывается только один раз!)
8. Используйте этот токен как пароль при `git push`

## Готово! 🎉

Код загружен в GitHub. Теперь можно подключить к Vercel:

1. https://vercel.com → "Add New Project"
2. Выберите ваш репозиторий
3. Нажмите "Deploy"

---

## Если возникли проблемы

### Ошибка "remote origin already exists"
```powershell
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

### Ошибка авторизации
- Убедитесь, что используете Personal Access Token, а не пароль
- Проверьте, что токен имеет права `repo`

### Git не установлен
Скачайте: https://git-scm.com/download/win

