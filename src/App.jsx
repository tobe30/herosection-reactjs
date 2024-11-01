import { useState } from 'react'

import './App.css'
import Background from './Component/Background/Background'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'

const App = () => {
  let heroData = [
    {text1:"Dive into",text2:"What you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give in to",text2:"your passions"},
  ]
  const [heroCount,setHeroCount]= useState(0);
  const [playStatus,setPlayStatus] = useState(false);

  return (
    <>
      <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero
       setPlayStatus={setPlayStatus}
       heroData={heroData[heroCount]}
       heroCount= {heroCount}
       setHeroCount={setHeroCount}
       playStatus={playStatus}
      />
      </div>
      
     
    </>
  )
}

export default App
