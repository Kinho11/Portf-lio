import styled from "styled-components";


export const Experiencia = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 100vw; */
  min-height: 100vh;

  h1{
    text-decoration: underline;
    margin-top: 6.5rem;
    margin-bottom: 6rem;
    color: white;
    font-size: 2.5rem;
  }

  .container-experiencia{
    background: rgba(255,255,255, 0.2);
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem 10rem;
    width: 70%;
    height: max-content;

    h2{
      color: white;
      font-size: 2rem;
      text-align: center;
      margin-bottom: 2rem;
    }

    .cards{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 3rem;

      .card-experiencia{
        background:rgba(255,255,255, 0.9) ;
        width: 170px;
        height: 170px;
        padding: .7rem 1.7rem;
        border-radius: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: .7rem;
        transition: .5s;
  
        i{
          font-size: 2rem;
  
        }
        p{
          font-weight: 550;
        }
  
      }

      .card-experiencia:hover{
        transform: skew( 10deg, 5deg );
      }
  
      
    }


  }

  @media screen and (max-width: 600px) {
    .container-experiencia{
      width: 90%;
      .cards{
        
        .card-experiencia{
          width: 200px;
        }
      }

    }

    }


`