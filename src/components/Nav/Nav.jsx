import React, { useState } from 'react'
import { Menu } from './Nav.styled'

import {AiOutlineHome,AiOutlineUser, AiFillProject} from "react-icons/ai"
import {BiBookBookmark} from "react-icons/bi"
import {BsChatLeftText} from "react-icons/bs" 

export const Nav = () => {

  const [ativo, setAtivo] = useState("#")

  return (
    <Menu>
      <a href="#" onClick={()=> setAtivo("#")} className={ativo === "#" ? "ativo" : ""}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setAtivo("#about")} className={ativo === "#about" ? "ativo" : ""}><AiOutlineUser/></a>
      <a href="#project" onClick={()=> setAtivo("#project")} className={ativo === "#project" ? "ativo" : ""} ><BiBookBookmark/></a>
      <a href="#contact" onClick={()=> setAtivo("#contact")} className={ativo === "#contact" ? "ativo" : ""}><BsChatLeftText/></a>
    </Menu>
  )
}
