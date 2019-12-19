<template>
    <section id="home" class="home  bg-primary ">
    <div class="container">
        <div class="row d-flex">
            
            <div class="col-lg-6 text order-2 order-lg-1">
                <h1 class="home-title">Beginner Developer</h1>
                <h2  class="home-text ">신입 개발자를 꿈꾸는 이창훈입니다.
                <span class="cursor">&nbsp;</span>
                </h2>
                <p class="home-text-mail">hoon3024@naver.com</p>
                
            </div>
            
            <div class="col-lg-6 order-1 order-lg-2 uk-scrollspy-inview uk-animation-slide-top" uk-scrollspy="cls: uk-animation-slide-top; repeat: true">
                <img v-scrollanimation src="../assets/Home/Homehoon.jpg" alt="..." class="img-fluid-home">
                </div>
        </div>
    </div>
    </section>
</template>

<script>

import VueAos from 'vue-aos'

export default {
   
    components: {
        VueAos
    }
}

</script>
<style scoped>
html{
  
  background: url("../assets/home/bg.jpg") no-repeat center center fixed; 
  -webkit-background-size: cover;
  
  background-size: cover;

}
#home {
    position: relative;
    color: #fff;
    background-color: #5989e5;
    background-image: -webkit-gradient(linear, left top, right top, from(#5989e5), to(#37cfdc));
    background-image: linear-gradient(to right, #5989e5, #2a2c2c);
    background-size: cover;
    background-position: center;
    padding: 220px 0 220px
}

section.home p {
    margin: 20px 0;
}

section.home{
    margin-top: 40px;
}

section.home a {
    margin-right: 10px;
    margin-bottom: 10px;
}


.home-text {
    font-size: 1.1rem;
    font-weight: 400;
    color: #fff;
}

.home-text-mail {
    font-size: 0.9rem;
    font-weight: 400;
    color: #fff;
}

.home-title {
    font-size: 2.9rem;
    font-weight: 400;
    color: #fff;
    margin-top: 80px;
    line-height: 1.1;
}
.before-enter {
    
    opacity: 0;
    transform: translateX(100px);
    transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.enter{
    opacity: 1;
    transform: translateX(0px);
}
.col-lg-6:hover{
    transition: 0.7s;
}
.col-lg-6:hover{
    transform: scale(1.1);  
}


    span.cursor {
    display: inline-block;
    margin-left:3px;
    width:4px;
    background-color: #fff;
    animation: cursorBlick 1s infinite;

    }

@keyframes cursorBlick{
    49%{ background-color : #fff}
    50%{background-color : transparent;}
    99%{background-color : transparent;}

}

</style>