import { http } from './config'

export default {

  listar: () => {
    return http.get('alunos')
  },
  criarContaA: (aluno) => {
    return http.post('alunos', aluno)
  },
  criarContaE: (empresa) => {
    return http.post('empresa', empresa)
  }
}
