import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Hello } from '../components';

// 将 hydration 的范围限定在 div#root 节点内
hydrateRoot(document.getElementById('root'), <Hello />);
