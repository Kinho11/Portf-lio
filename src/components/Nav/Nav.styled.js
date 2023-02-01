import styled from "styled-components";

export const Menu = styled.section`
  background: rgba(255,255,255, 0.3);
  backdrop-filter: blur(15px);
  width: max-content;
  display: flex;
  padding: 0.7rem 1.7rem;
  gap: 0.8rem;
  z-index: 2;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  border-radius: 3rem;

  a{
    background: transparent;
    padding: 0.9rem;
    border-radius: 50%;
    display: flex;
    font-size: 1.1rem;
    transition: .4s;
    color: white;
  }

  a:hover{
    background: rgba(255,255,255, 0.5);
    transition: .4s;

  }

  a.ativo{
    background: rgba(255,255,255, 0.2);
  }

`