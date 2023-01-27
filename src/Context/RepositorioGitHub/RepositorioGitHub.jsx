import axios from "axios";
import { createContext, useContext, useState} from "react";

export const RepositorioContext = createContext()

export const RepositorioProvider = ({children}) => {

  const [repositorio,setRepositorio] = useState()

  const pegarRepositorio = async () => {
    try {
      const {data} = await axios.get("https://api.github.com/users/Kinho11/repos?client_id=ca96ffe8ec2af85ec884?client_secret=d14a35207f88b4d3b34871cfecddb704a9897976")
      setRepositorio(data)
    } catch (error) {
      alert("erro")
    }
  }


  return(
    <RepositorioContext.Provider value={{repositorio,pegarRepositorio}}>
      {children}
    </RepositorioContext.Provider>
  )

}

export const useRepositorio = () => {
  return useContext(RepositorioContext);
};