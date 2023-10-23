import React from 'react';
import styled from 'styled-components';

const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  border-top: 1px solid #ddd;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 10px;
`;

const CookingControls = ({ onStartCooking, onStopCooking, onResetCooking }) => {
  return (
    <ControlsContainer>
      <Button onClick={onStartCooking}>Start Cooking</Button>
      <Button onClick={onStopCooking}>Stop Cooking</Button>
      <Button onClick={onResetCooking}>Reset</Button>
    </ControlsContainer>
  );
};

export default CookingControls;
