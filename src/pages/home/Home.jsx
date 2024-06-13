/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner/Banner'
import Logo from '../../components/logo/Logo'
import NewArrivals from '../../components/newArrivals/NewArrivals'
import { useLoaderData } from 'react-router-dom'
import TopSelling from '../../components/topSelling/TopSelling'
import DressStyle from '../../components/dressStyle/DressStyle'


const Home = () => {
  const [products , setProducts] =useState([]);
const data = useLoaderData();
useEffect(() => {
  setProducts(data.data)
},[data])



  return (
    <div>
     <Banner/>
     <Logo/>
     <NewArrivals products={products}/>
     <TopSelling products={products}/>
     <DressStyle/>
    </div>
  )
}

export default Home
