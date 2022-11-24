import { http } from './config'

export default {

  listar: () => {
    return http.get('alunos') //GET ALUNOS
  },
  criarContaA: (usuario) => {
    return http.post('alunos', usuario) //POST ALUNOS
  },

  atualizar: (usuario) => {
    return http.put(`empresas/${usuario.token}`, usuario) //PUT ALUNOS
  },
  apagar: (usuario) => {
    return http.delete('aluno', { data: usuario }) //Delete ALUNOS
  }
}
