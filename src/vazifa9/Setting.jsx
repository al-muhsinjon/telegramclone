import React from 'react'
// import { useState } from 'react';


const Setting = ({jona, setsecond}) => {
  // console.log(`awu ${setsecond}`);
  let css = 
    {
      display: "block"
    }
    let csc = {
      display: "none"
    }
  
  return (
    // <div style={jona == true ? css: csc } className='setting'>
    //     <div className="chekka">
    //         {/* <button onClick={()=> setsecond(false)}>udubu</button> */}
    //     </div>
    //     <div onClick={()=> setsecond(false)} className="buc"></div>
    // </div>
    <div style={jona == true ? css: csc } className='setting'>
      <div   className="chekka">
<div className="profilim-act">
<div className="profilim">
          <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="" />
        </div>

        <div className="ismim">
          <h2 className='moy'> ••][M][••</h2>
          <a className='emod' href="#">Emodji rasmini tanlash</a>
        </div>
        </div>
        <div className="profillarim">
          <div className="profil1">
            <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="" />
            <h2 className='moy'> ••][M][••</h2>
          </div>
          <div className="profil1">
            <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="" />
            <h2 className="moy">||M||</h2>
          </div>
          <div className="profil1">
            <span className='plus'>+</span>
            <h2 className='moy'>Akkount qo'shish</h2>
          </div>
        </div>
        <div className="butoons">

        </div>
      </div>
      <div onClick={()=> setsecond(false)}   className="buc"></div>
    </div>
  )
}

export default Setting