<template>
  <div class="nav-wrapper">
      <div class="grad-bar">
              <div class="nav-wrapper">
                      <div class="grad-bar"></div>
                      <nav class="navbar">
                        <NuxtLink to="/home"><img src="../assets/SocialNet_logo.svg.png" alt="Company Logo" class="logo" title="Home"></NuxtLink>
                        <div class="menu-toggle" id="mobile-menu">
                          <span class="bar"></span>
                          <span class="bar"></span>
                          <span class="bar"></span>
                        </div>
                        <ul class="nav no-search">
                          <div class="home">
                      <li class="nav-item"><NuxtLink to="/home"><a>Home</a></NuxtLink></li>
                          </div>
                      <div class="perfil">
                          <li class="nav-item"><a href="perfilEstudante.html">Perfil</a></li>
                      </div>
                      <div class="search-box">
                        <input class="search-txt" type="text" name="" placeholder="Procurar">
                        <a class="search-btn" href="#">
                          <i class="fas fa-search"></i>


                          </a>
                        </div>
                      <div class="sobre">
                              <li class="nav-item"><a href="#">Sobre</a></li>
                             </div>
                      <div class="logout">
                      <li class="nav-item"><a href="index.html">Logout</a></li>
              </div>
                        </ul>
                      </nav>
      </div>
      <h1 class="title">SOBRE NOSSA EQUIPE
      </h1>
      <h3 class="text">Estudantes do curso de ADS e entusiastas da área de<br> desenvolvimento. Projeto criado como trabalho da <br>matéria "Laboratório de engenharia de software" da FATEC<br> TAQUARITINGA. Visando uma rede social que une o cenário<br> profissional com o estudantil, auxiliando alunos a<br> ingressar no seu primeiro emprego, e empresas a conseguir<br> contato mais fácil com esses estudantes. Para mais<br> informações favor entrar contato:</h3>
      <img src="../assets/zap.png" alt="contato zap" class="zap">
      <h5 class="numZap"><br>(16) 99792-9960</h5>
      <h5 class="numZap2"><br>(16) 99100-7359</h5>

      <h5 class="endEmail"><br>luisadsfatec@Hotmail.com</h5>
   <img src="../assets/fatec.png" alt="fatec" class="fatec">
          <img src="../assets/email.png" alt="email" class="email">
    <div>
      <p class="luis">Desenvolvedor Front-End <br>utilizando vueJS com <br>base em UX/UI.<br>------------------------------</p>
      <div class="photo"><a href="https://github.com/LuisLessi" target="_blank"><img id="profile" src="../assets/Luis.jpg" title="Luís Felipe"></a></div>
    </div>
    <div>
    <p class="grupo">Desenvolvedor Back-End<br>responsável pela arquitetura<br> e padrões de projeto.<br>------------------------------</p>
      <div class="photo2"><a href="https://github.com/Ezequiel-Lima" target="_blank"><img id="profile" src="../assets/quiel.jpg" title="Ezequiel"></a></div>
    </div>
    <div>
    <p class="grupo">Desenvolvedor Front-End <br>utilizando vueJS com <br>base em UX/UI.<br>------------------------------</p>
      <div class="photo3"><a href="#footer"><img id="profile" src="../assets/Eraldo.jpg" title="Eraldo"></a></div>
    </div>
    <div>
    <p class="grupo">Desenvolvedor Front-End<br> auxiliando com a técnica<br> pair programming<br>------------------------------</p>
      <div class="photo3"><a href="https://github.com/iCondition" target="_blank"><img id="profile" src="../assets/Gabriel.jpg"  title="Gabriel" ></a></div>
    </div>
    <div>
    <p class="grupo">Desenvolvedor Front-End <br>utilizando vueJS com <br>base em UX/UI.<br>------------------------------</p>
      <div class="photo2"><a href="https://www.linkedin.com/in/ruan-corsi-129246238" target="_blank"><img id="profile" src="../assets/ruan.jpg" title="Ruan"></a></div>
    </div>
    </div>

</div>
</template>

<script>
export default {

}
</script>

<style>
body {

    background: -webkit-linear-gradient(left, #3931af, #00c6ff);
}

.title {
    position: absolute;
    margin-left: 400px;
    margin-top: 40px;
    color: #000000;
    font-family: 'Press Start 2P', cursive;
}

.text {
    position: absolute;
    margin-left: 400px;
    margin-top: 110px;
    color: #000000;
    font-family: 'Cinzel', serif;
}

.zap {
    position: absolute;
    max-height: 55px;
    padding-top: 350px;
    padding-left: 395px;
}

.fatec {
    position: absolute;
    max-height: 100px;
    padding-top: 435px;
    padding-left: 1040px;
}

.email {
    position: absolute;
    margin-top: 500px;
    margin-left: 395px;
    max-height: 40px;

}

.luis {
    position: absolute;
    margin-left: 70px;
    margin-top: -45px;
    font-family: 'Fredoka One', cursive;
    font-size: 15px;
    color: #FCDE38;
}

.grupo {
    position: absolute;
    margin-left: 70px;
    margin-top: -5px;
    font-family: 'Fredoka One', cursive;
    font-size: 15px;
    color: #FCDE38;
}


.numZap {
    position: absolute;
    max-height: 55px;
    padding-top: 315px;
    padding-left: 470px;
    position: absolute;

    color: #000000;
    font-family: 'Press Start 2P', cursive;
}

.numZap2 {
    position: absolute;
    max-height: 55px;
    padding-top: 355px;
    padding-left: 470px;
    position: absolute;

    color: #000000;
    font-family: 'Press Start 2P', cursive;
}

.endEmail {
    position: absolute;
    max-height: 55px;
    padding-top: 480px;
    padding-left: 465px;
    position: absolute;

    color: #000000;
    font-family: 'Press Start 2P', cursive;
}

.nav-wrapper {
    width: 1370;
    margin-left: -4px;
    margin-top: -30px;
    position: -webkit-sticky;
    /* Safari */
    position: sticky;
    top: 0;
    background-color: #fff;
}

.grad-bar {
    width: 100%;
    height: 5px;
    background: #23A6D5;
    background-size: 400% 400%;
    -webkit-animation: gradbar 5s ease infinite;
    -moz-animation: gradbar 5s ease infinite;
    animation: gradbar 5s ease infinite;
}

.navbar {
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
    height: 50px;
    overflow: hidden;
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
    margin-bottom: 10px;
    font-style: bold;

}

.menu-toggle .bar {
    width: 25px;
    height: 3px;
    background-color: #3f3f3f;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.menu-toggle {
    justify-self: end;
    margin-right: 25px;
    display: none;
}

.menu-toggle:hover {
    cursor: pointer;
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

.search {
    transform: translate(-35%);
    -webkit-transform: translate(-35%);
    transition: transform 0.7s ease-in-out;
    color: #3498db;
}

.no-search {
    transform: translate(0);
    transition: transform 0.7s ease-in-out;
}

.search-input {
    position: absolute;
    top: -4px;
    right: -125px;
    opacity: 0;
    z-index: -1;
    transition: opacity 0.6s ease;
}

.search-active {
    opacity: 1;
    z-index: 0;
}

.nav-item a {
    color: #000;
    font-size: 17px;
    font-weight: 400;
    transition: color 0.3s ease-out;
    text-decoration: none;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}

.nav-item a:hover {
    color: #3498db;
}

.perfil {
    margin-left: 18px;
    margin-top: -8px;


}

.logout {
    margin-left: 290px;
    position: absolute;
    border-radius: 90px;
    padding-right: 10px;
    padding-left: 10px;
    padding-bottom: 2px;
    padding-top: 2px;
    margin-top: -10px;
    background-color: #eb1616;
    border-right: 80px;
    margin-left: 880px;

}


.sobre {
    background-color: #00a2e8;
    border-radius: 4px;
    padding-right: 15px;
    padding-bottom: 1px;
    padding-top: 3px;
    margin-top: -10px;
    position: absolute;
    margin-left: 800px;
    padding-left: 13px;


}

.home {
    padding-top: 4px;
    margin-top: -13px;
    padding-left: 640px;

}



.photo3 {
    display: absolute;
    min-height: 0px;

}

.photo {
    grid-area: photo;
    justify-self: center;
    margin-top: 10%;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: absolute;
    justify-content: center;
    align-items: flex-end;
    width: 48%;
    height: 58%;
    padding-top: 20px;
}


.photo2 {
    grid-area: photo;
    margin-top: 10%;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: absolute;
    align-items: flex-end;
    margin-top: 10px;
    width: auto;
    max-width: 650px;
}

.photo3 {
    grid-area: photo;
    margin-top: 10%;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: absolute;
    align-items: flex-end;
    margin-top: 10px;
    width: auto;
    max-width: 640px;
}

body {
    margin: 0%;
    padding: 0%;
    background-color: white;
}

.search-box {
    position: absolute;
    left: 34%;
    top: -30%;
    transform: translate(-50%, -50%);
    background-color: rgb(0, 0, 0);
    height: 15px;
    border-radius: 40px;
    padding: 10px;

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
    margin-top: -6;
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
    width: 400px;
    margin-top: -7px;

}


#profile {
    max-width: 10%;
    border-radius: 20% 0 20% 0;
    -webkit-transition: 0.8s ease-out;
    transition: 0.8s ease-out;
    filter: grayscale(100%) brightness(190%);
    -webkit-box-shadow: -1px 1px 8px -2px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: -1px 1px 8px -2px rgba(0, 0, 0, 0.3);
    box-shadow: -1px 1px 8px -2px rgba(0, 0, 0, 0.3);
}

#profile:hover {
    filter: none;
    -webkit-box-shadow: -5px 5px 8px -2px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: -5px 5px 8px -2px rgba(0, 0, 0, 0.3);
    box-shadow: -5px 5px 8px -2px rgba(0, 0, 0, 0.3);
}

/** TELA DE LOADING
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
