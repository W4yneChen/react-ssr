import React from 'react';
import {hydrateRoot} from 'react-dom/client';
import { Hello } from '../components';

hydrateRoot(document.getElementById('root'), <Hello />);
