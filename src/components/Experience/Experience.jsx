import React from 'react'
import { Experiencia } from './Experience.styled'

import {AiFillHtml5} from "react-icons/ai"
import {DiCss3,DiJavascript} from "react-icons/di"
import {RiReactjsLine} from "react-icons/ri"
import {SiTypescript,SiStyledcomponents,SiSass,SiBootstrap} from "react-icons/si"


export const Experience = () => {
  return (
    <>
      <Experiencia id='experience'>
        <h1>Experiência</h1>

        <div className='container-experiencia'>
          <h2>Frontend Development</h2>

          <div className='cards'>

            <article className='card-experiencia'>
              <i><AiFillHtml5/></i>
              <h3>HTML5</h3>
            </article>

            <article className='card-experiencia'>
              <i><DiCss3/></i>
              <h3>CSS3</h3>
            </article>

            <article className='card-experiencia'>
              <i><DiJavascript/></i>
              <h3>JavaScript</h3>
            </article>

            <article className='card-experiencia'>
              <i><RiReactjsLine/></i>
              <h3>ReactJs</h3>
            </article>

            <article className='card-experiencia'>
              <i><SiTypescript/></i>
              <h3>TypeScript</h3>
            </article>

            <article className='card-experiencia'>
              <i><SiStyledcomponents/></i>
              <h3>Styled Components</h3>
            </article>

            <article className='card-experiencia'>
              <i><SiSass/></i>
              <h3>Sass</h3>
            </article>

            <article className='card-experiencia'>
              <i><SiBootstrap/></i>
              <h3>Bootstrap</h3>
              
            </article>

          </div>



        </div>


      </Experiencia>
    </>
  )
}
