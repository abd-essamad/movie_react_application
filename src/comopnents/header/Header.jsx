import './header.css'
import Search from '../search/Search'
import { useState } from 'react'
import {backgroud1,backgroud2,backgroud3,backgroud4} from './imports'
import { useEffect } from 'react'
const Header = () => {
  const [headbg,setHeadbg] = useState(backgroud1)
  const [currentIndex,setCuurentIndex] = useState(0)
  const backgrounds = [backgroud1,backgroud2,backgroud3,backgroud4]
 const onChangeBg = ()=>{
    setHeadbg(backgrounds[currentIndex])
    setCuurentIndex((prev)=>{
      return prev + 1
    })
    if(currentIndex > backgrounds.length - 1){
      setCuurentIndex(0)
      setHeadbg(backgrounds[0])
    }
 }
 const onChangeBgload = ()=>{
  setTimeout(()=>{
    setHeadbg(backgrounds[currentIndex])
  setCuurentIndex((prev)=>{
    return prev + 1
  })
  if(currentIndex > backgrounds.length - 1){
    
    setCuurentIndex(0)
    setHeadbg(backgrounds[0])
  }
  },9000)
  
}

useEffect(()=>{
  onChangeBgload()
})


  return (
    <div className='header' style={{backgroundImage: "url(" + headbg + ")"}}  >
        <Search/>
        <h1 onClick={onChangeBg} ><i className="fa-solid fa-angle-left"></i></h1>
        <h1 onClick={onChangeBg} ><i className="fa-solid fa-angle-right"></i></h1>
        <div className="header__points">
          <p></p>
          <p></p>
          <p></p>
        </div>
    </div>
  )
}

export default Header
