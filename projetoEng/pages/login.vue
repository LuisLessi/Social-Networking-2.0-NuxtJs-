<template>
  <div id="app">
    <div class="fundo">
      <section class="forms-section">
        <h1 class="section-title1">
          Social <span class="section-title2"> Networking</span><br>
        </h1>
        <div class="forms">
          <div class="form-wrapper" :class="{ 'is-active': isTabActive }">
            <button
              type="button"
              class="switcher switcher-login"
              @click="isTabActive = !isTabActive"
            >
              Login
              <span class="underline"></span>
            </button>
            <form class="form form-login">
              <fieldset>
                <legend>
                  Por favor, digite seu e-mail e senha para logar .
                </legend>
                <div class="input-block">
                  <label for="login-email">E-mail</label>
                  <input
                    id="login-email"
                    type="email"
                    name="emailLog"
                    required
                  />
                </div>

                <div class="input-block">
                  <label for="login-password">Senha</label>
                  <input
                    id="login-password"
                    type="password"
                    name="senhaLog"
                    required
                  />
                </div>
              </fieldset>
              <button type="submit" class="btn-login">Login</button>
            </form>
          </div>
          <div class="form-wrapper" :class="{ 'is-active': !isTabActive }">
            <button
              @click="isTabActive = !isTabActive"
              type="button"
              class="switcher switcher-signup"
            >
              Criar conta
              <span class="underline"></span>
            </button>

            <!-- Form Cadastro-->
          <form @submit.prevent="criarConta" class="form form-signup">
            <fieldset>
              <legend>
                Por favor, preencha os dados abaixo para se cadastrar.
              </legend>
              <div class="input-block">
                <label for="signupEmail">Nome completo</label>
                <input type="text"
                                                                        name="nome"
                                                                        class="form-control"
                                                                        placeholder="Nome" v-model="aluno.nome" required>
              </div>
              <div class="input-block">
                <label for="signupEmail">E-mail</label>
                <input type="text"
                                                                        name="email" class="form-control"
                                                                        placeholder="Seu Email" v-model="aluno.email" required>
              </div>
              <div class="input-block">
                <label for="signupTel" >N° de celular</label>
                <label
                                                                                class="labels">Número de
                                                                                celular</label><input type="number"
                                                                                name="celular" id="celular"
                                                                                placeholder="Digite seu número de celular"
                                                                                class="form-control" maxlength="11" v-mask="['###########']" v-model="aluno.celular" required>
              </div>
              <div class="input-block">
                <label for="signupEmail">Data de nascimento</label>
                <input name="data"
                                                                                type="number"
                  v-model="aluno.dataDeNascimento"
                  class="form-control"
                  placeholder="aaaa/mm/dd"
                  v-mask="['####-##-##T00:00:00.000Z']"
                  maxlength="13"
                  autocomplete="on"
                  required>
              </div>
              <div class="input-block">
                <label for="signupPassword">Senha</label>
                <input id="signupPassword" type="password" v-model="aluno.senha" required />

              </div>
              <div class="input-block">
                <label for="passwordConfirm">Confirmar Senha</label>
                <input id="passwordConfirm" type="password" placeholder="***********" required /><br />
                <label> <p>Selecione o tipo de conta</p> </label><br />
                <label
                  >Empresarial<input
                    name="tipoConta"
                    id="contaE"
                    type="radio"

                    checked
                /></label>
                <label></label>
                <label></label>
                <label></label>
                <label></label>
                <label></label>
                <label></label>
                <label></label>
                <label></label>
                <label></label>
                <label></label>
                <label></label>
                <label></label>
                <label></label>
                <label></label>
                <label></label>
                <label
                  >Empregado<input
                    name="tipoConta"
                    id="contaA"
                    type="radio"

                /></label>
              </div>
            </fieldset>
            <button onclick="" href="" type="submit" class="btn-signup">
              Continue
            </button>


          </form>
        </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Usuario from '../services/alunos';

export default {
  data() {
    return {
      isTabActive: true,
      aluno:{
       nome:"",
       senha:"",
       email:"",
       dataDeNascimento:"",
       celular:"",
      },
      senha:""
         };

  },

  methods: {

    criarConta(){
      Usuario.criarConta(this.aluno).then(resposta =>{
        alert('Salvo com sucesso')

      })
    }
    },
    head: {
    script: [
      {
        src: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js",
      },
      {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js",
      },
      { src: "https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js" },
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",
        integrity:
          "sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8",
        crossorigin: "anonymous",
      },
      {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js",
      },
    ],
    link: [
      {
        href: "https://fonts.googleapis.com/css2?family=Righteous&display=swap",
        rel: "stylesheet",
      },
      {
        href: "https://fonts.googleapis.com/css2?family=Vast+Shadow&display=swap",
        rel: "stylesheet",
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Train+One&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/pace-js@latest/pace-theme-default.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css",
        integrity:
          "sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT",
        crossorigin: "anonymous",
      },
    ],
  },
  }

</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

h1 {
  font-family: "Vast Shadow", cursive;
}

body {
  overflow-x: hidden !important;

  margin: 0px;
  font-family: Roboto, -apple-system, "Helvetica Neue", "Segoe UI", Arial,
    sans-serif;
  background-color: url(../assets/photo-1451187580459-43490279c0fa.jpg);
}

.fundo {
  background-image: url(../assets/photo-1451187580459-43490279c0fa.jpg);
  background-repeat: no-repeat;
  bottom: 0;
  color: black;
  left: 0;
  overflow: auto;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.forms-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section-title1 {
  font-size: 40px;
  letter-spacing: 1px;
  color: #3f48cc;
  font-family: "Bookman Old Style";
  font-weight: bold;
  margin-bottom: -10px;
  margin-top: -3px;
  margin-right: -20px;
}

.section-title2 {
  color: #00a2e8;
}

.forms {
  display: flex;
  align-items: flex-start;
  margin-top: 30px;
}

.form-wrapper {
  animation: hideLayer 0.3s ease-out forwards;
}

.form-wrapper.is-active {
  animation: showLayer 0.3s ease-in forwards;
}

@keyframes showLayer {
  50% {
    z-index: 1;
  }

  100% {
    z-index: 1;
  }
}

@keyframes hideLayer {
  0% {
    z-index: 1;
  }

  49.999% {
    z-index: 1;
  }
}

.switcher {
  position: relative;
  cursor: pointer;
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding: 4px;
  text-transform: uppercase;
  font-family: inherit;
  font-size: 16px;
  letter-spacing: 0.5px;
  color: rgb(216, 113, 16);
  font-weight: bold;
  background-color: rgb(0, 0, 0);
  border: none;
  outline: none;
  transform: translateX(0);
  transition: all 0.3s ease-out;
  border-radius: 10px;
}

.form-wrapper.is-active .switcher-login {
  color: rgb(75, 19, 165);
  background-color: black;
  transform: translateX(90px);
  font-weight: bold;
  margin-left: 138px;
}

.form-wrapper.is-active .switcher-signup {
  color: rgb(75, 19, 165);
  transform: translateX(-90px);
  background-color: black;
  border-radius: 5px;
}

.underline {
  position: absolute;
  bottom: -5px;
  left: 0;
  overflow: hidden;
  pointer-events: none;
  width: 100%;
  height: 2px;
}

.underline::before {
  content: "";
  position: absolute;
  top: 0;
  left: inherit;
  display: block;
  width: inherit;
  height: inherit;
  background-color: currentColor;
  transition: transform 0.2s ease-out;
}

.switcher-login .underline::before {
  transform: translateX(101%);
}

.switcher-signup .underline::before {
  transform: translateX(-101%);
}

.form-wrapper.is-active .underline::before {
  transform: translateX(0);
}

.form {
  overflow: hidden;
  min-width: 260px;
  margin-top: 50px;
  padding: 30px 25px;
  border-radius: 5px;
  transform-origin: top;
}

.form-login {
  animation: hideLogin 0.3s ease-out forwards;
}

.form-wrapper.is-active .form-login {
  animation: showLogin 0.3s ease-in forwards;
}

@keyframes showLogin {
  0% {
    background: #d7e7f1;
    transform: translate(40%, 10px);
  }

  50% {
    transform: translate(0, 0);
  }

  100% {
    background-color: #fff;
    transform: translate(35%, -20px);
  }
}

@keyframes hideLogin {
  0% {
    background-color: #fff;
    transform: translate(35%, -20px);
  }

  50% {
    transform: translate(0, 0);
  }

  100% {
    background: #d7e7f1;
    transform: translate(40%, 10px);
  }
}

.form-signup {
  animation: hideSignup 0.3s ease-out forwards;

}

.form-wrapper.is-active .form-signup {
  animation: showSignup 0.3s ease-in forwards;
}

@keyframes showSignup {
  0% {
    background: #d7e7f1;
    transform: translate(-40%, 10px) scaleY(0.8);
  }

  50% {
    transform: translate(0, 0) scaleY(0.8);
  }

  100% {
    background-color: #fff;
    transform: translate(-35%, -20px) scaleY(1);
  }
}

@keyframes hideSignup {
  0% {
    background-color: #fff;
    transform: translate(-35%, -20px) scaleY(1);
  }

  50% {
    transform: translate(0, 0) scaleY(0.8);
  }

  100% {
    background: #d7e7f1;
    transform: translate(-40%, 10px) scaleY(0.8);
  }
}

.form fieldset {
  position: relative;
  opacity: 0;
  margin: 0;
  padding: 0;
  border: 0;
  transition: all 0.3s ease-out;
}

.form-login fieldset {
  transform: translateX(-50%);
}

.form-signup fieldset {
  transform: translateX(50%);
}

.form-wrapper.is-active fieldset {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 0.4s ease-in, transform 0.35s ease-in;
}

.form legend {
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
  clip: rect(0 0 0 0);
}

.input-block label {
  font-size: 14px;
  color: #a1b4b4;
}

p {
  font-size: 14px;
  color: #a1b4b4;
}

.input-block input {
  display: absolute;
  width: 100%;
  margin-top: 8px;
  padding-right: 15px;
  padding-left: 15px;
  font-size: 16px;
  line-height: 40px;
  color: #3b4465;
  background: #eef9fe;
  border: 1px solid #cddbef;
  border-radius: 2px;
}

.input-block input {
  display: absolute;
  width: 100%;
  margin-top: 8px;
  padding-right: 15px;
  padding-left: 15px;
  font-size: 16px;
  line-height: 40px;
  color: #3b4465;
  background: #eef9fe;
  border: 1px solid #cddbef;
  border-radius: 2px;
}

.form [type="submit"] {
  opacity: 0;
  display: block;
  min-width: 220px;
  margin: 21px auto 10px;
  font-size: 18px;
  line-height: 40px;
  border-radius: 25px;
  border: none;
  transition: all 0.3s ease-out;
}

.form-wrapper.is-active .form [type="submit"] {
  opacity: 1;
  transform: translateX(0);
  transition: all 0.4s ease-in;
}

.btn-login {
  color: #fbfdff;
  background: #a7e245;
  transform: translateX(-30%);
}

.btn-signup {
  color: #a7e245;
  background: #fbfdff;
  box-shadow: inset 0 0 0 2px #a7e245;
  transform: translateX(30%);
}

/** TELA DE LOADING **/
.pace {
  -webkit-pointer-events: none;
  pointer-events: none;

  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;

  z-index: 2000;
  position: fixed;
  height: 90px;
  width: 90px;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.pace.pace-inactive .pace-activity {
  display: none;
}

.pace .pace-activity {
  position: fixed;
  z-index: 2000;
  display: block;
  position: absolute;
  left: -30px;
  top: -30px;
  height: 90px;
  width: 90px;
  display: block;
  border-width: 30px;
  border-style: double;
  border-color: #ed074c transparent transparent;
  border-radius: 50%;

  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;

  -webkit-animation: spin 1s linear infinite;
  -moz-animation: spin 1s linear infinite;
  -o-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
}

.pace .pace-activity:before {
  content: " ";
  position: absolute;
  top: 10px;
  left: 10px;
  height: 50px;
  width: 50px;
  display: block;
  border-width: 10px;
  border-style: solid;
  border-color: #ed074c transparent transparent;
  border-radius: 50%;

  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(359deg);
  }
}

@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(359deg);
  }
}

@-o-keyframes spin {
  100% {
    -moz-transform: rotate(359deg);
  }
}

@keyframes spin {
  100% {
    transform: rotate(359deg);
  }
}

::-webkit-scrollbar-track {
    background-color: #F5F5F5;
}

::-webkit-scrollbar {
    height: 6px;
    background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb {
    background-color: #3d4852;
    border-radius: 3px;
}
</style>
