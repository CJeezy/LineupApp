import React, { useState } from 'react';

function App() {
  const [shapes, setShapes] = useState([]);

  const handleCreateSquare = (size) => {
    setShapes([...shapes, { type: 'square', size, x: 0, y: 0 }]);
  };

  const handleCreateCircle = (size) => {
    setShapes([...shapes, { type: 'circle', size, x: 0, y: 0 }]);
  };

  const handleMoveShape = (index, x, y) => {
    const newShapes = [...shapes];
    newShapes[index].x = x;
    newShapes[index].y = y;
    setShapes(newShapes);
  };

  return (
    <div>
      <h1>React Shapes</h1>
      <button onClick={() => handleCreateSquare(100)}>Create Square 100px</button>
      <button onClick={() => handleCreateSquare(50)}>Create Square 50px</button>
      <button onClick={() => handleCreateCircle(100)}>Create Circle 100px</button>
      <button onClick={() => handleCreateCircle(50)}>Create Circle 50px</button>
      {shapes.map((shape, index) => {
        return shape.type === 'square' ? (
          <div
            key={index}
            style={{
              width: shape.size,
              height: shape.size,
              backgroundColor: 'blue',
              position: 'absolute',
              left: shape.x,
              top: shape.y,
            }}
            onMouseMove={(e) => handleMoveShape(index, e.clientX, e.clientY)}
          />
        ) : (
          <div
            key={index}
            style={{
              width: shape.size,
              height: shape.size,
              borderRadius: '50%',
              backgroundColor: 'red',
              position: 'absolute',
              left: shape.x,
              top: shape.y,
            }}
            onMouseMove={(e) => handleMoveShape(index, e.clientX, e.clientY)}
          />
        );
      })}
    </div>
  );
}

export default App;