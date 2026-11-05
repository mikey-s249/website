import { useState } from 'react'
import Home from './pages/Home'
import Rasteriser from './pages/Rasteriser'
import GlitchNote from './pages/GlitchNote'
import SortingVisualiser from './pages/SortingVisualiser'
import HomeServer from './pages/HomeServer'
import PythonMonopoly from './pages/PythonMonopoly'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'


function App() {

  return (
    <Router basename="/website">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/rasteriser" element={<Rasteriser/>} />
            <Route path="/glitchnote" element={<GlitchNote/>} />
            <Route path="/sorter" element={<SortingVisualiser/>} />
            <Route path="/home-server" element={<HomeServer/>} />
            <Route path="/python-monopoly" element={<PythonMonopoly/>} />
        </Routes>
    </Router>
  )
}

export default App
