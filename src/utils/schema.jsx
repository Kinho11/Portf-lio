import * as yup from "yup"

export const mensagemSchema = yup.object().shape({
  nomeCompleto: yup.string().required("Por favor, digite seu nome"),
  email: yup.string().required("Por favor, digite seu email"),
  mensagem: yup.string().required("Por favor, digite uma mensagem")

})