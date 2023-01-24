import styled from "styled-components";

export const SectionHeader = styled.section`
  margin: 5rem 0;
  width: 100%;
  display: flex;
  gap: .8rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;  

  h1{
    font-size: 2.5rem;
  }

  h3{
    font-size: 1.5rem;
  }

  h3.subtitulo{
    font-size: 1rem;
  }

  .links{
    display: flex;
    gap: 3rem;
    margin-top: 1.5rem;
    .botao{
      border: 1px solid white;
      padding: 0.7rem 1.7rem;
      transition: .5s;
      color: white;
    }

    .botao:hover{
      background: rgba(255,255,255, 0.3);
      transition: .5s;
    }
  }

  .foto{
    width: 450px;
    border-radius: 12rem 12rem 0 0;
    margin: 3rem 0;
    animation: float 5s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100%{
      transform: translateY(0px);
    }
    50%{
      transform: translateY(-40px);
    }
  }

  .container-social{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .8rem;
    position: absolute;
    left: 25rem;

    .icone-social{
      font-size: 1.7rem;
      color: white;
      cursor: pointer;
      transition: .3s;
    }
    .icone-social:hover{
      color: rgba(255,255,255, 0.6);
      transform: scale(1.2);
      transition: .3s;
    }
  }

  .container-social::after{
    content: "";
    width: 1px;
    height: 2rem;
    background-color: white;
  }

  .scroll{
    display: flex;
    position: absolute;
    right: 25rem;
    transform: rotate(90deg);
    font-size: 1.5rem;
    a{
      color: white;
      transition: .3s;
    }
    a:hover{
      
      color: rgba(255,255,255, 0.6);
      transition: .3s;
    }

  }


`