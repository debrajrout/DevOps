// src/App.js

import React from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button } from 'react-bootstrap';

const ProductDescription = () => {
  const handleClick = (e) => {
    alert('Order has been placed successfully.')
  }
  return (
    <Container className="my-5">
      <Card>
        <Card.Body>
          <Card.Title>Apple Iphone 15</Card.Title>
          <Card.Text>
            This is a fictional product. Describe the product features and benefits here.
          </Card.Text>
          <Card.Text>
            Price: $999.99
          </Card.Text>
          <Button variant="primary" onClick={handleClick}>Buy Now</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to our Product Landing Page</h1>
      </header>
      <ProductDescription />
    </div>
  );
}

export default App;
