import React from 'react'
import { SobreMim } from './About.styled'
import foto from "../../assets/foto.jpg"
import {RiMedal2Fill} from "react-icons/ri"
import {IoIosSchool} from "react-icons/io"
import {AiOutlineFundProjectionScreen} from "react-icons/ai"

export const About = () => {
  return (
    <SobreMim id='about'>
      <h1 data-aos="fade-down">Sobre Mim</h1>

      <div className='informacao'>
        <div className='foto' data-aos="fade-up-right">
          <img className='fotoPerfil' width={300} src={foto} alt="foto de perfil" />
        </div>

        <div className='cards'>
          <div className='container-card' data-aos="flip-up">
            <div className='card'>
              <i><RiMedal2Fill/></i>
              <h3>Experiência</h3>
              <h4>1+ anos</h4>
            </div>

            <div className='card' data-aos="flip-up">
              <i><IoIosSchool/></i>
              <h3>Faculdade</h3>
              <h4>Ciência da computação</h4>
            </div>

            <div className='card' data-aos="flip-up">
              <i><AiOutlineFundProjectionScreen/></i>
              <h3>Projetos</h3>
              <h4>10+ concluídos</h4>
            </div>
          </div>

          <p data-aos="zoom-in">Experiência na área de TI. Cursando Barchelado em Ciência da computação, na universidade Estácio de Sá. Apaixonado pelo mundo da tecnologia, busco melhorar meus conhecimentos e habilidades através de novas experiências, desafiando minhas expectativas para fornecer soluções válidas e melhores.
          </p>
        </div>
      </div>

    </SobreMim>
  )
}
