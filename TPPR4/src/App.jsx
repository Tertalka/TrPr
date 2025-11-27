import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Paper,
  CircularProgress,
  Alert,
  Box,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Badge,
} from '@mui/material';
import ProductsTable from './components/ProductsTable';
import ProductModal from './components/ProductModal';
import FavoritesPanel from './components/FavoritesPanel';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);

  // Завантаження продуктів з API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setError(null);
      } catch (err) {
        setError(err.message || 'Помилка при завантаженні даних');
        console.error('API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Обробка кліку на рядок таблиці
  const handleRowClick = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  // Закриття модального вікна
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  // Додавання продукту у вибране
  const handleAddToFavorites = (product) => {
    const isAlreadyFavorite = favorites.some(fav => fav.id === product.id);
    if (!isAlreadyFavorite) {
      setFavorites([...favorites, product]);
    }
  };

  // Видалення продукту з вибраного
  const handleRemoveFromFavorites = (productId) => {
    setFavorites(favorites.filter(fav => fav.id !== productId));
  };

  return (
    <div className="app-container">
      {/* Верхня панель */}
      <AppBar position="static" sx={{ marginBottom: 3 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            🛍️ Каталог товарів FakeStore
          </Typography>
          <Badge badgeContent={favorites.length} color="warning">
            <Typography variant="body1">
              Обрано
            </Typography>
          </Badge>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        {/* Основний контент */}
        <Grid container spacing={3}>
          {/* Лівий блок - Таблиця товарів */}
          <Grid item xs={12} md={8}>
            <Paper elevation={2} sx={{ padding: 2 }}>
              {error && (
                <Alert severity="error" sx={{ marginBottom: 2 }}>
                  {error}
                </Alert>
              )}

              {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', padding: 4 }}>
                  <CircularProgress />
                </Box>
              ) : (
                <ProductsTable
                  products={products}
                  onRowClick={handleRowClick}
                  favorites={favorites}
                />
              )}
            </Paper>
          </Grid>

          {/* Правий блок - Вибране */}
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ padding: 2, position: 'sticky', top: 100 }}>
              <FavoritesPanel
                favorites={favorites}
                onRemove={handleRemoveFromFavorites}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Модальне вікно з деталями */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          open={modalOpen}
          onClose={handleCloseModal}
          onAddToFavorites={handleAddToFavorites}
          isFavorite={favorites.some(fav => fav.id === selectedProduct.id)}
        />
      )}
    </div>
  );
}

export default App;
