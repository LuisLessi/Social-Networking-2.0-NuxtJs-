<template>
  <div>
        <form @submit.prevent="criarContaE">
            <div class="nav-wrapper">
                <div class="grad-bar"></div>
                <nav class="navbar">
                  <div class="menu-toggle" id="mobile-menu">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                  </div>
                  <ul>
                   <div class="home">
                    <li class="nav-item"><a href="/home">Home</a></li>
                   </div>
                   <div class="perfil">
                    <li class="nav-item"><a href="/perfilCriadoE">Perfil</a></li>
                   </div>
                   <div class="search-box">
                    <input class="search-txt" type="text" name="" placeholder="Procurar">
                    <a class="search-btn" href="#">
                      <i class="fas fa-search"></i>
                      </a>
                    </div>
                    <div class="sobre">
                     <li class="nav-item"><a href="/sobre">Sobre</a></li>
                    </div>
                    <div class="logout">
                    <li class="nav-item"><a href="/home">Logout</a></li>
                   </div>

                  </ul>

                </nav>
                </div>
            <div class="container rounded bg-white mt-5 mb-5">
                <div class="row">
                    <div class="col-md-3 border-right">

                            <div class="imageContainer">
                                <img src="../assets/camera.png" alt="Selecione uma imagem" id="imgPhoto" ref="imgPhoto" class="imgPhoto" @click="imgPhotoLoad">
                                <input type="file"  ref="flImage" id="flImage" name="flImage" class="flImage" @change="filePhotoLoad" accept="image/*">
                            </div>

                        <div class="row mt-2">
                            <div>
                                <label class="profileLabel"></label><input type="nome"  class="form-control"
                                    placeholder="Nome da Empresa" v-model="empresa.nome" required>
                            </div>

                            <div><label class="profileLabel"></label><input type="email"
                                    class="form-control" placeholder="Email para curriculum" v-model="empresa.email" required>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center experience">
                            <span>
                                <h3>Vagas</h3>
                            </span>
                        </div><br>
                        <fieldset id="fs">
                            <section>

                                <form action="#" method="post">
                                  <button @click="input2++" class="btn btn-outline-primary" type="button" style="min-width:110px;">Adicionar</button>

      <button @click="input2--" class="btn btn-outline-secondary" type="button" style="min-width:110px;">Remover</button>

    <label v-if="empresa.vagas.maxlength < 0"> error</label>
    <input v-else v-for="i in input2" :key="i" type="text" class="form-control" :id='"item"' style="max-width:240px; margin-top:5px" v-model="empresa.vagas[i]">

                                </form>
                            </section>
                        </fieldset>

                        <form id="myForm">



                        </form>
                    </div>

                    <div class="col-md-5 border-right">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4 class="text-right">Configurações do Perfil</h4>
                            </div>


                            <div class="row mt-3">
                                <div class="col-md-12" required><label class="labels">Número de
                                        celular</label><input type="phone"
                                                                                name="celular" id="celular"
                                                                                placeholder="Digite um número de contato"
                                                                                class="form-control" maxlength="11" v-mask="['###########']" v-model="empresa.celular" required>



                                </div>

                                <div class="col-md-12"><label class="labels">Número de
                                        telefone</label><input type="text" name="tel" id="phone"
                                        placeholder="Digite um fixo de contato" class="form-control" v-mask="['(##) ####-####']"     v-model="empresa.tel"
/>
                                </div>
                                <div class="col-md-12"><label class="labels">Linkedin</label><input type="text"
                                        name="linkedin" class="form-control" placeholder="Perfil da empresa" value=""
                                        v-model="empresa.link">
                                </div>
                                <div class="col-md-12"><label class="labels">Sites</label><input type="text"
                                        name="sites" class="form-control" placeholder="Site da empresa" value=""
                                        v-model="empresa.site">
                                </div>

                                <div class="col-md-12"><label class="labels">Data de
                                        fundação</label><input name="data"
                  type="date"
                  v-model="empresa.dataDeFundacao"
                  class="form-control"
                  placeholder="aaaa/mm/dd"
                  v-mask="['####-##-##']"
                  maxlength="13"
                  autocomplete="on"
                  required>

                                </div>
                                <div class="col-md-12"><label class="labels">Senha</label><input type="password"
                                        name="senha" class="form-control" placeholder="senha" value=""
                                        v-model="empresa.senha" required>
                                </div>
                            </div>
                            <div class="row mt-3">


                            </div>
                            <div class="col-md-12"><label class="labelInfo">Sobre</label>
                                <textarea type="text" name="sobre" class="form-control"
                                    placeholder="Conte um pouco sobre a cultura de sua empresa" value=""
                                    maxlength="1000" style="height: 120px;" v-model="empresa.sobre"></textarea>
                            </div>
                           <div id = "salvaPerfilE" class="mt-5 text-center"><button
                             class="btn btn-primary profile-button"
                             type="submit">Salvar Perfil</button></div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center experience">
                                <span>
                                    <h2>Sedes da empresa</h2>
                                </span>

                            </div><br>

                            <button @click="input++" class="btn btn-outline-primary" type="button" style="min-width:150px;">Adicionar</button>

                            <button @click="input--" class="btn btn-outline-secondary" type="button" style="min-width:150px;">Remover</button>

                            <input v-for="i in input" :key="i" type="text" class="form-control" :id='"item"' style="max-width:800px; margin-top:5px" v-model="empresa.sede[i]">
                            <form id="myForm">
                                <fieldset id="buildyourform" placeholder="Instituição - data de conclusão">
                                </fieldset>
                              </form>
                        </div>

                    </div>

                </div>

            </div>
        </form>
        <div ><a href="/home"><img class="logo" src="../assets/SocialNetSobre_logo.png" alt="Company Logo" ></a></div>
    </div>

</template>

<script>
import Empresa from '../services/empresas';

export default {
  middleware: 'auth',

  data() {
    return {
      empresa:{
        celular:"",
        tel:"",
        sobre:"",
        dataDeFundacao:"",
        site:"",
        link:"",
        email:"",
        nome:"",
        senha:"",
        sede: [
        this.input
        ],
        vagas: [
        this.input2
        ]
      },
      input: 1,
      input2: 1,
     };

  },

 /**
  Lista empresas
   mounted(){
    Empresa.listar().then(resposta =>{
      console.log(resposta.data)
      this.cliente = resposta.data
    })
  },*/
  methods: {
    criarContaE(){
        Empresa.criarContaE(this.empresa).then(resposta =>{
        console.log(resposta.data)
        alert('conta empresa salvo com sucesso')

      })
    },

    imgPhotoLoad(){
      this.$refs.flImage.click()
    },
    filePhotoLoad(){
      if (this.$refs.flImage.files.length <= 0) {
        return;
    }
    let reader = new FileReader();
    reader.onload = () => {
      this.$refs.imgPhoto.src = reader.result;
    }
    reader.readAsDataURL(this.$refs.flImage.files[0])
    }

    },
  head: {
    title: 'Edição de perfil',
    script: [
    {src:"https://kit.fontawesome.com/01b3655c48.js"},
    {src:"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"},
    {src:"https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js"},

    ],
    link:[
      {rel:"stylesheet", id:"bootstrap-css", src:"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"},
      {href:"https://cdn.jsdelivr.net/npm/pace-js@latest/pace-theme-default.min.css"},
      {href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css", rel:"stylesheet", integrity:"sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi", crossorigin:"anonymous"}
    ]
  },

}
</script>

<style>
body {
    background: -webkit-linear-gradient(left, #3931af, #00c6ff);
}

h2 {
    margin-left: 30px;
}

h3 {
    margin-left: 80px;

}

.search-box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(0, 0, 0);
    height: 15px;
    border-radius: 40px;
    padding: 18px;

}

.search-box:hover>.search-txt {

    width: 240px;
    padding: 0 5px;

}

.search-box:hover>.search-btn {

    background: none;
}
.btn-outline-primary{
  background-color: #00e6328e;

}
.btn-outline-primary:hover{
  background-color: #00e632e0;
}



.btn-outline-secondary{
  background-color: #ce342fc2;
  position: absolute;
  margin-left: 20px;
}
.btn-outline-secondary:hover{
  background-color: #ce342f;
}
.search-btn {

color: white;
float: right;
width: 25px;
height: 25px;
margin-top: -13px;
border-radius: 50%;
background: #ed074c;
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
}

.search-txt {
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: white;
    font-size: 15px;
    transition: 0.3s;
    line-height: 27px;
    width: 380px;
    margin-top: -13px;

}

.perfil {
    background-color: #00a2e8;
    border-radius: 4px;
    padding-left: 15px;
    margin-bottom: 14px;
    margin-top: 10px;
    padding-bottom: -30px;
    margin-left: 10px;

}

.home {
    margin-left: 30px;
    margin-bottom: 1px;
    margin-top: 11px;
}

.sobre {
    padding-left: 20px;
    padding-top: 10px;
}

.cinza {
    position: static;
    background-color: #eeeeee;
    margin-left: -16px;
    padding-right: 147px;
}

#flImage{
  display: none;
}

.cinza2 {
    background-color: #eeeeee;
    margin-left: -16px;
    padding-right: 297px;

}

.cinza3 {
    background-color: #eeeeee;
    margin-left: -16px;
    padding-right: 99px;

}

.cinza4 {
    background-color: #eeeeee;
    margin-top: 90px;
    margin-bottom: 0px;
}


.labelsCinza1 {
    position: relative;
    padding-left: 30px;
    padding-top: 30px;
}

.logout {
    margin-right: 10px;
    border-radius: 90px;
    background-color: #eb1616;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: -30px;
    margin-bottom: 14px;
    margin-top: 10px;
}

.pesquisar {
    margin-left: 20px;
    margin-right: -5px;
}

.nav-wrapper {
    width: 100%;
    position: -webkit-sticky;
    /* Safari */
    position: static;
    top: 0;
    background-color: #fff;
}

.grad-bar {
    width: 100%;
    height: 5px;
    background: -webkit-linear-gradient(left, #3931af, #00c6ff);

}

.navbar img {
    height: 70px;
    width: auto;
    justify-self: start;
    margin-left: 20px;
}

.navbar ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    justify-self: end;
    margin-right: -120px;

}

.nav-item a {
    color: #000;
    font-size: 15px;
    font-weight: 400;
    transition: color 0.3s ease-out;
}

.nav-item a:hover {
    color: #3498db;
}

.navbar {
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
    height: 50px;
    overflow: hidden;
}

#search-icon {
    font-size: 0.9rem;
    margin-top: 3px;
    margin-left: 15px;
    transition: color 0.3s ease-out;
}

#search-icon:hover {
    color: #3498db;
    cursor: pointer;
}

/* MOBILE MENU & ANIMATION */

.menu-toggle .bar {
    width: 25px;
    height: 3px;
    background-color: #3f3f3f;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

#mobile-menu.is-active .bar:nth-child(2) {
    opacity: 0;
}

#mobile-menu.is-active .bar:nth-child(1) {
    -webkit-transform: translateY(8px) rotate(45deg);
    -ms-transform: translateY(8px) rotate(45deg);
    -o-transform: translateY(8px) rotate(45deg);
    transform: translateY(8px) rotate(45deg);
}

#mobile-menu.is-active .bar:nth-child(3) {
    -webkit-transform: translateY(-8px) rotate(-45deg);
    -ms-transform: translateY(-8px) rotate(-45deg);
    -o-transform: translateY(-8px) rotate(-45deg);
    transform: translateY(-8px) rotate(-45deg);
}

.fieldname {
    margin-top: 10px;
    width: 250px;
    word-wrap: break-word;
}


.emp-profile {
    padding: 3%;
    margin-top: 3%;
    margin-bottom: 3%;
    border-radius: 0.5rem;
    background: #fff;
}

.logo {
  position: absolute;
  top: 2%;
  padding-left: 20px;
  max-height: 40px;

}
.imgLogo{
  position: inherit;
  width: 350px;
}
.profile-img {
    text-align: center;
}

.profile-img img {
    width: 70%;
    height: 100%;
}

.profile-img .file {
    position: relative;
    overflow: hidden;
    margin-top: -20%;
    width: 70%;
    border: none;
    border-radius: 0;
    font-size: 15px;
    background: #212529b8;
}

.profile-img .file input {
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
}

.profile-head h5 {
    color: #333;
}

.profile-head h6 {
    color: #0062cc;
}

.profile-edit-btn {
    border: none;
    border-radius: 1.5rem;
    width: 70%;
    padding: 2%;
    font-weight: 600;
    color: #6c757d;
    cursor: pointer;
}


.proile-rating {
    font-size: 12px;
    color: #818182;
    margin-top: 5%;
}

.proile-rating span {
    color: #495057;
    font-size: 15px;
    font-weight: 600;
}

.profile-head .nav-tabs {
    margin-bottom: 5%;
}

.profile-head .nav-tabs .nav-link {
    font-weight: 600;
    border: none;
}

.profile-head .nav-tabs .nav-link.active {
    border: none;
    border-bottom: 2px solid #0062cc;
}

.profile-work {
    padding: 14%;
    margin-top: -15%;
}

.profile-work p {
    font-size: 12px;
    color: #818182;
    font-weight: 600;
    margin-top: 10%;
}

.profile-work a {
    text-decoration: none;
    color: #495057;
    font-weight: 600;
    font-size: 14px;
}

.profile-work ul {
    list-style: none;
}

.profile-tab label {
    font-weight: 600;
}

.cidade {
    position: absolute;
    margin-bottom: 90px;
    margin-left: 160px;
}

.bairro {
    position: absolute;
    padding-left: 16px;
}

.data {
    position: absolute;
    padding-top: 10px;
}

.nasc {
    position: absolute;
    padding-top: 40px;
}


.escolar {
    position: absolute;
    padding-top: 90px;
    padding-left: 34px;
}

.profileLabel {
    float: left;
    display: block;
    margin-left: 90px;
}

.endere {
    margin-left: 16px;
}

.formacoes {
    position: absolute;
    padding-bottom: 40px;
}

.email {
    padding-left: 10px;
}

.nome {
    padding-left: 10px;
}

#btnEditar {
    padding-top: 130px;
    margin-bottom: -100px
}

.curso {
    position: absolute;
    padding-top: 15px;
}

.profile-tab p {
    font-weight: 600;
    color: #0062cc;
}

.invisibleInput {
    display: none;
}

#imgPhoto {
    margin-top: 10%;
    margin-left: 30px;
    width: 200px;
    height: 200px;
    padding: 10px;
    background-color: #eee;
    border: 5px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    transition: background .3s;
}

#imgPhoto:hover {
    background-color: rgb(180, 180, 180);
    border: 5px solid #111;
}

.form-submit-button {
    background: #B9DFFF;
    color: #fff;
    border: 1px solid #eee;
    border-radius: 20px;
    box-shadow: 5px 5px 5px #eee;
    text-shadow: none;
}

.fieldname {
    margin-top: 10px;
    width: 250px;
    word-wrap: break-word;
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
    content: ' ';
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

.sigla {
    display: absolute;
    margin-left: 330px;
    margin-top: 0px;
}

.estado {
    position: absolute;
    margin-top: -43px;
    margin-left: 320px;
}
</style>
