import './Pages/Styling/App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Products from './Pages/Products';
import Error from './Pages/Error';
import Footer from './components/Footer';

function App() {
  return (
  <Router>
        <nav>
            <ul className='NavContainer'>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/contact">Contact</Link>
            </ul>
        </nav>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/products" element={<Products />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path='*' element={<Error />}/>
    </Routes>
    <Footer />
  </Router>
  )
}

export default App;
