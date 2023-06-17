import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Library from './pages/Library';
import Booklist from './components/Booklist';
import Bookdetails from './components/Bookdetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart'

function App() {
  return (
   <>
   <div>
  <Navbar></Navbar>
   <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Booklist />}></Route>
        <Route path="/books/:id" element={<Bookdetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <Footer></Footer>
   </div>
   </>
  );
}

export default App;
