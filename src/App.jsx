import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Content from './components/Content'
import Header from './components/Header'

import ContextComponent from './context/ContextComponent'
import Retrieve from './pages/Retrieve'
function App() {

  return (
    <ContextComponent>
      <BrowserRouter>
      <Header/>
        <Routes>
        <Route path='/' element={ <Content/>} />
        <Route path='/retrieve' element={ <Retrieve/>} />
      
        </Routes>
      </BrowserRouter>
    </ContextComponent>
  )
}

export default App
