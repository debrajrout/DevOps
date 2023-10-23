import React, { useState } from 'react';
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

const Ingredients = ({ availableIngredients, onSelectIngredient }) => {
  const handleIngredientClick = (ingredient) => {
    onSelectIngredient(ingredient);
  };

  return (
    <IngredientsContainer>
      {availableIngredients.map((ingredient) => (
        <Ingredient key={ingredient.id} onClick={() => handleIngredientClick(ingredient)}>
          <img src={ingredient.image} alt={ingredient.name} />
          <span>{ingredient.name}</span>
        </Ingredient>
      ))}
    </IngredientsContainer>
  );
};

export default Ingredients;
