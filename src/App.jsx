import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product"; 
import Footer from "./components/Footer";


// import des banner

import bannernews from './assets/bannier4.png';
import bannerwomens from './assets/bannier3.jpg';
import bannerkids from './assets/bannier3.jpg';
import bannerhaussure from './assets/bannier1.jpg'




export default function App() {
  return (
   <main className="bg-primary text-tertiary">
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/mens" element={<Category Category="men" banner={bannernews}/>}/>
          <Route path="/womens" element={<Category Category="women" banner={bannerwomens}/>}/>
          <Route path="/kids" element={<Category Category="kids" banner={bannerkids}/>}/>
          <Route path="/haussure" element={<Category Category="haussure" banner={bannerhaussure}/>}/>
          <Route path="/product" element={<Product/>}>
          <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path="/cart-page" element={<Cart/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
        <Footer/>
        </BrowserRouter>
   </main>
  )
}
