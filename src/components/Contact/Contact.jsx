import React from 'react'
import { Contato } from './Contact.styled'

import {AiOutlineMail, AiOutlineWhatsApp} from "react-icons/ai"

import emailjs from "emailjs-com"
import { toast } from 'react-toastify';



export const Contact = () => {




  const enviarMensagem = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_w7p8luh', 'template_bg3a8ut', e.target, 'QCzx3fXI3K5COI7XF').then((response) => {
      toast.success("Mensagem enviada com sucesso!",{
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }, (error) => {
      toast.error("Mensagem não enviada, tente novamente!",{
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    })
    e.target.reset()
  }

  return (
    <Contato id='contact'>
      <h1 className='titulo'>Entre em contato</h1>

      <div className='container-contato'>

        <div className='tipos-contatos'>
          <article >
            <i><AiOutlineMail/></i>
            <h3>Email</h3>
            <p>Marcuspaulo.morenomf@gmail.com</p>
            <a href="mailto:marcuspaulo.morenomf@gmail.com" target="_blank" rel="noopener noreferrer">Entre em contato</a>
          </article>

          <article >
            <i><AiOutlineWhatsApp/></i>
            <h3>WhatsApp</h3>
            <p>(71) 98273-2802</p>
            <a href="https://api.whatsapp.com/send?phone=+5571988932538&text=Olá, gostei bastante do seu portfólio!!" target="_blank" rel="noopener noreferrer">Entre em contato</a>
          </article>
        </div>

        <div className='mensagem'>
          <form action="" onSubmit={enviarMensagem}>
            <div>
            <input type="text" name="nomeCompleto" id="nomeCompleto" placeholder='Digite seu nome' required />
            </div>
            <div>
            <input type="email" name="email" id="email" placeholder='Digite seu email' required />
            </div>
            <div>
            <textarea name="mensagem" id="mensagem" cols="30" rows="7" placeholder='Digite uma mensagem' required></textarea>
            </div>
            <button type='submit'>Enviar</button>
          </form>
        </div>

      </div>

    </Contato>
  )
}
