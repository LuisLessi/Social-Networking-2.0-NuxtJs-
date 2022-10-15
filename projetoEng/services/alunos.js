import { http } from './config'

export default {

  listar: () => {
    return http.get('alunos') //GET
  },
  criarConta: (usuario) => {
    return http.post('alunos', usuario) //POST
  },

  atualizar: (usuario) => {
    return http.put('alunos', usuario) //PUT
  },
  apagar: (usuario) => {
    return http.delete('aluno', { data: usuario }) //Delete
  }
}
