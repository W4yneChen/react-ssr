import React from 'react';

export const App = () => {
  const handleClick = () => console.log('hello world');

  return <div onClick={handleClick}>hello world</div>;
}
