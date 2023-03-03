import React, { useEffect, useRef } from 'react'
import { useRepositorio } from '../../Context/RepositorioGitHub/RepositorioGitHub'
import { Projetos } from './Project.styled'

import {BsFolder2Open} from "react-icons/bs"
import {FiGithub} from "react-icons/fi"
import {AiOutlineArrowRight,AiOutlineArrowLeft} from "react-icons/ai"
import { Fade } from 'react-awesome-reveal'

export const Project = () => {

  const {repositorio,pegarRepositorio} = useRepositorio()
  const carrossel = useRef(null)

  useEffect(()=> {
    pegarRepositorio()
  },[])
  
  const handleLeft = (e) => {
    e.preventDefault()
    carrossel.current.scrollLeft -= carrossel.current.offsetWidth
  }
  
  const handleRigth = (e) => {
    e.preventDefault()
    carrossel.current.scrollLeft += carrossel.current.offsetWidth
  }

  return (
    <Projetos id='project'>

        <h1 className='titulo' data-aos = "fade-down">Projetos</h1>

        <div className='cards' >
          <i onClick={handleLeft}><AiOutlineArrowLeft/></i>

            <div className='container-card' ref={carrossel} data-aos = "zoom-in">
            {repositorio?.map((repositorio) => (
                <a  href={repositorio.html_url} rel="noreferrer" target='_blank'>
                <div className='cardRepo' key={repositorio.id} >
                <span className='icone'>
                  <a className='linkRepo' href={repositorio.html_url} rel="noreferrer" target='_blank'><BsFolder2Open/></a>
                  <FiGithub/>
                </span>
                <div className='infoRepo'>
                  <h1 className='repo'>{repositorio.name}</h1>
                  {repositorio.description ? <p>{repositorio.description}</p> : <p>Repositorio sem descrição</p>}
                  {repositorio.language ? <p>{repositorio.language}</p> : <p>Repositorio sem linguagem</p> }
                  
                </div>

                </div>
              </a>
              )
              )}
            </div>
          <i onClick={handleRigth}><AiOutlineArrowRight/></i>
        </div>

    </Projetos>
  )
}
