import React from 'react';
import ReactDOM from 'react-dom';
import { HTML5toTouch } from 'rdndmb-html5-to-touch';
// or any other backend you want to use
import { DndContext } from '@dnd-kit/core';
import { DndProvider } from 'react-dnd-multi-backend';
import { HTML5Backend } from 'react-dnd-html5-backend'; // Or use TouchBackend for mobile
import App from './App';

ReactDOM.render(

  <React.StrictMode>
     <DndProvider debugMode={true}  options={HTML5toTouch}>
    <App />
    </DndProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
