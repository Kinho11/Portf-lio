import styled from "styled-components";

export const SobreMim = styled.section`
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

  .informacao{
    display: flex;
    width: 80%;
    margin-top: 3rem;
    gap: 5rem;
    color: white;

    .foto{
      background:linear-gradient(45deg,transparent, white,transparent);
      aspect-ratio: 1/1;
      border-radius: 2rem;
      display: grid;
      place-items: center;

      .fotoPerfil{
        width: 400px;
        aspect-ratio: 1/1;
        border-radius: 2rem;
        transform: rotate(10deg);
        transition: .5s;
  
      }

      .fotoPerfil:hover{
        transform: rotate(0);
      }
    }

    .cards{
      width: 100%;
      .container-card{
        display: flex;
        align-items: center;
        gap: 3rem;
        .card{
          background-color: rgba(255,255,255, 0.3);
          display: flex;
          flex-direction: column;
          gap: .8rem;
          align-items: center;
          justify-content: center;
          width: 25%;
          height: 25%;
          padding: 2rem;
          border-radius: 2rem;
          margin-bottom: 2.5rem;
          transition: .5s;
          i{
            font-size: 1.5rem;
          }
          h4{
            text-align: center;
            font-size: 1rem;
          }
        }
  
        .card:hover{
          transform: scale(1.1);
          background-color: rgba(255,255,255, 0.1);
          border: 1px solid white;
          transition: .5s;
        }
  
      }
      p{
        font-size: 1.3rem;
        line-height: 1.5;
      }
    }


  }

  @media screen and (max-width: 600px) {
    .informacao{
      display: flex;
      align-items: center;
      flex-direction: column;
      .foto{

        .fotoPerfil{
          width: 300px;
        }

      }

      .cards{
        .container-card{
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;

          .card{
            width: 35%;
            height: 35%;
            }
          }

        }
        
      }


    }

`