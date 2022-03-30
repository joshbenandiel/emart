import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Header } from './components/Header'
import { Main } from './components/Main'
import { SelectedProduct } from './components/SelectedProduct'
import { Cart } from './components/Cart'
import { useRef } from 'react'


function App() {
  
  const myRef = useRef(null)
  
  const executeScroll = () => myRef.current.scrollIntoView()  

  
  return (
    <div className="App">
      <Router>
        <Header executeScroll={executeScroll}/>
          <Routes>
            <Route path='/' element={<Main myRef={myRef}/>}/>
            <Route path='/products/:itemId' element={<SelectedProduct/>}/> 
            <Route path='/cart' element={<Cart/>}/>        
          </Routes>
        </Router>
    </div>
  );
}

export default App;
