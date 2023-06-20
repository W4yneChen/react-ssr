import React from 'react';
import { Page } from './Page';

export const Hello = () => {
  const handleClick = () => console.log('hello world');

  return (
    <div>
      <div onClick={handleClick}>hello world</div>
      <Page />
    </div>
  );
};