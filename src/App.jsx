
import './App.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

// layout
import Layout from './layout/Layout';
// pages
import {Home , Contact} from "./pages"
import Cart from './pages/cart/Cart';
import { productsData } from './api/Api';
import Product from './components/newArrivals/product/Product';

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />} >
          <Route path='/' element={<Home/> } loader={productsData}></Route>
          <Route path='/product/:id' element={<Product/>}></Route>
           <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/contact' element={<Contact/> }></Route>
        </Route>
      </Route>
    )
  );
  return  <RouterProvider router={router} />
}

export default App
