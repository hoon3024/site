<template>
    
 
    
 <section id="port" class="port bg-gray">
      <div class="container">
       <header class="text-center no-margin-bottom">   
         <h2 class="header-text">My Portfoilo</h2>
        </header>

        <div class="row d-flex align-items-center">
          <div class="text col-lg-6 order-2 order-lg-1">
           <h4>위치검색 웹 사이트</h4>
            <p>node.js express 모듈과 Html Css 카카오 맵 API를 사용하여 제작하고
              MongoDB Atlas와 연동하여 로그인/회원가입/위치검색 저장을 함으로써
              간단한 웹사이트 구현 기능을 할 수 있도록 제작하였습니다.
            </p>
            <a href="https://github.com/hoon3024/myproject" target="_black" class="btn btn-primary btn-shadow btn-gradient">View More</a>
          </div>
          <div class="image col-lg-6 order-1 order-lg-2">
            <img  v-scrollanimation src="../assets/portfolio/port/map.png" alt="..." class="img-fluid-port">
          </div>
        </div>

        <div class="row d-flex align-items-center">
          <div class="image col-lg-6" uk-grid>
            <img  v-scrollanimation src="../assets/portfolio/port/app.png" alt="..." class="img-fluid-port">
          </div>
          <div class="text col-lg-6">
            
            <h4>할 일 관리 앱</h4>
            <p>Vue.js Node.js를 사용, MongoDB와 연동하여 할일을 기록하고 체크할 수 있는
              기능을 구현하도록 제작하였습니다.
            </p>
            <a href="https://github.com/hoon3024/project" target="_black" class="btn btn-primary btn-shadow btn-gradient">
            View More</a>
          </div>
        </div>
        <div class="row d-flex align-items-center">
          <div class="text col-lg-6 order-2 order-lg-1">
            
            <h4>국비지원과정 최종프로젝트</h4>
            <p>IT실무자 양성과정 마지막에 실시한 프로젝트로 조원 6명이서 Network, Server(Nginx), Database(Oracle)를 나누어 
              분담하여 네트워크 허브 구축, 서버 구축, 데이터베이스는 오라클 12c를 사용하였습니다.</p>
          <div class="">
            
          </div>
        
        
        <a href="#" class="btn btn-primary btn-shadow btn-gradient">View More</a>
          </div>
          
            <div class="col-lg-6 order-1 order-lg-2 uk-scrollspy-inview uk-animation-slide-top" uk-scrollspy="cls: uk-animation-slide-top; repeat: true">

              <img  v-scrollanimation src="../assets/portfolio/port/portport.png" alt="..." class="img-fluid-port">
              
          </div>
        </div>
      </div>
    </section>
    
    
</template>

<script>
export default {
    
}
</script>
<style>
#port {
    background: #f9f9f9;
    background-color: #333;
    position: relative;
    color: #fff;
    
    
    background-size: cover;
    background-position: center;
    padding: 100px 0 220px
}

section.port .row {
    margin-bottom: 40px;
}

section.port .row:last-of-time {
    margin-bottom: 0;
}

section.port .icon {
    width: 50px;
    height: 50px;
    margin-bottom: 30px;
}

.img-fluid-port {
    border-radius: 50%;
    width: 380px;
    height: 380px;
    box-shadow: -5.665px 9.429px 35px 0px rgba(0, 0, 0, 0.2);
}

section.port .text p {
    line-height: 1.8rem;
    font-size: 0.95rem;
    color: #656565;
    margin: 30px 0 25px;
}


.before-enter {
    
    opacity: 0;
    transform: translateX(100px);
    transition: all 4s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.enter{
    opacity: 1;
    transform: translateX(0px);}

@media (max-width: 1199px) {
    section.port .text {
        margin-bottom: 50px;
    }
}

</style>