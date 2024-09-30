import logo from './assets/logo.svg'
import './App.css'
import './style.css'
import { ElectricProvider } from './ElectricProvider'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import   LoginScreen  from './components/LoginScreen/LoginScreen' 
import Document from './components/Document/Document'
import TodoList from './components/Tools/Full/TodoList/TodoList'
import BoardTopBar from './components/Board/BoardTopBar'
import ImageWidget from './components/Tools/Full/Image/ImageWidget'
import WorkComponent from './components/WorkComponent/WorkComponent'
import   TryTest  from './components/LoginScreen/TryTest' 
import React, { useState, useEffect } from 'react';
import {DndContext, closestCorners} from "@dnd-kit/core";
import { DndProvider } from 'react-dnd';
export default function App() {

  return (
    <div style={{ backgroundColor: 'white' }}>
      <header className="App-header">
       
        <ElectricProvider>
         
          <Router>
          <Routes>
                    <Route path={'/'} element={<LoginScreen/>}/>
                    <Route path='/board' element={<BoardTopBar/>}/>
                    <Route path='/TodoList/:renderTool' element={<DndContext collisionDetection={closestCorners}><WorkComponent/></DndContext>}/>
                    <Route path='/document' element={<Document/>}/>
                    <Route path='/imageWidget/:renderTool' element={<WorkComponent/>}/>

          </Routes>
          </Router>
          
        </ElectricProvider>
       
      </header>
    </div>
  )
}
