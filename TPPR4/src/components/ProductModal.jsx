import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  Chip,
  Rating,
  Divider,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function ProductModal({ product, open, onClose, onAddToFavorites, isFavorite }) {
  const handleAddClick = () => {
    if (!isFavorite) {
      onAddToFavorites(product);
    }
  };

  if (!product) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
        },
      }}
    >
      <DialogTitle
        sx={{
          backgroundColor: '#f5f5f5',
          borderBottom: '1px solid #ddd',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" component="span" sx={{ flex: 1 }}>
          Детальна інформація
        </Typography>
        {isFavorite && <FavoriteIcon sx={{ color: '#e91e63' }} />}
      </DialogTitle>

      <DialogContent sx={{ paddingTop: 2 }}>
        {/* Назва продукту */}
        <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
          {product.title}
        </Typography>

        <Divider sx={{ marginBottom: 2 }} />

        {/* Категорія */}
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="subtitle2" color="textSecondary">
            Категорія
          </Typography>
          <Chip
            label={product.category}
            variant="outlined"
            color="primary"
            sx={{ marginTop: 0.5 }}
          />
        </Box>

        {/* Рейтинг */}
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="subtitle2" color="textSecondary">
            Рейтинг
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginTop: 0.5 }}>
            <Rating
              value={product.rating?.rate || 0}
              readOnly
              precision={0.1}
            />
            <Typography variant="body2" color="textSecondary">
              {product.rating?.rate || 0} ({product.rating?.count || 0} відгуків)
            </Typography>
          </Box>
        </Box>

        {/* Ціна */}
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="subtitle2" color="textSecondary">
            Ціна
          </Typography>
          <Typography
            variant="h5"
            sx={{
              marginTop: 0.5,
              color: '#4caf50',
              fontWeight: 'bold',
              fontSize: '1.5rem',
            }}
          >
            ${product.price.toFixed(2)}
          </Typography>
        </Box>

        <Divider sx={{ marginBottom: 2 }} />

        {/* Опис */}
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="subtitle2" color="textSecondary">
            Опис
          </Typography>
          <Typography
            variant="body2"
            sx={{
              marginTop: 1,
              lineHeight: 1.6,
              color: '#555',
              textAlign: 'justify',
            }}
          >
            {product.description}
          </Typography>
        </Box>

        <Divider sx={{ marginBottom: 2 }} />

        {/* ID продукту */}
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="caption" color="textSecondary">
            ID продукту: {product.id}
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions sx={{ padding: 2, backgroundColor: '#f5f5f5', borderTop: '1px solid #ddd' }}>
        <Button onClick={onClose} variant="outlined">
          Закрити
        </Button>
        <Button
          onClick={handleAddClick}
          variant="contained"
          color={isFavorite ? 'inherit' : 'primary'}
          startIcon={isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          disabled={isFavorite}
        >
          {isFavorite ? 'Вже у вибраному' : 'Додати до вибраного'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ProductModal.propTypes = {
  product: PropTypes.object,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAddToFavorites: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool,
};

ProductModal.defaultProps = {
  product: null,
  isFavorite: false,
};

export default ProductModal;
