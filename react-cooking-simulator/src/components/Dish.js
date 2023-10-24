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
  position: relative;
`;

const DishImage = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ffcc66; /* Change this to the color of your dish */
  border: 2px solid #e68a00; /* Change this to the dish border color */
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Dish = () => {
  return (
    <DishContainer>
      <DishImage />
    </DishContainer>
  );
};

export default Dish;
