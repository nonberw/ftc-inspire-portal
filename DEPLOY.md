# Инструкция по деплою

## Vercel (Рекомендуется)

1. **Подключите репозиторий:**
   - Загрузите код в GitHub/GitLab/Bitbucket
   - Зайдите на [vercel.com](https://vercel.com)
   - Импортируйте репозиторий

2. **Настройки:**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Переменные окружения (если нужны):**
   - Добавьте в настройках проекта
   - Например: `DATABASE_URL`, `API_KEY` и т.д.

4. **Деплой:**
   - Vercel автоматически задеплоит при каждом push
   - Получите URL вида: `your-project.vercel.app`

## Netlify

1. **Подключите репозиторий** аналогично Vercel

2. **Настройки Build:**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Деплой** - автоматический при push

## Docker (для собственного сервера)

Создайте `Dockerfile`:

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Запуск:
```bash
docker build -t ftc-inspire-portal .
docker run -p 3000:3000 ftc-inspire-portal
```

## Рекомендации

- Используйте Vercel для быстрого деплоя
- Настройте кастомный домен
- Включите SSL/HTTPS
- Настройте CDN для статических файлов
- Добавьте мониторинг (Sentry, LogRocket)

