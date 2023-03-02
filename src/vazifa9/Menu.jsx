import React, { useState } from 'react'
import { FaBriefcase, FaUserCircle, FaRobot } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { HiSpeakerphone } from "react-icons/hi";
import { VscSettings } from "react-icons/vsc"; 
import Setting from './Setting';
// import Users from './Users';
export let setfrist 
export let frist 
const Menu = () => {
  const [first, setfirst] = useState(1)
  const [second, setsecond] = useState(false)
  
  frist = first
  setfrist = setfirst
  return (
    <div className='menu'>
       <div className="ul">
        <div className="link">
          <FiMenu onClick={()=> setsecond(true)} className='iocon'/>
          {/* <IoChatbubbles/> */}
        </div>
        <div onClick={()=> setfirst(1)} className={`link ${first === 1? "active-u":""}`} >

          <IoChatbubbles className={`iocon ${first === 1 ? "active-i": ""}`}/>
          <h2 className={`link-text ${first === 1? "active-i": ""}`}>Chatlar</h2>
        </div>
        <div onClick={()=> setfirst(2)} className={`link ${first === 2 ? 'active-u' : ""}`}>
          <FaUserCircle className={`iocon ${first === 2? "active-i": ""}`}/>
          <h2 className={`link-text ${first === 2 ? "active-i": ""}`} >Shaxsiy</h2>
        </div>
        <div onClick={()=> setfirst(3)} className={`link ${first === 3? "active-u": ""}`}>
          <FaBriefcase className={`iocon ${first === 3? "active-i": ""}`}/>
          <h2 className={`link-text ${first === 3 ? "active-i": ""}`}>Guruhlar</h2>
        </div>
        <div onClick={()=> setfirst(4)} className={`link ${first === 4? "active-u": ""}`}>
        <FaRobot className={`iocon ${first === 4? "active-i": ""}`}/>
        <h2 className={`link-text ${first === 4 ? "active-i": ""}`}>Bot</h2>
        </div>
        <div onClick={()=> setfirst(5)} className={`link ${first === 5? "active-u": ""}`}>
          <HiSpeakerphone className={`iocon ${first === 5? "active-i": ""}`}/>
          <h2 className={`link-text ${first === 5 ? "active-i": ""}`}>Kanallar</h2>
        </div>
        <div className="link">
        <VscSettings className="iocon" />
        <h2 className="link-text">Tahr.</h2>
        </div>
       </div>
       <Setting jona={second} setsecond={setsecond}/>
       {/* <Users first={first} setfirst={setfirst}/> */}
    </div>
  )
}

export default Menu



// HiSpeakerphone