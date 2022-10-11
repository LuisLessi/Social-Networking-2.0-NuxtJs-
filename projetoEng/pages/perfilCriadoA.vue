<template>
  <div id="app">
<form id="perfilA">
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
         <li class="nav-item"><a href="/perfilCriadoA">Perfil</a></li>
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
                    <li class="nav-item"><a href="/login">Logout</a></li>
                   </div>

                  </ul>

                </nav>

                </div>

<div class="container rounded bg-white mt-5 mb-5">
<div class="row">
<div class="col-md-3 border-right">
                                            <div class="imageContainer">
                                                    <div class="imageContainer">
                                                            <img src="../assets/camera.png" alt="Selecione uma imagem"
                                                                    id="imgPhoto">
                                                    </div>
                                            </div>
                                          <input v-show = "false" class="invisibleInput" type="file" id="fImage" name="fImage"
                                                    accept="image/*">
                                            <div class="row mt-2">
                                                    <div>
                                                            <p class="nome" v-for="al of clientes" :key="al.id">{{al.nome}}</p>
                                                    </div>

                                                    <div><label class="profileLabel"></label><p class="email">
                                                        luisctiunesp@hotmail.com
                                                    </p>
                                                    </div>
                                            </div>
                                            <div
                                                    class="d-flex justify-content-between align-items-center experience">
                                                    <span>
                                                            <h3>Experiências</h3>
                                                    </span>
                                            </div><br>


                                            <form id="myForm">



                                            </form>
                                    </div>

                                    <div id="meio" class="col-md-5 border-right">
                                            <div class="p-3 py-5">
                                                    <div
                                                            class="d-flex justify-content-between align-items-center mb-3">
                                                            <h4 class="text-right">Informações do usuário</h4>
                                                    </div>


                                                    <div class="row mt-3">


                                                        <div class="cinza"><label
                                                                class="labels">Número de
                                                                celular</label><p class="labels">(16) 99792-9960</p>

                                                            </div>
                                                            <div class="col-md-12"><label>Número de
                                                                            telefone</label><p>(16) 3204-1519</p>
                                                            </div>
                                                            <div class="cinza"><label
                                                                class="labels">Linkedin<p ><a href="https://www.linkedin.com/in/lu%C3%ADs-felipe-lessi-silva-9496aa1a1/" target="_blank">https://www.linkedin.com/in/lu%C3%ADs-felipe-lessi-silva-9496aa1a1/</a></p>
                                                        </label>
                                                            </div>
                                                            <div class="col-md-12"><label
                                                                            >Sites</label><p><a href="https://github.com/LuisLessi">https://github.com/LuisLessi</a></p>
                                                            </div>
                                                            <div class="cinza">
                                                            <label
                                                                            class="labels">Endereço</label><p class="labels">Jaboticabal</p><p class="bairro">Residencial</p><p class="sigla">SP</p>

                                                        </div>

                                                            <div class="col-md-12"><label class="data">Data de
                                                                            nascimento</label><p class="nasc">18/06/2001</p>

                                                                        </div>


                                                    </div>
                                            </div>
                                            <div class="cinza2"><label class="labels">Escolaridade</label><p class="labels">Superior completo</p>
                                            </div>
                                        <a href="./perfilEstudante.html"><div id="btnEditaA" class="mt-5 text-center"><button class="btn btn-primary profile-button"
                                                type="button">Editar Perfil</button>
                                    </div> </a>
                    <div class="col-md-12">

                                    </div>
                            </div>
                            <div class="col-md-4">
                                <div class="p-3 py-5">
                                    <div class="d-flex justify-content-between align-items-center experience">
                                        <span>
                                            <h2>Formações/cursos</h2>
                                        </span>

                                    </div><br>


                                    <form id="myForm">
                                        <fieldset id="buildyourform" placeholder="">
                                        </fieldset>
                                    </form>
                                </div>

                            </div>
                        </div>



                    </div>
</form>
<a href="/home"><img src="../assets/SocialNetSobre_logo.png" class= "logo" alt="Company Logo"></a>
                </div>

    </template>

<script>
import Aluno from '../services/alunos';

export default {
  data(){
    return {
      clientes: []
    }
  },
  mounted(){
    Aluno.listar().then(resposta =>{
      console.log(resposta.data)
      this.clientes.push(resposta.data)
    })
  },
  head: {
    script: [
    {src:"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"},
    {src:"https://kit.fontawesome.com/01b3655c48.js", crossorigin:"anonymous"},
    {src:"https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js"},
    ],
    link:[
      {src:"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"},
      {src:"https://use.fontawesome.com/releases/v5.7.1/css/all.css",integrity:"sha384-fnmOCqbT1WI1j8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr", crossorigin:"anonymous"},
      {href:"https://cdn.jsdelivr.net/npm/pace-js@latest/pace-theme-default.min.css", rel:"stylesheet"}

    ]
  }
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
    margin-left: 50px;

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

#meio {
    padding-bottom: 40px;
}

.search-box:hover>.search-txt {

    width: 240px;
    padding: 0 5px;

}

.search-box:hover>.search-btn {

    background: none;
}


.search-btn {

    color: white;
    float: right;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #ed074c;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    margin-top: -13px;
    margin-left: 10px
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
    min-width: 474px;
    margin-left: -16px;
    background-color: #eeeeee;
}

.cinza2 {
    min-width: 474px;
    margin-left: -15px;
    margin-top: 30px;
    background-color: #eeeeee;
    border-top: 90px;
    padding-bottom: 5px;
}

.col-md-12 {
    border-bottom: 900px;
}

.labels {
    word-break: break-word;
    padding-left: 30px;
}

.bairro {
    position: absolute;
    padding-left: 180px;
    margin-top: -40px;
}


.sigla {
    position: absolute;
    padding-left: 370px;
    margin-top: -40px;
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
  max-height: 37px;
  margin-top: -900px;
  max-width: 380px;
  margin-left: 40px;
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



.estado {
    position: absolute;
    margin-top: -43px;
    margin-left: 320px;
}
</style>
