import { Routes, Route } from 'react-router-dom'
import './App.css'
import Menu from './components/Menu'
import Exercicios from './pages/Exercicios/Ex20'
import Home from './pages/Home'
import Header from './components/Header'
import Ex01 from './pages/Exercicios/Ex01'
import Ex02 from './pages/Exercicios/Ex02'
import Ex03 from './pages/Exercicios/Ex03'
import Ex04 from './pages/Exercicios/Ex04'
import Ex05 from './pages/Exercicios/Ex05'
import Ex06 from './pages/Exercicios/Ex06'
import Ex07 from './pages/Exercicios/Ex07'
import Ex08 from './pages/Exercicios/Ex08'
import Ex09 from './pages/Exercicios/Ex09'
import Ex10 from './pages/Exercicios/Ex10'
import Ex11 from './pages/Exercicios/Ex11'
import Ex12 from './pages/Exercicios/Ex12'
import Ex13 from './pages/Exercicios/Ex13'
import Ex14 from './pages/Exercicios/Ex14'
import Ex15 from './pages/Exercicios/Ex15'
import Ex16 from './pages/Exercicios/Ex16'
import Ex17 from './pages/Exercicios/Ex17'
import Ex18 from './pages/Exercicios/Ex18'
import Ex19 from './pages/Exercicios/Ex19'
import Ex20 from './pages/Exercicios/Ex20'

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path='/Exercicios' element={<Exercicios />} />
        <Route path='/Ex01' element={<Ex01 />} />
        <Route path='/Ex02' element={<Ex02 />} />
        <Route path='/Ex03' element={<Ex03 />} />
        <Route path='/Ex04' element={<Ex04 />} />
        <Route path='/Ex05' element={<Ex05 />} />
        <Route path='/Ex06' element={<Ex06 />} />
        <Route path='/Ex07' element={<Ex07 />} />
        <Route path='/Ex08' element={<Ex08 />} />
        <Route path='/Ex09' element={<Ex09 />} />
        <Route path='/Ex10' element={<Ex10 />} />
        <Route path='/Ex11' element={<Ex11 />} />
        <Route path='/Ex12' element={<Ex12 />} />
        <Route path='/Ex13' element={<Ex13 />} />
        <Route path='/Ex14' element={<Ex14 />} />
        <Route path='/Ex15' element={<Ex15 />} />
        <Route path='/Ex16' element={<Ex16 />} />
        <Route path='/Ex17' element={<Ex17 />} />
        <Route path='/Ex18' element={<Ex18 />} />
        <Route path='/Ex19' element={<Ex19 />} />
        <Route path='/Ex20' element={<Ex20 />} />
      </Routes>
    </>
  )
}

export default App