import PropTypes from 'prop-types';
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
  Chip,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function FavoritesPanel({ favorites, onRemove }) {
  return (
    <Box>
      {/* Заголовок */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          marginBottom: 2,
          paddingBottom: 2,
          borderBottom: '2px solid #e0e0e0',
        }}
      >
        <ShoppingCartIcon sx={{ fontSize: 28, color: '#ff9800' }} />
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Обрані товари
        </Typography>
      </Box>

      {/* Статистика */}
      <Box sx={{ marginBottom: 2 }}>
        <Chip
          label={`Всього: ${favorites.length}`}
          color={favorites.length > 0 ? 'primary' : 'default'}
          variant="outlined"
          sx={{ marginRight: 1 }}
        />
        {favorites.length > 0 && (
          <Chip
            label={`Сума: $${favorites.reduce((sum, item) => sum + item.price, 0).toFixed(2)}`}
            color="success"
            variant="filled"
          />
        )}
      </Box>

      <Divider sx={{ marginBottom: 2 }} />

      {/* Список вибраних товарів */}
      {favorites.length === 0 ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 3,
            color: '#999',
            textAlign: 'center',
          }}
        >
          <ShoppingCartIcon sx={{ fontSize: 48, marginBottom: 1, opacity: 0.3 }} />
          <Typography variant="body2" color="textSecondary">
            Жоден товар не обраний.
          </Typography>
          <Typography variant="caption" color="textSecondary" sx={{ marginTop: 1 }}>
            Кліком на рядок таблиці та додайте товари до списку вибраних.
          </Typography>
        </Box>
      ) : (
        <List
          sx={{
            maxHeight: '60vh',
            overflow: 'auto',
            padding: 0,
          }}
        >
          {favorites.map((item, index) => (
            <Box key={item.id}>
              <ListItem
                sx={{
                  padding: '8px 0',
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                  },
                  borderRadius: 1,
                }}
              >
                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 500,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.title}
                    </Typography>
                  }
                  secondary={
                    <Box sx={{ marginTop: 0.5, display: 'flex', justifyContent: 'space-between', gap: 1 }}>
                      <Typography variant="caption" color="textSecondary">
                        {item.category}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#4caf50' }}>
                        ${item.price.toFixed(2)}
                      </Typography>
                    </Box>
                  }
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => onRemove(item.id)}
                    size="small"
                    color="error"
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              {index < favorites.length - 1 && <Divider sx={{ margin: '4px 0' }} />}
            </Box>
          ))}
        </List>
      )}
    </Box>
  );
}

FavoritesPanel.propTypes = {
  favorites: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default FavoritesPanel;
