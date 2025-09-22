import React, { useState } from 'react'
import './Home.css'
import Header from '../../Header/Header'
import Exploremenu from '../../ExploreMenu/Exploremenu'
import FoodDisplay from '../../FoodDisplay/FoodDisplay'
import AppDownload from '../../AppDownload/AppDownload'

const Home = () => {
  const [category, seCategory] = useState('All');


  return (
    <div>
      <Header />
      <Exploremenu category={category} seCategory={seCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  )
}

export default Home