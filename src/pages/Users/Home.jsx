import React from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
  
  const test= useLocation();
  console.log(test);
  
  return (

    <div>Home هنا </div>
  )
}

export default Home