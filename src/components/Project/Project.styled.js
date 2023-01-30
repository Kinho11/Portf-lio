import styled from "styled-components";

export const Projetos = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;

  .titulo{
    text-decoration: underline;
    margin-top: 6.5rem;
    color: white;
    font-size: 2.5rem;
  }

  .cards{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    height: 100%;
    width: 77vw;
    .container-card{
      display: flex;
      width: 100%;
      overflow-x: auto;
      scroll-behavior: smooth;
      gap: 1rem;

      .cardRepo{
        width: 250px;
        height: 250px;
        display: flex;
        flex-direction: column;
        font-size: .9rem;
        align-items: center;
        background:rgba(255,255,255, 0.9) ;
        border-radius: 2rem;
        padding: 1.7rem 1.7rem;
  
        .icone{
          font-size: 2rem;
          width: 250px;
          display: flex;
          padding: 0 .7rem;
          justify-content: space-between;
  
          .linkRepo{
            text-decoration: none;
            color: black;
            position: relative;
  
            &:hover{
              font-size: 2.3rem;
              transition: .7s;
            }
  
            &:hover::after{
              opacity: 1;
              pointer-events: all;
            }
              
            &::after{
              transition: .4s;
              pointer-events: none;
              white-space: nowrap;
              content: 'Visite o repositório';
              background: rgba(0,0,0, 0.2);
              padding: 3px 4px;
              border-radius: 5px;
              font-size: 1rem;
              font-weight: 600;
              opacity: 0;
              position: absolute;
              top: 10px;
              margin-left: 5px;
            }
          }
        }
  
        .infoRepo{
          max-width: 250px;
          height: 250px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          word-wrap: break-word;
          text-align: center;
      }
        
      }

      &::-webkit-scrollbar{
        display: none;
      }
    }

    i{
      font-size: 3rem;
      cursor: pointer;
      color: white;
    }

  }




`