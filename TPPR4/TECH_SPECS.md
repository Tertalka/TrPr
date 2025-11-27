# 🔧 Технічні характеристики та залежності

## 📋 Поточні залежності

### Production Dependencies
```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "axios": "^1.7.7",
  "@mui/material": "^5.x.x",
  "@emotion/react": "^11.x.x",
  "@emotion/styled": "^11.x.x",
  "@mui/icons-material": "^5.x.x",
  "prop-types": "^15.x.x"
}
```

### Dev Dependencies
```json
{
  "vite": "^7.2.4",
  "@vitejs/plugin-react": "^5.1.1",
  "eslint": "^9.39.1",
  "@eslint/js": "^9.39.1",
  "eslint-plugin-react-hooks": "^7.0.1",
  "eslint-plugin-react-refresh": "^0.4.24"
}
```

## 🖥️ Системні вимоги

- **Node.js:** >= 16.0.0
- **npm:** >= 8.0.0
- **ОС:** Windows, macOS, Linux
- **Браузер:** Сучасний браузер з підтримкою ES6+

## 🔌 API Специфікація

### FakeStore API

**Endpoint:** `https://fakestoreapi.com/products`

**HTTP Method:** GET

**Response Type:** JSON (Array of Products)

**Response Format:**
```json
[
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  }
]
```

**Headers Потрібні:**
- Нічого спеціального не потрібно (публічний API)

**Status Codes:**
- 200: OK
- 404: Not Found
- 500: Server Error

**Timeout:** 5000ms (встановлено в axios)

## 🌐 Адреси та портів

| Адреса | Порт | Назва | Статус |
|--------|------|------|---------|
| localhost | 5173 | Vite Dev Server | ✅ Запущено |
| fakestoreapi.com | 443 (HTTPS) | API Server | ✅ Видимо |

## 📊 Розмір бандла

### Примерні розміри:
- **React:** ~42 KB
- **Material-UI:** ~300 KB
- **Інше:** ~50 KB
- **Всього:** ~400 KB (gzipped)

## ⚙️ Конфігурація Vite

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

## 🔐 CORS (Cross-Origin Resource Sharing)

**FakeStore API:** Дозволяє запити з будь-яких джерел (CORS enabled)

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
```

## 📁 Файлова структура

```
TPPR4/
├── src/
│   ├── App.jsx              (main component)
│   ├── App.css              (styles)
│   ├── main.jsx             (entry point)
│   ├── index.css            (global styles)
│   ├── components/
│   │   ├── ProductsTable.jsx
│   │   ├── ProductModal.jsx
│   │   └── FavoritesPanel.jsx
│   └── assets/
├── public/
├── index.html
├── vite.config.js
├── package.json
├── package-lock.json
├── README.md
├── DOCUMENTATION.md
├── TESTING.md
├── ARCHITECTURE.md
└── TECH_SPECS.md (цей файл)
```

## 🎯 Функціональні вимоги

### Реалізовано:
- [x] Завантаження даних з зовнішнього API (axios)
- [x] Вивід даних у вигляді таблиці
- [x] Інтерактивна таблиця (клік на рядок)
- [x] Модальне вікно з деталями
- [x] Функція "Вибране" (улюблені)
- [x] Окремий компонент для вибраних товарів
- [x] Material-UI для UI
- [x] Адаптивний дизайн
- [x] Обробка помилок
- [x] Індикатор завантаження

### Майбутні покращення:
- [ ] LocalStorage для збереження вибраних товарів
- [ ] Сортування таблиці
- [ ] Пошук по товарам
- [ ] Фільтрація по категоріям
- [ ] Загрузка зображень товарів
- [ ] Оформлення замовлення
- [ ] Темна тема (Dark Mode)

## 🚀 Scripts

```bash
npm run dev      # Запуск dev сервера (http://localhost:5173/)
npm run build    # Побудова для production
npm run preview  # Перегляд production версії
npm run lint     # ESLint перевірка коду
```

## 🔍 Дебаг інформація

### Console Logs:
- API помилки логуються в console.error()
- Network запити видно в DevTools -> Network tab

### React DevTools:
- Можна встановити розширення React DevTools для браузера
- Для дебагу state та props

### Network Tab:
- Можна перевірити API запит до FakeStore
- Перевірити response та время завантаження

## 📈 Перформанс

### Оптимізація:
- Вайт асинхронне завантаження даних
- Умовне рендерування компонентів
- Ефективна обробка списків (використання key в map)
- CSS-in-JS оптимізація через Emotion

### Metric:
- FCP (First Contentful Paint): ~1-2 сек
- LCP (Largest Contentful Paint): ~2-3 сек
- CLS (Cumulative Layout Shift): < 0.1 (хорошо)

## 🔐 Безпека

### Заходи:
- Нема чутливої інформації в коді
- API запити через HTTPS (FakeStore)
- Input очищується через Material-UI компоненти
- XSS захист через React (автоматично)

### Потенційні ризики:
- API дані не валідуються (припускаємо, що API безпечний)
- CORS дозволяє будь-яким сайтам доступ

## 🌍 Локалізація

**Поточна мова:** Українська
- Всі текти на українській мові
- Дати та числа в українському форматі
- Валюта: USD ($)

## 📞 Контакти та Посилання

- **GitHub:** [Tertalka/TrPr](https://github.com/Tertalka/TrPr)
- **API:** [FakeStore API](https://fakestoreapi.com/)
- **Material-UI:** [MUI Documentation](https://mui.com/)
- **React:** [React Documentation](https://react.dev/)
- **Axios:** [Axios Documentation](https://axios-http.com/)

---

**Останнє оновлення:** 28 Листопада 2025  
**Версія:** 1.0.0  
**Статус:** ✅ Працює
