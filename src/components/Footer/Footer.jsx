import React from 'react'

import { FooterStyled } from './Footer.styled'

import { AiFillLinkedin,AiFillGithub,AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai"


export const Footer = () => {
  return (
    <FooterStyled>
      <h1>Marcus Paulo Moreno</h1>
      <ul>
        <li><a href="#">Início</a></li>
        <li><a href="#about">Sobre mim</a></li>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="#project">Projetos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

      <div className='social'>
        <span><a  href="https://api.whatsapp.com/send?phone=+5571988932538&text=Olá, gostei bastante do seu portfólio!!" target="_blank" rel="noopener noreferrer"><AiOutlineWhatsApp/></a></span>
        <span><a href="mailto:marcuspaulo.morenomf@gmail.com" target="_blank" rel="noopener noreferrer"><AiOutlineMail/></a></span>
        <span><a href="https://github.com/Kinho11" target="_blank" rel="noopener noreferrer"><AiFillGithub/></a></span>
        <span><a href="https://www.linkedin.com/in/marcus-paulo-moreno/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin/></a></span>
      </div>
    </FooterStyled>
  )
}
