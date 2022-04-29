import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
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
        <Routes>
          <Route path='/' element={<Main executeScroll={executeScroll} myRef={myRef}/>}/>
          <Route path='/products/:itemId' element={<SelectedProduct executeScroll={executeScroll}/>}/> 
          <Route path='/cart' element={<Cart executeScroll={executeScroll}/>}/>        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
