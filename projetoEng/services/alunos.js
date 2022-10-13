import { http } from './config'

export default {

  listar: () => {
    return http.get('alunos')
  },
  criarConta: (usuario) => {
    return http.post('alunos', usuario)
  },
}
