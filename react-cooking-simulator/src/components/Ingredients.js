import React from 'react';
import styled from 'styled-components';

const IngredientsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  border-bottom: 1px solid #ddd;
`;

const Ingredient = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const IngredientImage = styled.div`
  width: 80px;
  height: 80px;
  background-color: #c0c0c0; /* Default color for ingredients */
  border: 2px solid #999; /* Border color for ingredients */
  border-radius: 50%;
`;

const Ingredients = ({ availableIngredients, onSelectIngredient }) => {
  const handleIngredientClick = (ingredient) => {
    onSelectIngredient(ingredient);
  };

  return (
    <IngredientsContainer>
      {availableIngredients.map((ingredient) => (
        <Ingredient key={ingredient.id} onClick={() => handleIngredientClick(ingredient)}>
          <IngredientImage>
            {/* You can customize the ingredient image using CSS */}
          </IngredientImage>
          <span>{ingredient.name}</span>
        </Ingredient>
      ))}
    </IngredientsContainer>
  );
};

export default Ingredients;
