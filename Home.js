// src/Home.js
import React, { useState } from 'react';
import Counter from './onoff';

const Home = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Simple Counter App</h1>
      <Counter count={count} onIncrement={handleIncrement} onDecrement={handleDecrement} />
    </div>
  );
};

export default Home;
