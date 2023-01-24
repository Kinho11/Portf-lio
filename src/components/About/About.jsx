import React from 'react'
import { SobreMim } from './About.styled'
import foto from "../../assets/foto.jpg"
import {RiMedal2Fill} from "react-icons/ri"
import {IoIosSchool} from "react-icons/io"
import {AiOutlineFundProjectionScreen} from "react-icons/ai"

export const About = () => {
  return (
    <SobreMim id='about'>
      <h1>Sobre Mim</h1>

      <div className='informacao'>
        <div className='fotooo'>
          <img className='fotoPerfil' width={300} src={foto} alt="foto de perfil" />
        </div>

        <div>
          <div className='container-card'>
            <div className='card'>
              <i><RiMedal2Fill/></i>
              <h3>Experiência</h3>
              <h4>1+ anos</h4>
            </div>

            <div className='card'>
              <i><IoIosSchool/></i>
              <h3>Faculdade</h3>
              <h4>Ciência da computação</h4>
            </div>

            <div className='card'>
              <i><AiOutlineFundProjectionScreen/></i>
              <h3>Projetos</h3>
              <h4>10+ concluídos</h4>
            </div>
          </div>

          <p>Cursando Barchelado em Ciência da computação, na universidade Estácio de Sá. Possuo um pouco
            mais de 1 ano de experiência na área de TI, mas sempre à procura de melhorar meus conhecimentos e
            aberto para novas experiências. Apaixonado pelo mundo da tecnologia, principalmente pelas
            inovações e desafios diários.
          </p>
        </div>
      </div>

    </SobreMim>
  )
}
