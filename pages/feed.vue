<template>
  <div>

      <div class="grad-bar">
        <div class="nav-wrapper">
     <div class="grad-bar"></div>
     <nav class="navbar">
       <div class="menu-toggle" id="mobile-menu">
         <span class="bar"></span>
         <span class="bar"></span>
         <span class="bar"></span>
       </div>

       <ul class="options">
        <div class="home">
         <li class="nav-item"><a href="/home">Home</a></li>
        </div>
        <div class="perfil">
         <li class="nav-item"><a href="/perfilCriadoA">Perfil</a></li>
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

      </div>
      <div class="search-box">
          <input class="search-txt" type="text" name="" placeholder="Procurar">
          <a class="search-btn" href="#">
            <i class="fas fa-search"></i>
            </a>
          </div>
          <a href="/home"><img src="../assets/SocialNet_logoFeed.jpg" class= "logo" alt="Company Logo"></a>

          <!--ABA VAGAS-->

          <div v-if="vagas == true">
          <div>
  <h1 class="vagas-true" @click="vagas = true" style="color: black">Vagas</h1>

  <h1 class="posts" @click="vagas = false" style="color: midnightblue">Posts</h1>
</div>
      <div>
        <input type="file" v-show="false" ref="flImage" id="flImage" name="flImage" class="flImage" @change="filePhotoLoad" accept="image/*">


        <button class="btn btn-outline-primary" style="min-width:150px;" type="button" @click="imgPhotoLoad">Postar Vaga</button>
      </div>
<carousel >
            <carousel-slide v-for="slide in slides" :key="slide" class="carousel-slider">
                <img :src="slide" :alt="slide">
            </carousel-slide>
        </carousel>


          </div>

          <!--ABA POSTS-->

          <div v-else >
            <div>
  <h1 class="vagas" @click="vagas = true" style="color: midnightblue">Vagas</h1>

  <h1 class="posts-true" @click="vagas = false" style="color: black">Posts</h1>
  <div class="form-timeline">
<div class="timeline">

  <!--Input box usuario-->
  <div class="container-box">

    <div class="flex items-center space-x-4 p-2">
      <img
        :src="user?.photoURL"
        :alt="user?.displayName"
        class="h-10 w-10 rounded-full object-cover icon"
        loading="lazy"
      />
      <form @submit.prevent="onSubmit" class="flex flex-1">
        <textarea
        rows="100"
                  id = "text-input"
          type="text"
          :placeholder="`Sobre o que você está pensando, ${clientes.nome}?`"
          class="
            rounded-full
            h-12
            bg-gray-100
            flex-grow
            px-5
            focus:outline-none
          "
          v-model.trim="message"
        ></textarea>
      </form>
    </div>
    <div class="flex justify-evenly p-3 border-t">
      <div class="inputIcon">
        <VideoCameraIcon class="h-7 text-red-500" />
      </div>
      <div @click="imgPhotoLoadGallery" class="inputIcon">
        <CameraIcon class="h-7 text-green-400" />
        <p class="text-xs sm:text-sm xl:text-base"><img class="gallery" src="../assets/gallery.webp" alt=""></p>
        <input type="file" v-show="false" ref="flGallery" id="flGallery" name="flGallery" class="flGallery" @change="filePhotoLoad" accept="image/*">

      </div>
      <div class="inputIcon">
        <EmojiHappyIcon class="h-7 text-yellow-300" />
        <b-button class="publicar" pill variant="success">Publicar</b-button>
      </div>
      <div
        class="
          flex flex-col
          filter
          hover:brightness-110
          transition
          duration-150
          transform
          hover:scale-105
          cursor-pointer
        "
        v-if="imageToPost"
        @click="removeImage"
      >
        <img :src="imageToPost" class="h-10 object-contain" />
        <p class="text-xs text-red-500 text-center">Remove</p>
      </div>
  </div>
</div>
<div class="feed-posts">
<!-- Post 1 -->
<div>
<vue-timeline-update
    title="Empregado"

    description= ‎

    thumbnail="/images/vuetimeline/hunter_x_hunter.jpg"
    category="Luís Felipe Lessi Silva"
    color="black"
  >
  <img class="perfil-icon" src="../assets/luis.jpg">
</vue-timeline-update>
<p class="conteudo">Lorem ipsum dolor sit amet. Id recusandae sunt <a href="https://www.loremipzum.com" target="_blank">Ut iste ab quam ipsa aut aliquam earum qui consequatur consectetur</a>. Sit pariatur dignissimosEst autem et eligendi delectus in minima quia ut repellat nesciunt ut assumenda ipsa ex nisi dolorem. >Qui dolorem tempore non dolorum sequiUt soluta quo consequatur ducimus sed tempora exercitationem. Aut similique facilis At omnis similiqueId consequuntur aut quia possimus aut inventore esse eum error incidunt ad doloribus fugit.
</p>
  <div v-if="this.like == true">
    <p class="likeBtn" @click="likePost(12)">
    <i class="fa fa-thumbs-up" @click="unlike()">Like</i>
  </p>
  </div>
  <div v-else>
    <p class="likeBtn" @click="likePost(12)">
    <i class="fa fa-thumbs-up" @click="unlike()">Unlike</i>
  </p>
  </div>

</div>
<!-- Post 2 -->
<div>
<vue-timeline-update
    :date="new Date('2016-11-22')"
    title="Empregado"
    description= ‎
    thumbnail="/images/vuetimeline/hunter_x_hunter.jpg"
    category="Ezequiel Alvez de Almeida"
    color="red"
  >
  <img class="perfil-icon" src="../assets/quiel.jpg">
</vue-timeline-update>
<p class="conteudo">Lorem ipsum dolor sit amet. Sit magni unde ab consequatur quidem qui pariatur reprehenderit aut aliquid eveniet? Quo omnis dolorem non eius sint est aliquid iure eos minima vitae et consequatur autem. Ab recusandae consequatur ut nisi dolores sit quam expedita.

Ut accusamus sunt ut omnis dolorem aut eligendi provident! Aut dolorem praesentium eum voluptatibus temporibus ut enim nihil et reiciendis rerum!

Non esse quaerat id ducimus earum est maxime laborum sit dignissimos cupiditate! Qui odit exercitationem ut magni modi ex animi voluptatem sit voluptatem culpa ut accusantium repudiandae ad blanditiis iste sit ipsa vitae.</p>
<div v-if="this.like == true">
    <p class="likeBtn" @click="likePost(12)">
    <i class="fa fa-thumbs-up" @click="unlike()">Like</i>
  </p>
  </div>
  <div v-else>
    <p class="likeBtn" @click="likePost(12)">
    <i class="fa fa-thumbs-up" @click="unlike()">Unlike</i>
  </p>
  </div>
</div>
<!-- Post 3 -->
  <div>
  <vue-timeline-update
    :date="new Date('2016-11-22')"
    title="Empresa"
    description=‎
    thumbnail="/images/vuetimeline/hunter_x_hunter.jpg"
    category="Google Chrome"
    color="red"
  ><img class="perfil-icon" src="../assets/google.png">
</vue-timeline-update>
<p class="conteudo">Lorem ipsum dolor sit amet. Ut velit modi est totam explicabo et omnis culpa ut veritatis eaque vel voluptate temporibus? Qui aliquam quibusdam hic enim tempora et praesentium tenetur sed deserunt omnis? Qui expedita aspernatur est mollitia totam qui praesentium ipsa non cumque veniam et similique accusantium ut tenetur iste id consectetur vero?

</p>
<div v-if="this.like == true">
    <p class="likeBtn" @click="likePost(12)">
    <i class="fa fa-thumbs-up" @click="unlike()">Like</i>
  </p>
  </div>
  <div v-else>
    <p class="likeBtn" @click="likePost(12)">
    <i class="fa fa-thumbs-up" @click="unlike()">Unlike</i>
  </p>
  </div>

</div>
<!-- Post 4 -->
<div>
  <vue-timeline-update
    :date="new Date('2016-11-22')"
    title="Empresa"
    description="‎"
    thumbnail="/images/vuetimeline/hunter_x_hunter.jpg"
    category="Centro Paula Souza"
    color="red"
  >  <img class="perfil-icon" src="../assets/centroPaula.png">
</vue-timeline-update>
<p class="conteudo">Lorem ipsum dolor sit amet. Et accusantium blanditiis in illum facilis nam Quis aliquam rem autem nisi! Et dolorem rerum ad voluptatum expedita est voluptatem nostrum et iure placeat. Ut beatae quaerat qui voluptatem assumenda qui eligendi odio.
</p>
<div v-if="this.like == true">
    <p class="likeBtn" @click="likePost(12)">
    <i class="fa fa-thumbs-up" @click="unlike()">Like</i>
  </p>
  </div>
  <div v-else>
    <p class="likeBtn" @click="likePost(12)">
    <i class="fa fa-thumbs-up" @click="unlike()">Unlike</i>
  </p>
  </div>
</div>

<!-- Post 5 -->

<div>
  <vue-timeline-update
    :date="new Date('2016-11-22')"
    title="Empregado"
    description="‎"
    thumbnail="/images/vuetimeline/hunter_x_hunter.jpg"
    category="Rafael Augusto Lemos"
    color="red"
  >    <img class="perfil-icon" src="../assets/Gabriel.jpg">
</vue-timeline-update>
<p class="conteudo">Lorem ipsum dolor sit amet. Et accusantium blanditiis in illum facilis nam Quis aliquam rem autem nisi! Et dolorem rerum ad voluptatum expedita est voluptatem nostrum et iure placeat. Ut beatae quaerat qui voluptatem assumenda qui eligendi odio.
</p>
<div v-if="this.like == true">
    <p class="likeBtn" @click="likePost(12)">
    <i class="fa fa-thumbs-up" @click="unlike()">Like</i>
  </p>
  </div>
  <div v-else>
    <p class="likeBtn" @click="likePost(12)">
    <i class="fa fa-thumbs-up" @click="unlike()">Unlike</i>
  </p>
  </div>
</div>

</div>
</div>
</div>
</div>
          <!--Carrousel-->
          <div class="container">


          </div>

</div>



      </div>
</template>

<script>
import Empresa from '../services/empresas';
import Aluno from '../services/alunos';

import Carousel from './Carousel.vue';
import CarouselSlide from './CarouselSlide.vue';

import Vue from "vue";
import VueTimeline from "@growthbunker/vuetimeline";

Vue.use(VueTimeline, {
  theme: "light",
});
export default {
  middleware: 'auth',
  data() {


    return  {
      clientes: [
    ],

      slides:[

      'https://user-images.githubusercontent.com/63880375/198097451-68375795-9285-4b4d-87a1-52d044807b86.jpg',
      'https://user-images.githubusercontent.com/63880375/198097550-fa19d96f-8d3f-4848-9174-831e94eaf7a7.png',
      'https://user-images.githubusercontent.com/63880375/198097742-50697cd5-2722-46dd-9a38-c1dbc8a10087.jpg',


    ],
      like: true,
      nome: "",
      vagas: false,

    }

  },
  mounted(){
    Empresa.listar().then(resposta =>{
      console.log(resposta.data)
      this.clientes = resposta.data[3]
    })

    Aluno.listar().then(resposta =>{
      console.log(resposta.data)
      this.clientes = resposta.data[63]
      })
  },
  methods: {

    likePost(id){
      //alert(id);
    },
    unlike(){
      if (this.like == true) {
        this.like = false;


      } else {
        this.like = true;

      }
    },
    //Carregamendo da galeria do feed
    imgPhotoLoadGallery(){
      this.$refs.flGallery.click()

    },
    filePhotoLoadGallery(){
      if (this.$refs.flGallery.files.length <= 0) {
        return;
    }
    let reader = new FileReader();
    reader.onload = () => {
      this.$refs.imgPhoto.src = reader.result;
    }
    reader.readAsDataURL(this.$refs.flGallery.files[0])
    },
    //carregamento da img vaga
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
  components : {
        Carousel : Carousel,
        CarouselSlide : CarouselSlide,
    },
  head: {
    title: 'Feed',
    script: [
    {src:"https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js"}

    ],
    link: [
      { rel:"preconnect", href:"https://fonts.googleapis.com" },
      { rel:"preconnect", href:"https://fonts.gstatic.com" },
      { rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Bungee+Spice&family=Press+Start+2P&family=Train+One&display=swap" },
      { rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Bungee+Spice&family=Fredoka+One&family=Nabla&family=Press+Start+2P&family=Train+One&display=swap" },
      { rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Cinzel&display=swap"},
      { rel:"stylesheet", href:"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" },
      { rel:"stylesheet", href:"https://use.fontawesome.com/releases/v5.7.1/css/all.css" },
      { rel:"stylesheet", href:"https://cdn.jsdelivr.net/npm/pace-js@latest/pace-theme-default.min.css" },
    ]
  }
}
</script>

<style>


#text-input::placeholder{
  position: absolute;
margin-left: -40px;

}

#text-input{
  position: absolute;
  width: 340px;
  padding-bottom: 50px;
    box-sizing: border-box;
    height: 30px;
    resize: none;
    margin-left: 170px;
    margin-top: -80px;
    vertical-align: top;

  background-color: #b8c0c7;
}
#text-input:focus{
  background-color: #ffffff;

}
.likeBtn{
  margin-left: 212px;
  cursor: pointer;
  width: 50px;

}
.likeBtn:checked{
 background-color: #db3434;
}
.feed-posts{
  margin-top: -140px;
  padding-top: 170px;
  margin-left: -150px;
  width: 790px;
  margin-bottom: 0px;
}

.enviar{
  margin-bottom: -90px;

}


.gallery{
  padding-bottom: 0;
  max-height: 35px;
  margin-bottom: -80px;
  margin-top: -150px;
  /**border:2px solid black;:**/
  margin-left: 465px;

  padding-right: -80px;}
.gallery:hover{
  cursor: pointer;
}
.carousel {
        position:relative;
        overflow: hidden;
        max-width: 610px;
        height: 430px;
        z-index:10;
        margin-top: 30px;
        margin-left: 370px;
    }
    .btn {
        padding:5px 10px;
        background-color:rgba(0,0,0,0.5);
        border:1px solid transparent;
        margin:5px 10px;
        color:#FFF;
        height:50px;
        width:50px;
        position:absolute;
        margin-top:-25px;
        z-index:2;
    }
    .btn:hover {
        cursor: pointer;
    }
    .btn:focus{
        outline:none;
    }
    .btn-next {
        top:50%;
        right:0;
    }
    .btn-prev {
        top:50%;
        left:0;
    }
    .carousel-slider {
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
    }
    .carousel-slider img {
        width:100%;
        height:100%;
    }
body {
  background: -webkit-linear-gradient(left, #ffffff, #00c6ff);
}
.flImage{
  position: absolute;
}

.btn-outline-primary{
  position: absolute;
  margin-left: 598px;
  margin-top: -50px;
}
.timeline{
  position: absolute;
  padding-left: 330px;
  margin-top: 70px;

}
a h1{
position: absolute;
padding-left: 410px;
padding-top: 110px;
}

.posts{
position: absolute;
padding-left: 430px;
padding-top: 0px;
margin-top: -52px;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
cursor: pointer;
}

.posts-true{
  position: absolute;
padding-left: 430px;
padding-top: 0px;
margin-top: -52px;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
cursor: pointer;
text-decoration: underline;
}

.perfil-icon{

  height: 5%;
  width: 5%;
  margin-top: -223px;
  margin-left: -53px;
  border-radius: 50%;

}
.perfil-icon:focus{
  cursor: pointer;
}
.gb-base-badge_focuser:focus{
  cursor: pointer;

}
.vagas{
padding-left: 830px;
padding-top: 100px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  cursor: pointer;
}
.vagas-true{
  padding-left: 830px;
padding-top: 100px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  cursor: pointer;
text-decoration: underline;
}
.conteudo{
  margin-top: -148px;
  margin-left: 210px;
  border:1px solid rgba(0, 0, 0, 0.356);
  background-image: url(../assets/fundo-branco-abstrato.webp);

}
.vue-timeline-update description{
  text-decoration-color: #000;
}
.logo {
  position: absolute;
  top: 1.5%;
  padding-right: 200px;
  max-width: 500px;
  margin-left: 30px;
}
.search-box:hover>.search-txt {

width: 240px;
padding: 0 5px;

}

.search-box:hover>.search-btn {

background: none;
}

.publicar{
  position: absolute;
   height: 40px;
width: 90px;
margin-left: 163px;
margin-top: -80px;
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

.search-box {
	position: absolute;
	top: 30px;
	left: 675px;
	transform: translate(-50%, -50%);
	background-color: black;
	height: 35px;
	border-radius: 40px;
	padding: 10px;
}

.logout {
    margin-left: 790px;
    position: absolute;
    border-radius: 90px;
    padding-right: 10px;
    padding-left: 10px;
    margin-top: 13px;
    background-color: #eb1616;
    margin-left: 1230px;

}
.sobre {
    border-radius: 4px;
    padding-right: 15px;
    padding-bottom: -35px;
    padding-top: -35px;
    margin-top: 13px;
    position: absolute;
    margin-left: 1148px;
    padding-left: 13px;


}
.perfil {
    margin-left: 18px;
    margin-top: 13px;


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

.home {
    padding-top: 4px;
    margin-top: 9px;
    padding-left: 430px;

}
.options{
  padding-left: 600px;
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
.nav-wrapper {
    width: 1370;
    margin-left: -4px;
    margin-top: -1px;
    position: -webkit-sticky;
    /* Safari */
    position: sticky;
    top: 0;
    background: white;
}
.grad-bar {
    width: 100%;
    height: 5px;
    background: -webkit-linear-gradient(left, white, #00c6ff);
    background-size: 400% 400%;
    -webkit-animation: gradbar 5s ease infinite;
    -moz-animation: gradbar 5s ease infinite;
    animation: gradbar 5s ease infinite;
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
