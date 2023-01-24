import React, { useState } from 'react'
import { SectionHeader } from './Header.styled'
import CV from "../../assets/CV.pdf"
import foto from "../../assets/foto.jpg"
import { AiFillLinkedin,AiFillGithub } from "react-icons/ai"


export const Header = () => {

  const [ativo, setAtivo] = useState("")

  return (
    <>
      <SectionHeader>
        <h3>
          Olá, me chamo
        </h3>

        <h1>
          Marcus paulo Moreno
        </h1>

        <h3 className='subtitulo'>Desenvolvedor de software front-end</h3>

        <div className='links'>
          <a className='botao' href={CV} target="_blank">Currículo</a>
          <a  className='botao' href="https://api.whatsapp.com/send?phone=+5571988932538&text=Olá, gostei bastante do seu portfólio!!" target="_blank" rel="noopener noreferrer">Vamos conversar!</a>
        </div>

        <div className='container-social'>
          <a className='icone-social'href="https://www.linkedin.com/in/marcus-paulo-moreno/" target="_blank" ><AiFillLinkedin/></a>
          <a className='icone-social' href="https://github.com/Kinho11" target="_blank"><AiFillGithub/></a>
        </div>

        <div className='scroll'>
          <a href='#contact'>
            Scroll down
          </a>
        </div>


        <img className='foto' src={foto} alt="" />
      </SectionHeader>
    
    </>
  )
}
