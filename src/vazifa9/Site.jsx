import React from 'react'
import Menu from './Menu'
import './style.css'
import Users from './Users'
import Zone from './Zone'
import { TbPictureInPictureTop } from "react-icons/tb";
import { BiMinus } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
// import Setting from './Setting'

const Site = () => {
  // https://jsonplaceholder.typicode.com/photos
  return (
    <div className='site'>
      <header className='header'>
        <button>
      <BiMinus className='ikon ' />
      </button>
      <button>
      <TbPictureInPictureTop className='ikon ' />
      </button>
      <button className='clo'>
      <AiOutlineClose className='ikon ' />
      </button>
      </header>
      <div className="telegram">
        <Menu/>
        <Users/>
        <Zone/>
        {/* <Setting/> */}
        </div>
    </div>
  )
}

export default Site