import React, { useState } from 'react'
import { BiSearch, BiMicrophone } from "react-icons/bi";
import { IoChatboxEllipsesOutline, IoSend } from "react-icons/io5";
import { RiLayoutRightLine } from "react-icons/ri";
import { TbDotsVertical } from "react-icons/tb";
import { ImAttachment } from "react-icons/im";
import { BsEmojiSmile } from "react-icons/bs";



const Zone = () => {

  var data = [
    {
      blue: "molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est,",
      yellow: "adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis"
    },
    {
      blue: "velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas.",
      yellow: "sodales elit erat vitae risus. Duis a mi fringilla mi"
    },
    {
      blue: "convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc",
      yellow: "at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada"
    },
    {
      blue: "ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac",
      yellow: "et malesuada fames ac turpis egestas. Fusce aliquet magna a"
    },
    {
      blue: "diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer",
      yellow: "egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla"
    },
    {
      blue: "sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis",
      yellow: "nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor"
    },
    {
      blue: "velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc",
      yellow: "Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi"
    },
    {
      blue: "Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui",
      yellow: "Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam"
    },
    {
      blue: "pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in",
      yellow: "libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis"
    },
    {
      blue: "ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna",
      yellow: "Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor."
    },
    {
      blue: "Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam",
      yellow: "pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in"
    },
    {
      blue: "libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis",
      yellow: "ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna"
    },
    {
      blue: "Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor.",
      yellow: "tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est."
    },
    {
      blue: "sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus",
      yellow: "auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna"
    },
    {
      yellow: "et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum",
      blue: "Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac"
    }
  ];

let oldin 
let keyin 
 {oldin =  <button className='buton'><BiMicrophone className='attech' /></button>} 
{keyin = <button  className='buton'><IoSend className='send' /></button>}
const [uzgar, setuzgar] = useState(false)
  return (
    <div className='chats'>
      <nav>
        <div className="navbar">
          <div className="tgnam">
            <span className='namel'>Telegram</span>
            <span className='podpis'>1 100 obunachilar</span>
          </div>
        </div>
        <div className="knopka">
          <BiSearch className='chat-ikon' />
          <IoChatboxEllipsesOutline className='chat-ikon' />
          <RiLayoutRightLine className='chat-ikon' />
          <TbDotsVertical className='chat-ikon' />
        </div>
      </nav>
      <div className="chat">


        {data.map(api =>
          <>
            <div class="message-blue">
              <p class="message-content">{api.blue}</p>
            </div>

            <div class="message-orange">
              <p class="message-content">{api.yellow}</p>
            </div>
          </>
        )}

        <div class="xabarlar">
          <div class="message-blue">
            <p class="message-content">This is an awesome message!</p>
          </div>

          <div class="message-orange">
            <p class="message-content">I agree that your message is awesome!</p>
          </div>

          <div class="message-blue">
            <p class="message-content">Thanks!</p>
          </div>
          <div class="message-orange">
            <p class="message-content">I agree that your message is awesome!</p>
          </div>
          <div class="message-blue">
            <p class="message-content">Thanks!</p>
          </div>

        </div>





      </div>
      <div className="amal">
        <button className='bitton'>

          <div class="image-upload">
            <label for="file-input">
              <ImAttachment className='attech' />
            </label>

            <input id="file-input" type="file" />
          </div>

        </button>
        <input onKeyUp={(e)=> setuzgar(e.target.value === "" ? false: true)} className='imput' type="text" placeholder="Xabar jo'natish" />
        <button className='buton'><BsEmojiSmile className='attech' /></button>
        {/* <IoSend/> */}
        {uzgar=== true ? keyin : oldin }
        {/* <button className='buton'><BiMicrophone className='attech' /></button> */}
      </div>
    </div>
  )
}

export default Zone