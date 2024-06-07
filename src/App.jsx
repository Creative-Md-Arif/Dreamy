/* eslint-disable no-unused-vars */

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
import NewArrivals from './components/newArrivals/NewArrivals';
import Registration from './pages/user/Registration';
import Login from './pages/user/Login';
import TermsCondition from './pages/user/terms/TermsCondition';
import PaymentGetaway from './pages/paymentGetway/PaymentGetaway';

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/registration' element={<Registration/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/termsCondition' element={<TermsCondition/>}></Route>
        <Route path='/paymentGetaway' element={<PaymentGetaway/>}></Route>
        <Route path="/" element={<Layout />} >
          <Route path='/' element={<Home/> } loader={productsData}></Route>
          <Route path='/product/:id' element={<Product/>} loader={productsData}></Route>
          <Route path='newArrivals' element={<NewArrivals/>} ></Route>
           <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/contact' element={<Contact/> }></Route>
        </Route>
      </Route>
    )
  );
  return  <RouterProvider router={router} />
}

export default App
