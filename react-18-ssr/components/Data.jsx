import React from 'react';
import { fetchData, useData } from "../utils"

export default () => {
  const data = useData(fetchData());

  return <div>{data}</div>;
}

