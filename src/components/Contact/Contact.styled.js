import styled from "styled-components";

export const Contato = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
  /* width: 100vw; */
  min-height: 100vh;

  .titulo{
    text-decoration: underline;
    margin-top: 6.5rem;
    margin-bottom: 6rem;
    color: white;
    font-size: 2.5rem;
  }

  .container-contato{
    width: 70%;
    display: flex;
    gap: 5rem;
    justify-content: center;
    
    .tipos-contatos{
      display: flex;
      align-items: center;
      width: 40%;
      flex-direction: column;
      padding: .7rem 1.7rem;
      gap: 2rem;

      article{
        background: rgba(255,255,255, 0.5);
        width: 300px;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: .7rem 1.7rem;
        border-radius: 2rem;
        transition: .5s;
        gap: .5rem;

        &:hover{
          background-color: rgba(255,255,255, 0.1);
          border: 1px solid white;
          transition: .5s;
          a{
           background-color: rgba(255,255,255, 0.6);
            transition: .5s;

          }
        }

        i{
          font-size: 2rem;
        }

        a{
          white-space: nowrap;
          background-color: #363636;
          border-radius: 2rem;
          padding: .7rem 1.7rem;
          color: white;
          transition: .5s;
        }

      }

    }

    .mensagem{
      width: 60%;
      max-height: 80%;
      padding: .7rem 0;

      form{
        display: flex;
        gap: 2rem;
        flex-direction: column;
        width: 60%;

        div{
          display: flex;
          flex-direction: column;
          gap: .2rem;
        }
        
        input{
          outline: none;
          padding: .5rem;
          border: none;
          border-radius: .5rem;
          background: transparent;
          border: 1px solid white;
          color: white;
          font-size: 1.05rem;

          &::placeholder{
            color: white;
            font-size: 1.05rem;
          }
        }

        textarea{
          resize: none;
          outline: none;
          background: transparent;
          border: 1px solid white;
          padding: .5rem;
          border-radius: .5rem;
          color: white;
          font-size: 1.05rem;

          &::placeholder{
            color: white;
            font-size: 1.05rem;
          }
        }

        button{
          background: rgba(255,255,255, 0.3);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          padding: 1rem;
          border: none;
          border-radius: 2rem;
          font-size: 1.05rem;
          cursor: pointer;
          width: 30%;
          transition: .5s;

          &:hover{
            background-color: rgba(255,255,255, 0.1);
            transition: .5s;
            border: 1px solid white;
          }
        }

        span{
          color: #FA8072;
          font-size: 1.1rem;
          font-weight: 500;
        }
      }
    }

  }

  @media screen and (max-width: 600px) {

    .titulo{
      margin-top: -5rem;
    }

    .container-contato{
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      .mensagem{
        width: 100%;

        form{
          width: 100%;

          button{
            margin-bottom: 10rem;
          }
        }

      }
    }
    }

`