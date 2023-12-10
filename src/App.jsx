import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer'
import { ItemCount } from './components/itemCount/ItemCount'
import { ItemCard } from './components/itemCard/ItemCard'

function App() {


  return (
    <>
        <Navbar/>
        <ItemListContainer/>
        <ItemCard/>
        <ItemCount/>
    </>
  )
}

export default App
