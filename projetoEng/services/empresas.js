import { http } from './config'

export default {

  listar: () => {
    return http.get('empresas') //GET EMPRESAS
  },
  criarContaE: (usuario) => {
    return http.post('empresas', usuario) //POST EMPRESAS
  },

  atualizar: (usuario) => {
    return http.put('empreas', usuario) //PUT EMPRESAS
  },
  apagar: (usuario) => {
    return http.delete('empresas', { data: usuario }) //Delete EMPRESAS
  }
}
