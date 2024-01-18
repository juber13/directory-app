import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'


// import Content from '../components/Content'
// import Header from '../components/Header'
// import AddDirecotry from '../components/pages/AddDirecotry'
// import DashBoard from '../components/pages/DashBoard'
// import Login from '../components/pages/Login'

import Content from './components/Content'
import Header from './components/Header'

// import Context from './context/Context.jsx'
// import Context from './context/context'
// import ContextComponent from './context/context'

import ContextComponent from './context/ContextComponent'

function App() {

  return (
    <ContextComponent>
      <BrowserRouter>
      <Header/>
        <Routes>
        <Route path='/' element={ <Content/>} />
        {/* <Route path='/add-details' element={ <AddDirecotry/>} /> */}
        {/* <Route path='/dashboard' element={ <DashBoard/>} /> */}
        {/* <Route path='/login' element={ <Login/>} /> */}
      
        </Routes>
      </BrowserRouter>
    </ContextComponent>
  )
}

export default App
