import React, { useState } from 'react'
import { Menu } from './Nav.styled'

import {AiOutlineHome,AiOutlineUser} from "react-icons/ai"

export const Nav = () => {

  const [ativo, setAtivo] = useState("#")

  return (
    <Menu>
      <a href="#" onClick={()=> setAtivo("#")} className={ativo === "#" ? "ativo" : ""}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setAtivo("#about")} className={ativo === "#about" ? "ativo" : ""}><AiOutlineUser/></a>
      <a href="#project" onClick={()=> setAtivo("#project")} className={ativo === "#project" ? "ativo" : ""} ><AiOutlineUser/></a>
      <a href="#contact" onClick={()=> setAtivo("#contact")} className={ativo === "#contact" ? "ativo" : ""}><AiOutlineUser/></a>
    </Menu>
  )
}
