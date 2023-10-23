import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Dish from './components/Dish';
import Ingredients from './components/Ingredients';
import CookingControls from './components/CookingControls';

const AppContainer = styled.div`
  text-align: center;
`;

const availableIngredients = [
  {
    id: 1,
    name: 'Tomato',
    image: 'tomato.png', // Replace with the actual image file
  },
  {
    id: 2,
    name: 'Onion',
    image: 'onion.png', // Replace with the actual image file
  },
  // Add more ingredients as needed
];

const App = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [cookingStatus, setCookingStatus] = useState(false);

  useEffect(() => {
    // Simulate cooking effect when cookingStatus changes
    if (cookingStatus) {
      const interval = setInterval(() => {
        // Implement cooking logic here
        // For simplicity, let's just change the dish image after 2 seconds
        setTimeout(() => {
          setCookingStatus(false);
          // Update the dish with the cooked result image
          // Replace 'cooked-dish.png' with the actual image file
          // You can also modify this logic to suit your cooking simulation
          // e.g., adjust the appearance of the dish over time
          setDishImage('cooked-dish.png');
        }, 2000);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [cookingStatus]);

  const [dishImage, setDishImage] = useState('raw-dish.png'); // Initial dish image

  const handleSelectIngredient = (ingredient) => {
    setSelectedIngredients([...selectedIngredients, ingredient]);
  };

  const handleStartCooking = () => {
    setCookingStatus(true);
  };

  const handleStopCooking = () => {
    setCookingStatus(false);
  };

  const handleResetCooking = () => {
    setCookingStatus(false);
    setDishImage('raw-dish.png'); // Reset the dish image
    setSelectedIngredients([]); // Clear selected ingredients
  };

  return (
    <AppContainer>
      <h1>Cooking Simulator</h1>
      <Dish dishImage={dishImage} />
      <Ingredients availableIngredients={availableIngredients} onSelectIngredient={handleSelectIngredient} />
      <CookingControls onStartCooking={handleStartCooking} onStopCooking={handleStopCooking} onResetCooking={handleResetCooking} />
    </AppContainer>
  );
};

export default App;
