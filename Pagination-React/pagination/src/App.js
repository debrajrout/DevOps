import React, { useState } from 'react';

const data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
  { id: 6, name: 'Item 6' },
  { id: 7, name: 'Item 7' },
  { id: 8, name: 'Item 8' },
  { id: 9, name: 'Item 9' },
  { id: 10, name: 'Item 10' },
  { id: 11, name: 'Item 11' },
  // Add more items...
];

const itemsPerPage = 5;

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const renderItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageItems = data.slice(startIndex, endIndex);

    return pageItems.map((item) => (
      <div key={item.id} style={itemStyle}>
        {item.name}
      </div>
    ));
  };

  return (
    <div style={containerStyle}>
      <h1>Pagination In React</h1>
      <h3>5 Items per Page</h3>
      <div style={itemsContainerStyle}>{renderItems()}</div>
      <div style={paginationStyle}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleClick(index + 1)}
            style={
              currentPage === index + 1 ? activeButtonStyle : buttonStyle
            }
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px',
  // width:'100%'
};

const itemsContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
 
};

const itemStyle = {
  margin: '5px',
  padding: '10px',
  border: '1px solid #ccc',
  width:'500%',
  textAlign:'center'
};

const paginationStyle = {
  display: 'flex',
  marginTop: '10px',
};

const buttonStyle = {
  margin: '5px',
  padding: '5px 10px',
  border: '1px solid #ccc',
  
  cursor: 'pointer',
};

const activeButtonStyle = {
  ...buttonStyle,
  backgroundColor: 'green',
  color: '#fff',
};

export default App;
