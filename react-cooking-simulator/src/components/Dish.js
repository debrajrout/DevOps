import React from 'react';
import styled from 'styled-components';

const DishContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 300px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const DishImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Dish = ({ dishImage }) => {
  return (
    <DishContainer>
      <DishImage src={dishImage} alt="Cooking Dish" />
    </DishContainer>
  );
};

export default Dish;
