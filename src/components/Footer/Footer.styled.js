import styled from "styled-components";


export const FooterStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 380px;
  padding: 3rem 2rem;
  border-top: 2px solid white;

  h1{
    font-size: 2.5rem;
    color: white;
    text-align: center;
  }

  ul{
    display: flex;
    gap: .7rem;
    margin-top: 2rem;
    
    a{
      color: white;
      transition: .8s;

      &:hover{
        border-bottom: 1px solid white;
        font-size: 1.1rem;
        transition: .8s;
      }

    }
  }

  .social{
    display: flex;
    gap: 1.5rem;
    margin-top: 2rem;

    span{
      display: flex;
      width: 50px;
      height: 50px;
      border-radius: 100%;
      align-items: center;
      justify-content: center;
      background: rgba(255,255,255, 0.3);
      transition: .5s;

      &:hover{
        transform: scale(1.2);
        transition: .5s;
      }

      a{
        font-size: 2rem;
        padding-top: .5rem;
        color: white;
      }


    }
  }

  @media screen and (max-width: 600px) {
    height: 450px;

    ul{
      a{
        white-space: nowrap;
      }
    }

    }

`