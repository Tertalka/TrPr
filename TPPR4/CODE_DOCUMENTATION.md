# 📝 Код-документація

## 🗂️ Огляд файлів

### `src/App.jsx`
**Назначение:** Головний компонент програми, керування станом, API запити

**Основний функціонал:**
- Завантаження продуктів з API FakeStore через axios
- Управління станом (products, loading, error, selectedProduct, modalOpen, favorites)
- Event handlers для користувацьких дій
- Рендеринг основного макету з Grid

**Ключові функції:**
```javascript
useEffect(() => {
  const fetchProducts = async () => {
    // Завантаження продуктів
  }
  fetchProducts();
}, []);

const handleRowClick = (product) => {
  // Відкриття модального вікна
}

const handleAddToFavorites = (product) => {
  // Додавання у вибране (без дублікатів)
}

const handleRemoveFromFavorites = (productId) => {
  // Видалення з вибраного
}
```

---

### `src/components/ProductsTable.jsx`
**Назначение:** Таблиця з відображенням товарів

**Props:**
- `products` (array) - список товарів
- `onRowClick` (function) - callback при кліку на рядок
- `favorites` (array) - список вибраних товарів
- `onAddToFavorites` (function) - додавання у вибране
- `onRemoveFromFavorites` (function) - видалення з вибраного

**Функціонал:**
- Рендерування таблиці MUI
- Кольорова кодування категорій
- Іконки для управління вибраним
- Інтерактивне наведення на рядок
- Скрипте від виконання кліку на іконку вибраного

**Важливі деталі:**
```javascript
const handleFavoriteClick = (e, product) => {
  e.stopPropagation(); // Запобігає відкриттю модалі
  // toggle favorite
}

const getCategoryColor = (category) => {
  // Повертає колір для категорії
}
```

---

### `src/components/ProductModal.jsx`
**Назначение:** Модальне вікно з повною інформацією про товар

**Props:**
- `product` (object) - об'єкт товару
- `open` (boolean) - видимість модалі
- `onClose` (function) - закриття модалі
- `onAddToFavorites` (function) - додавання у вибране
- `isFavorite` (boolean) - чи товар вже у вибраному

**UI Елементи:**
- Dialog контейнер
- DialogTitle з заголовком
- DialogContent з інформацією:
  - Назва товару
  - Категорія (Chip)
  - Рейтинг (Rating компонент)
  - Ціна
  - Повний опис
  - ID
- DialogActions з кнопками

**Особливості:**
- Модаль не закривається при кліку на вибране (якщо вже додано)
- Іконка серця в заголовку, якщо товар вже вибран
- Кнопка зміняє стан при додаванні

---

### `src/components/FavoritesPanel.jsx`
**Назначение:** Панель зі списком вибраних товарів

**Props:**
- `favorites` (array) - список вибраних товарів
- `onRemove` (function) - видалення товару

**Функціонал:**
- Список з вибраними товарами
- Статистика (кількість, сума)
- Можливість видалити товар з кожного елемента
- Порожна сторінка при відсутності товарів
- Прокручуваний контейнер (max-height: 60vh)

**UI Компоненти:**
- Icon (ShoppingCart)
- Chips для статистики
- List з ListItem
- DeleteIcon для видалення
- Dividers для розділення

---

## 💻 Примеры использования

### Додавання нової функції (Наприклад, пошук)

**1. Додайте state в App.jsx:**
```javascript
const [searchTerm, setSearchTerm] = useState('');
```

**2. Відфільтруйте товари:**
```javascript
const filteredProducts = products.filter(p =>
  p.title.toLowerCase().includes(searchTerm.toLowerCase())
);
```

**3. Передайте в таблицю:**
```javascript
<ProductsTable products={filteredProducts} ... />
```

**4. Додайте input поле:**
```javascript
<TextField
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  placeholder="Пошук товарів..."
/>
```

### Додавання LocalStorage для вибраного

**1. Оновіть useEffect для завантаження:**
```javascript
useEffect(() => {
  const saved = localStorage.getItem('favorites');
  if (saved) {
    setFavorites(JSON.parse(saved));
  }
}, []);
```

**2. Оновіть handleAddToFavorites:**
```javascript
const handleAddToFavorites = (product) => {
  const newFavorites = [...favorites, product];
  setFavorites(newFavorites);
  localStorage.setItem('favorites', JSON.stringify(newFavorites));
};
```

**3. Оновіть handleRemoveFromFavorites:**
```javascript
const handleRemoveFromFavorites = (productId) => {
  const newFavorites = favorites.filter(fav => fav.id !== productId);
  setFavorites(newFavorites);
  localStorage.setItem('favorites', JSON.stringify(newFavorites));
};
```

---

## 🔧 Розширення функціональності

### Додавання фільтрації по категоріям

```javascript
const [selectedCategory, setSelectedCategory] = useState('all');

const categories = [...new Set(products.map(p => p.category))];

const filteredProducts = selectedCategory === 'all'
  ? products
  : products.filter(p => p.category === selectedCategory);

// В JSX:
<Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
  <MenuItem value="all">Всі категорії</MenuItem>
  {categories.map(cat => (
    <MenuItem key={cat} value={cat}>{cat}</MenuItem>
  ))}
</Select>
```

### Додавання сортування таблиці

```javascript
const [sortBy, setSortBy] = useState('name'); // 'name', 'price', 'rating'
const [sortOrder, setSortOrder] = useState('asc');

const getSortedProducts = (prods) => {
  return [...prods].sort((a, b) => {
    let comparison = 0;
    
    if (sortBy === 'name') {
      comparison = a.title.localeCompare(b.title);
    } else if (sortBy === 'price') {
      comparison = a.price - b.price;
    } else if (sortBy === 'rating') {
      comparison = (a.rating?.rate || 0) - (b.rating?.rate || 0);
    }
    
    return sortOrder === 'asc' ? comparison : -comparison;
  });
};
```

---

## 🐛 Відладка

### Comune помилки та рішення

**Помилка:** "Cannot read property 'map' of undefined"
**Рішення:** Перевірте, що products ініціалізовано як масив [] у useState

**Помилка:** "axios is not defined"
**Рішення:** Додайте `import axios from 'axios';` в App.jsx

**Помилка:** "Material-UI компонент не рендериться"
**Рішення:** Перевірте, що компонент правильно імпортован і всіProps передані

**Помилка:** "Модаль не закривається"
**Рішення:** Переконайтесь, що onClose функція викликається і setModalOpen(false) виконується

### Лог дебаг інформації

Додайте в App.jsx:
```javascript
console.log('Products:', products);
console.log('Favorites:', favorites);
console.log('Selected Product:', selectedProduct);
console.log('Loading:', loading);
console.log('Error:', error);
```

---

## 📚 Рекомендовані вдосконалення коду

1. **Витягніть констані:**
```javascript
const API_URL = 'https://fakestoreapi.com/products';
const EMPTY_TIMEOUT = 60000;
```

2. **Використовуйте useMemo для фільтрації:**
```javascript
const filteredProducts = useMemo(() => {
  return products.filter(/* фільтр */);
}, [products, filterCriteria]);
```

3. **Використовуйте useCallback для функцій:**
```javascript
const handleAddToFavorites = useCallback((product) => {
  // функція
}, [favorites]);
```

4. **Розділіть на менші компоненти:**
```javascript
// Витягніть AppBar в окремий компонент
<Header favoritesCount={favorites.length} />
```

5. **Додайте Error Boundary:**
```javascript
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

---

## 🎯 Контрольний список для review

- [ ] Всі компоненти правильно імпортовані
- [ ] Props проходять коректно
- [ ] State управління в App.jsx централізовано
- [ ] Event handlers правильно обробляють клікі
- [ ] API запити мають обробку помилок
- [ ] Таблиця прокручується для великих списків
- [ ] Модаль закривається при Escape
- [ ] Вибране зберігається при перезавантаженні (або видаляється при бажанні)
- [ ] Адаптивний дизайн працює на мобільних
- [ ] Всі тексти на українській мові

---

**Документація коду складена для посилання та навчання**
