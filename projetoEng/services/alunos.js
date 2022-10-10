import { http } from './config'

export default {

  listar: () => {
    return http.get('alunos')
  },
  criarConta: (aluno) => {
    return http.post('aluno', aluno)
  }

}
