<template>
  <div>
<div class="page-wrapper">
    <div class="nav-wrapper">
     <div class="grad-bar"></div>
     <nav class="navbar">
      <NuxtLink to="/home"><img src="../assets/SocialNet_logo.svg.png" alt="Company Logo"></NuxtLink>
       <div class="menu-toggle" id="mobile-menu">
         <span class="bar"></span>
         <span class="bar"></span>
         <span class="bar"></span>
       </div>
       <ul>
        <div class="home">
         <li class="nav-item"><a href="feed.html">Home</a></li>
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
          <li class="nav-item"><NuxtLink to="/sobre">Sobre</NuxtLink></li>
         </div>
         <div class="logout">
         <li class="nav-item"><a href="index.html">Logout</a></li>
        </div>

       </ul>

     </nav>
     </div>
          <section class="stars-container">
        <div class="container">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
          <div class="row"></div>
      </div>
          </section>
    <div class="anim-container" id="anim_container">
    <section id="back">
       <h1>Seu Networking Profissional Começa Agora</h1>
       <br>

       <h2>É estudante ? Navegue e encontre empresas no qual estão atrás de profissionais como você</h2>
       <br>
       <h2>É uma empresa ? Procure por profissionais que farão parte de sua equipe</h2>

     </section>
    </div>
   </div>
    <div class="center">
      <a href="#anchor"></a>
      <button class="btn">
        <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        <span>Feed <br>⇩</span>
      </button>
    </div>

  <!--Abas-->
  <div id="anchor">
</div>

<main class="feedFundo">
  <section class="carousel" >
      <ul class="carousel-items">
        <li class="carousel-item1">
          <div class="card">
              <h2 class="card-title"></h2>
              <img src="" />
              <div class="card-content">
                  <p></p>
                  <a href="" class="button"></a>
              </div>
          </div>
      </li>
      <li class="carousel-item">
        <div class="cardPerfil">
          <img src="../assets/Luis.jpg" class="photo-perfil" />
        </div>
            <h2 class="card-title">Luís Felipe Lessi</h2>
            <div class="comments">
              <div class="comment-input"> <input placeholder="Divulgue sobre algo..." type="text" class="form-control">
              </div>

              <div class="imageContainer">
                <div class="imageContainer">
                    <img src="../assets/imgLoad.png" class="imgLoad" alt="Selecione uma imagem" id="imgPhoto">
                </div>
              </div>
                        <div class="card-content">
              <div class="wrap">
                <button class="pub">Publicar</button>
              </div>
            </div>
        </div>

    </li>
    <li class="carousel-item">
      <div class="card">
        <img src="../assets/quiel.jpg" class="photo-perfil" />

          <h2 class="card-title">Ezequiel Lima          </h2>
          <div class="post">

            <img class= "photoPost" src= "../assets/postagem1.png" alt="photo">
          <p class="textoPost">Olá pessoal, estou precisando de ajuda em uma parte do meu código do trabalho, estou utilizando da linguagem sql e tenho o projeto em meu github, quem quiser dar uma olhada: https://github.com/Ezequiel-Lima </p>
          </div>
      </div>

  </li>

  <li class="carousel-item">
    <div class="card">
      <img src="../assets/google.png" class="photo-perfil" />
    </div>
        <h2 class="card-title">Google</h2>
        <div class="post">
        <p class="textoPost">Estamos com vagas em aberto para os seguintes setores: <br>°Engenheiro de software <br>°Analista de sistemas <br>°Desenvolvedor KOTLIN pleno<br>Acesse o perfil para mais informações</p>
    </div>

</li>
<li class="carousel-item">
  <div class="card">
    <img src="../assets/Eraldo.jpg" class="photo-perfil" />

      <h2 class="card-title">Eraldo Neves</h2>
      <div class="post">
      <p class="textoPost">Alguém com vaga de suporte helpdesk ?</p>
      </div>
  </div>

</li>
<li class="carousel-item">
  <div class="card">
    <img src="../assets/Gabriel.jpg" class="photo-perfil" />

      <h2 class="card-title">Gabriel Pereira </h2>
      <div class="post">

        <img class= "photoPost" src= "../assets/meme.jpg" alt="photo">
      <p class="textoPost">Bem isso 🤣🤣🤣🤣</p>
      </div>
  </div>

</li>
<li class="carousel-item">
  <div class="card">
    <img src="../assets/centroPaula.png" class="photo-perfil" />

      <h2 class="card-title">Centro Paulo Souza</h2>
      <div class="post">
        <img class= "photoPost" src= "../assets/fatecPub.jpg" alt="photo">
      <p class="textoPost">👨‍🏫 Estão abertas as inscrições do concurso público para professores de prazo indeterminado.

        No total, serão contratados 993 docentes de Ensino Médio e Técnico.

        ➡️ No momento, há mais de 400 editais disponíveis. Os próximos serão liberados em lotes e podem ser conferidos pelo site: https://lnkd.in/d-usxJ8N</p>
      </div>
  </div>

</li>
      </ul>
</section>
</main>
</div>

</template>

<script>
export default {

}
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Lato', 'Arial', sans-serif;
}

/* HEADINGS */
html {
	scroll-behavior: smooth;
}

.home {
	background-color: #00a2e8;
	border-radius: 4px;
	padding-left: 8px;
	padding-bottom: 3px;
	padding-top: 3px;
	margin-top: -5px;
}

.perfil {
	margin-left: 15px;
}

.logout {
	margin-left: 190px;
	position: absolute;
	border-radius: 90px;
	padding-right: 10px;
	padding-left: 10px;
	padding-bottom: 3px;
	padding-top: 4px;
	margin-top: -5px;
	background-color: #eb1616;

}


.sobre {
	margin-left: 15px;
}

h1,
h2 {
	color: #000;
	text-align: center;
	line-height: 1.4;
}

h1 {
	font-size: 2.2rem;
}

h2 {
	color: #000;
	font-size: 1.3rem;
	text-align: center;
	line-height: 1.4;
	margin-bottom: 10px;
}

body {
	margin: 0%;
	padding: 0%;
	background-color: white;
}

.search-box {
	position: absolute;
	top: 55%;
	left: 675px;
	transform: translate(-50%, -50%);
	background-color: black;
	height: 35px;
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
	margin-top: -5px;
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
	margin-top: -7px;

}



/* BASIC SETUP */

.page-wrapper {
	width: 100%;
	height: auto;
}

.nav-wrapper {
	width: 100%;
	position: -webkit-sticky;
	/* Safari */
	position: sticky;
	top: 0;
	background-color: #fff;
}

.grad-bar {
	width: 100%;
	height: 5px;
	background: linear-gradient(95deg, #00ff88, #E73C7E, #23A6D5, #23D5AB);
	background-size: 400% 400%;
	-webkit-animation: gradbar 5s ease infinite;
	-moz-animation: gradbar 5s ease infinite;
	animation: gradbar 5s ease infinite;
}

/* NAVIGATION */

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

}

.nav-item a {
	color: rgb(0, 0, 0);
	font-size: 15px;
	font-weight: 400;
	text-decoration: none;
	transition: color 0.3s ease-out;
}

.nav-item a:hover {
	color: #3498db;
}

/* SECTIONS */

.headline {
	width: 100%;
	height: 50vh;
	min-height: 350px;
	background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1435224668334-0f82ec57b605?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80');
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: center;

}

.anim-container {
	margin-bottom: 900px;
}

section {
	width: 100%;
	height: 562px;
	background: linear-gradient(95deg, #00ff88, #E73C7E, #23A6D5, #23D5AB);
	background-size: 400% 400%;
	-webkit-animation: gradbar 5s ease infinite;
	-moz-animation: gradbar 5s ease infinite;
	animation: gradbar 5s ease infinite;
}

@keyframes animate {
	0% {
		filter: hue-rotate(0deg);
	}

	50% {
		filter: hue-rotate(360deg);
	}

	100% {
		filter: hue-rotate(0deg);
	}
}

.features {
	width: 100%;
	height: auto;
	background-color: #f1f1f1;
	display: flex;
	padding: 50px 20px;
	justify-content: space-around;
}

.feature-container {
	flex-basis: 30%;
	margin-top: 10px;
}

.feature-container p {
	color: #000;
	text-align: center;
	line-height: 1.4;
	margin-bottom: 15px;
}

.feature-container img {
	width: 100%;
	margin-bottom: 15px;
}

/* SEARCH FUNCTION */

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

.invisibleInput {
	position: absolute;
	margin-top: -90px;
}

.search-active {
	opacity: 1;
	z-index: 0;
}

input {
	border: 0;
	border-left: 1px solid #ccc;
	border-radius: 0;
	/* FOR SAFARI */
	outline: 0;
	padding: 5px;
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

/* KEYFRAME ANIMATIONS */

@-webkit-keyframes gradbar {
	0% {
		background-position: 0% 50%
	}

	50% {
		background-position: 100% 50%
	}

	100% {
		background-position: 0% 50%
	}
}

@-moz-keyframes gradbar {
	0% {
		background-position: 0% 50%
	}

	50% {
		background-position: 100% 50%
	}

	100% {
		background-position: 0% 50%
	}
}

@keyframes gradbar {
	0% {
		background-position: 0% 50%
	}

	50% {
		background-position: 100% 50%
	}

	100% {
		background-position: 0% 50%
	}
}

/* Media Queries */

/* Mobile Devices - Phones/Tablets */

@media only screen and (max-width: 720px) {
	.features {
		flex-direction: column;
		padding: 50px;
	}

	/* MOBILE HEADINGS */

	h1 {
		font-size: 1.9rem;
		color: #000;
	}

	h2 {
		font-size: 1rem;
		color: #000;

	}

	p {
		font-size: 0.8rem;
	}

	/* MOBILE NAVIGATION */

	.navbar ul {
		display: flex;
		flex-direction: column;
		position: fixed;
		justify-content: start;
		top: 55px;
		background-color: #fff;
		width: 100%;
		height: calc(100vh - 55px);
		transform: translate(-101%);
		text-align: center;
		overflow: hidden;
	}

	.navbar li {
		padding: 15px;
	}

	.navbar li:first-child {
		margin-top: 50px;
	}

	.navbar li a {
		font-size: 1rem;
	}

	.menu-toggle,
	.bar {
		display: block;
		cursor: pointer;
	}

	.mobile-nav {
		transform: translate(0%) !important;
	}

	/* SECTIONS */

	.headline {
		height: 20vh;
	}

	.feature-container p {
		margin-bottom: 25px;
	}

	.feature-container {
		margin-top: 20px;
	}

	.feature-container:nth-child(2) {
		order: -1;
	}

	/* SEARCH DISABLED ON MOBILE */

	#search-icon {
		background-image: -webkit-linear-gradient();
	}

	.search-input {
		display: none;
	}

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

/** Abas CSS */
.card {
	border: 2px solid #bac6d3;
	border-radius: 8px;
	padding: 1rem;
}

.cardPerfil {
	border: 2px solid #bac6d3;
	border-radius: 8px;
	padding: 1rem;
}


.btn1:hover::before {
	width: 100%;
}

.github {
	max-width: 412px;
}


.photoPost {
	cursor: pointer;
	max-width: 500px;
	max-height: 200px;
	margin-top: 20px;
	margin-left: 20px;
}

.photoPost1 {
	cursor: pointer;
	max-height: 200px;
	margin-top: 20px;
	margin-left: 20;
}



.carousel-items {
	display: flex;
	overflow-x: scroll;
	padding: 1rem 0;
	scroll-snap-type: mandatory;
}

.carousel-item1 {
	display: none;
}

.carousel-item {
	flex: 1 0 250px;
	margin-left: 1rem;
	scroll-snap-align: start;
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


/********************************
* Breakpoints
*********************************/
@media screen and (min-width: 576px) {
	.carousel-item {
		flex-basis: 300px;
	}
}

@media screen and (min-width: 992px) {

	body,
	button,
	input,
	select,
	optgroup,
	textarea {
		font-size: 1.125rem;
	}

	h1 {
		font-size: 2.75rem;
	}

	.carousel-item {
		flex-basis: 325px;
	}
}

@media screen and (min-width: 1280px) {


	.carousel-item {
		flex-basis: 450px;
	}
}

@media screen and (min-width: 1600px) {

	body,
	button,
	input,
	select,
	optgroup,
	textarea {
		font-size: 1.25rem;
	}
}

@import url('https://fonts.googleapis.com/css?family=Lato:100&display=swap');



.center {
	width: 180px;
	height: 60px;
	position: absolute;
	margin-top: -280px;
	margin-left: 585px;
}

.btn {
	width: 180px;
	height: 60px;
	cursor: pointer;
	background: transparent;
	border: 1px solid #ffffff;
	outline: none;
	transition: 1s ease-in-out;
	position: center;

}


svg {
	position: absolute;
	left: 0;
	top: 0;
	fill: none;
	stroke: rgb(0, 0, 0);
	stroke-dasharray: 150 480;
	stroke-dashoffset: 150;
	transition: 1s ease-in-out;
}

.btn:hover {
	transition: 1s ease-in-out;
	background: #000000;
}

.btn:hover svg {
	stroke-dashoffset: -480;
}

.btn span {
	color: #ffffff;
	font-size: 18px;
	font-weight: 100;
}

/** caixa de txt **/
.form-control {
	border-radius: 26px;
	background-color: rgb(226, 213, 213);
	padding-left: 10px;
}

.comment-input {
	position: relative;
	padding-top: 40px;
}

#imgPhoto {
	margin-top: 10%;
	margin-left: 30px;
	width: 50px;
	height: 50px;
	padding: 10px;
	background-color: rgb(255, 255, 255);
	cursor: pointer;
	transition: background .3s;
	margin-top: -30px;
	margin-left: 20px;
}

#imgPhoto:hover {
	background-color: rgb(180, 180, 180);
	border: 1px solid #111;
}


.pub {
	font-family: 'Nunito', sans-serif;
	font-size: 15px;
	text-transform: uppercase;
	letter-spacing: 1.3px;
	font-weight: 700;
	color: #313133;
	background: #4FD1C5;
	background: linear-gradient(90deg, rgba(129, 230, 217, 1) 0%, rgba(79, 209, 197, 1) 100%);
	border: none;
	border-radius: 1000px;
	box-shadow: 12px 12px 24px rgba(79, 209, 197, .64);
	transition: all 0.3s ease-in-out 0s;
	cursor: pointer;
	outline: none;
	position: relative;
	padding: 10px;
	margin-top: 50px;
}

pub::before {
	content: '';
	border-radius: 1000px;
	min-width: calc(300px + 12px);
	min-height: calc(60px + 12px);
	border: 6px solid #00FFCB;
	box-shadow: 0 0 60px rgba(0, 255, 203, .64);
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	opacity: 0;
	transition: all .3s ease-in-out 0s;
}

.pub:hover,
.pub:focus {
	color: #313133;
	transform: translateY(-6px);
}

pub:hover::before,
pub:focus::before {
	opacity: 1;
}

pub::after {
	content: '';
	width: 30px;
	height: 30px;
	border-radius: 100%;
	border: 6px solid #00FFCB;
	position: absolute;
	z-index: -1;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	animation: ring 1.5s infinite;
}

pub:hover::after,
pub:focus::after {
	animation: none;
	display: none;
}

@keyframes ring {
	0% {
		width: 30px;
		height: 30px;
		opacity: 1;
	}

	100% {
		width: 300px;
		height: 300px;
		opacity: 0;
	}
}

.textPost {
	margin-bottom: 100px;
	padding-top: 20px;
	padding-left: 5px;
}

.textoPost {
	margin-top: 20px;
	padding-left: 17px;
}

.imageContainer {
	position: static;
	margin-left: 123px;
	margin-top: -4px;

}

.imgLoad {
	max-width: 38px;
	max-height: 38px;
	border-radius: 40%;
}



.photo-perfil {
	position: static;
	max-width: 50px;
	border-radius: 50%;
}

.fa {
	position: static;
	padding-left: 261px;
	margin-top: -28px;
}

.card-title {
	position: relative;
	margin-top: -40px;
	margin-left: -90px;
}

.fonts {
	position: absolute;
	right: 90px;
	top: 8px;
	color: #a09c9c
}

.form-control:focus {
	color: #495057;
	background-color: #fff;
	border-color: #8bbafe;
	outline: 0;
	box-shadow: none
}
@media screen and (max-width: 1280px){
	section{
	height: 100%;
	}
}
</style>
