import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Chip,
  IconButton,
  Tooltip,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function ProductsTable({ products, onRowClick, favorites, onAddToFavorites, onRemoveFromFavorites }) {
  const isFavorite = (productId) => {
    return favorites.some(fav => fav.id === productId);
  };

  const handleFavoriteClick = (e, product) => {
    e.stopPropagation();
    if (isFavorite(product.id)) {
      onRemoveFromFavorites && onRemoveFromFavorites(product.id);
    } else {
      onAddToFavorites && onAddToFavorites(product);
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      electronics: 'primary',
      jewelery: 'secondary',
      'men\'s clothing': 'info',
      'women\'s clothing': 'success',
    };
    return colors[category.toLowerCase()] || 'default';
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="products table">
        <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold', width: '40%' }}>Назва</TableCell>
            <TableCell sx={{ fontWeight: 'bold', width: '20%' }}>Категорія</TableCell>
            <TableCell sx={{ fontWeight: 'bold', width: '15%', textAlign: 'right' }}>Ціна</TableCell>
            <TableCell sx={{ fontWeight: 'bold', width: '10%', textAlign: 'center' }}>Рейтинг</TableCell>
            <TableCell sx={{ fontWeight: 'bold', width: '10%', textAlign: 'center' }}>Вибране</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              onClick={() => onRowClick(product)}
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                  transition: 'background-color 0.2s',
                },
              }}
            >
              <TableCell sx={{ fontWeight: 500 }}>
                <Box sx={{ maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {product.title}
                </Box>
              </TableCell>
              <TableCell>
                <Chip
                  label={product.category}
                  variant="outlined"
                  size="small"
                  color={getCategoryColor(product.category)}
                />
              </TableCell>
              <TableCell sx={{ textAlign: 'right', fontWeight: 'bold', color: '#4caf50' }}>
                ${product.price.toFixed(2)}
              </TableCell>
              <TableCell sx={{ textAlign: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
                  <span>⭐ {product.rating?.rate || 0}</span>
                  <span sx={{ fontSize: '0.8em', color: '#999' }}>({product.rating?.count || 0})</span>
                </Box>
              </TableCell>
              <TableCell sx={{ textAlign: 'center' }}>
                <Tooltip title={isFavorite(product.id) ? 'Видалити з вибраного' : 'Додати до вибраного'}>
                  <IconButton
                    onClick={(e) => handleFavoriteClick(e, product)}
                    color={isFavorite(product.id) ? 'error' : 'default'}
                    size="small"
                  >
                    {isFavorite(product.id) ? (
                      <FavoriteIcon />
                    ) : (
                      <FavoriteBorderIcon />
                    )}
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

ProductsTable.propTypes = {
  products: PropTypes.array.isRequired,
  onRowClick: PropTypes.func.isRequired,
  favorites: PropTypes.array,
  onAddToFavorites: PropTypes.func,
  onRemoveFromFavorites: PropTypes.func,
};

ProductsTable.defaultProps = {
  favorites: [],
  onAddToFavorites: null,
  onRemoveFromFavorites: null,
};

export default ProductsTable;
