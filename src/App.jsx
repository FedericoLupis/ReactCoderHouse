import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer'
import { ItemCount } from './components/itemCount/ItemCount'
import { ItemCard } from './components/itemCard/ItemCard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <BrowserRouter>
    
      <Navbar/>

        <Routes>
          
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/itemCard" element={<ItemCard/>}/>
          <Route path="/itemCount" element={<ItemCount/>}/>

        </Routes>
    </BrowserRouter>
  )
}

export default App
