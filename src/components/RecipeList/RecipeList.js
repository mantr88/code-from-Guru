import { RecipeCard } from '../RecipeCard/RecipeCard';
import PropTypes from 'prop-types';
import { List } from './RecipeList.styled';

export const RecipeList = ({ items, onDelite }) => {
  return (
    <List>
      {items.map(item => (
        <li key={item.id}>
          <RecipeCard item={item} onDelite={onDelite} />
        </li>
      ))}
    </List>
  );
};

RecipeList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
