import "./App.css"
import "react-toastify/dist/ReactToastify.css"

import { BrowserRouter, Routes, Route } from "react-router-dom"

// Toastify
import { ToastContainer } from "react-toastify"

// Firebase
import { updateProducto } from '../firebase/firebase';

// Componentes
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { ItemDetailContainer } from "./ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./Cart/Cart";
import { Checkout } from "./Checkout/Checkout";
import { PageNotFound } from "./PageNotFound/PageNotFound";

// Context
import { CarritoProvider } from "../context/CarritoContext";

function App() {
    updateProducto()
    return (
    <>
    <BrowserRouter>
      <CarritoProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main personalizar="⚡️ Te damos la bienvenida ⚡️"/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/category/:nameCategory" element={<Main personalizar="En esta categoría 👇"/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer/>
        <ToastContainer/>
        </CarritoProvider>
    </BrowserRouter>
    </>
  );
}
export default App;