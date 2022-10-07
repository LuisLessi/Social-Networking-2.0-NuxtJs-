<template>
<div>
<form id="perfilA">
        <div class="nav-wrapper">
                <div class="grad-bar">
                        <div class="nav-wrapper">
                                <div class="grad-bar"></div>
                                <nav class="navbar">

                                  <div class="menu-toggle" id="mobile-menu">
                                    <span class="bar"></span>
                                    <span class="bar"></span>
                                    <span class="bar"></span>
                                  </div>
                                  <ul class="nav no-search">

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
                                              <input class="invisibleInput" type="file" id="fImage" name="fImage"
                                                        accept="image/*">
                                                <div class="row mt-2">
                                                        <div>
                                                                <label class="profileLabel"></label><input type="text"
                                                                        name="nome"
                                                                        class="form-control"
                                                                        placeholder="Nome" required>
                                                        </div>

                                                        <div><label class="profileLabel"></label><input type="text"
                                                                        name="email" class="form-control"
                                                                        placeholder="Seu Email" required>
                                                        </div>
                                                </div>
                                                <div
                                                        class="d-flex justify-content-between align-items-center experience">
                                                        <span>
                                                                <h3>Experiências</h3>
                                                        </span>
                                                </div><br>
                                                <fieldset id="fs">
                                                        <section>

                                                                <form action="#" method="post">
                                                                        <div> <input type="text" id="newitem"
                                                                                        placeholder=" Empresa / cargo - anos" />
                                                                                <input type="submit" value="Add" />

                                                                        </div>
                                                                </form>
                                                                <ul id="todolist"></ul>
                                                        </section>
                                                </fieldset>

                                                <form id="myForm">



                                                </form>
                                        </div>

                                        <div class="col-md-5 border-right">
                                                <div class="p-3 py-5">
                                                        <div
                                                                class="d-flex justify-content-between align-items-center mb-3">
                                                                <h4 class="text-right">Configurações do Perfil</h4>
                                                        </div>


                                                        <div class="row mt-3">
                                                                <div class="col-md-12"><label
                                                                                class="labels">Número de
                                                                                celular</label><input type="tel"
                                                                                name="celular" id="celular"
                                                                                placeholder="Digite seu número de celular"
                                                                                class="form-control" maxlength="15" required>
                                                                </div>
                                                                <div class="col-md-12"><label class="labels">Número de
                                                                                telefone</label><input type="text"
                                                                                name="tel" id="phone"
                                                                                placeholder="Digite seu número de telefone"
                                                                                class="form-control" onkeypress="mask(this, mphone);
                                                                " onblur="mask(this, mphone);" />
                                                                </div>
                                                                <div class="col-md-12"><label
                                                                                class="labels">Linkedin</label><input
                                                                                type="text" name="linkedin"
                                                                                class="form-control"
                                                                                placeholder="Digite o nome de sua rua"
                                                                                value="">
                                                                </div>
                                                                <div class="col-md-12"><label
                                                                                class="labels">Sites</label><input
                                                                                type="text" name="sites"
                                                                                class="form-control"
                                                                                placeholder="Digite o nome de sua rua"
                                                                                value="">
                                                                </div>
                                                                <div class="col-md-12"><label
                                                                                class="labels">Bairro</label><input
                                                                                type="text" name="bairro"
                                                                                class="form-control"
                                                                                placeholder="Digite o numero de sua casa"
                                                                                value="">
                                                                </div>
                                                                <div class="col-md-12"><label class="labels">Data de
                                                                                nascimento</label><input name="data"
                                                                                class="form-control" type="date"
                                                                                placeholder="Ex.: dd/mm/aaaa"
                                                                                data-mask="00/00/0000" maxlength="8"
                                                                                autocomplete="off" required>
                                                                </div>


                                                                <div class="col-md-12"><label
                                                                                class="labels">Escolaridade</label>
                                                                        <select type="text" class="form-control"
                                                                                value="">
                                                                                <option>Ensino
                                                                                        Fundamental Incopleto </option>
                                                                                <option>Ensino Fundamental Completo
                                                                                </option>
                                                                                <option>Ensino Médio Completo </option>
                                                                                <option>Ensino Médio Incompleto
                                                                                </option>
                                                                                <option>Superior Incopleto </option>
                                                                                <option>Superior Completo </option>
                                                                                <option>Pós Graduação</option>
                                                                        </select>
                                                                </div>

                                                        </div>
                                                        <div class="row mt-3">
                                                                <div class="col-md-6"><label
                                                                                class="labels">Cidade</label><input
                                                                                name="cidade" type="text"
                                                                                class="form-control"
                                                                                placeholder="Digite sua cidade"
                                                                                value=""></div>
                                                                <div class="col-md-6"><label
                                                                                class="labels">Estado</label><select
                                                                                type="text"
                                                                                v-model="estado" class="form-control"
                                                                                value=""
                                                                                placeholder="Digite seu estado">
                                                                                <option>AC</option>
                                                                                <option>AL</option>
                                                                                <option>AP</option>
                                                                                <option>AM</option>
                                                                                <option>BA</option>
                                                                                <option>CE</option>
                                                                                <option>DF</option>
                                                                                <option>ES</option>
                                                                                <option>GO</option>
                                                                                <option>MA</option>
                                                                                <option>MT</option>
                                                                                <option>MS</option>
                                                                                <option>MG</option>
                                                                                <option>PR</option>
                                                                                <option>PB</option>
                                                                                <option>PE</option>
                                                                                <option>PI</option>
                                                                                <option>RN</option>
                                                                                <option>RS</option>
                                                                                <option>RJ</option>
                                                                                <option>RO</option>
                                                                                <option>RR</option>
                                                                                <option>SC</option>
                                                                                <option>SE</option>
                                                                                <option>SP</option>
                                                                                <option>TO</option>
                                                                        </select></div>
                                                        </div>
                                                        <a href="./perfilCriadoA.html"><div id="salvarPerfilA" class="mt-5 text-center"><button
                                                                        class="btn btn-primary profile-button"
                                                                        type="button">Salvar Perfil</button></div></a>
                                                </div>
                                        </div>

                                        <div class="col-md-4">
                                                <div class="p-3 py-5">
                                                        <div
                                                                class="d-flex justify-content-between align-items-center experience">
                                                                <span>
                                                                        <h2>Formações/cursos</h2>
                                                                </span>

                                                        </div><br>

                                                        <button type="button" value="Add a field" class="add" id="add"
                                                                onclick="addTextInput()">Add</button>
                                              <form id="myForm">
                                                                <fieldset id="buildyourform"
                                                                        placeholder="Instituição - data de conclusão">
                                                                </fieldset>
                                                              </form>
                                                </div>

                                        </div>

                                </div>

                        </div>

        </div>

        </div>
</form>
<div ><a href="/home"><img class="logo" src="../assets/SocialNetSobre_logo.png" alt="Company Logo" ></a></div>
</div>
</template>

<script>
export default {
  head: {
    script: [
    {src:"https://kit.fontawesome.com/01b3655c48.js"},
    {src:"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"},
    {src:"https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js"},

    ],
    link:[
      {rel:"stylesheet", id:"bootstrap-css", src:"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"},
      {href:"https://cdn.jsdelivr.net/npm/pace-js@latest/pace-theme-default.min.css"},
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
    margin-top: -13px;
    border-radius: 50%;
    background: #ed074c;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

}
.no-search{
  margin-top: 10px;
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
    margin-bottom: 20px;
    padding-bottom: -30px;
    margin-left: 10px;

}

.home {
    margin-left: 30px;

}

.sobre {
    padding-left: 20px;
}

.logout {
    margin-right: 10px;
    border-radius: 90px;
    background-color: #eb1616;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 20px;
    padding-bottom: -30px;
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
  margin-top: 10px;
  padding-left: 20px;
  max-height: 40px;

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

.profileLabel {
    float: left;
    display: block;
    margin-left: 90px;
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
</style>
