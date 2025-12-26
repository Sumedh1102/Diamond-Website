import React from 'react'
import Hero from '../Home/Hero'
import Grid from '../Home/Grid' 
import Shop from '../Home/Shop' 
import ScrollingText from '../Home/ScrollingText' 
import Quality from '../Home/Quality'  
import Featured from '../Home/Featured' 
import Blogs from '../Home/Blogs' 
import Header from '../Home/HeroS'   

const Home = () => {
  return (
   <>
   <Header />
   <ScrollingText/> 
   <Shop/>
   <div className='bg-[#1A1A1A]'>
   <Quality/>  
   </div>
   <Featured/>
   <Blogs/>
    </>
  )
}

export default Home