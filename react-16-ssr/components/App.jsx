import React, { useEffect, useState } from 'react';

export const App = () => {
  const handleClick = () => console.log('hello world');

  return <div onClick={handleClick}>hello world</div>;
  // return <div>{Array.from(new Array(800000)).map((_, i) => <div key={i}>{i}</div>)}</div>
};
