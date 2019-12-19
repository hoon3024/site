<template>
    
<section id="skill" class="skill">
    <div class="container">
    <!--클릭시 화면 출력-->
        <div class="row d-flex justify-content-center">
            
            <h2 class="header-text">My Skills</h2>
            
        </div>
       <div>
     <b-tabs content-class="mt-3" justified>
     <b-tab title="language" active>
         <div class="text-center">
            <img src="../assets/skill/language/js.png" class="img-fluid" alt="" width="100">
            <img src="../assets/skill/language/c.png" class="img-fluid" alt="" width="100">
            <img src="../assets/skill/language/python.png" class="img-fluid" alt="" width="100">
            </div>
            </b-tab>
     <b-tab title="Web">
         <div class="text-center">
            <img src="../assets/skill/web/html.png" class="img-fluid" alt="" width="100">
            <img src="../assets/skill/web/css.png" class="img-fluid" alt="" width="100">
            <img src="../assets/skill/web/js.png" class="img-fluid" alt="" width="100">
            <img src="../assets/skill/web/vuejs.png" class="img-fluid" alt="" width="100">
            <img src="../assets/skill/web/nodejs.png" class="img-fluid" alt="" width="100">

            </div></b-tab>
      <b-tab title="Database">
          <div class="text-center">
            <img src="../assets/skill/database/oracle.png" class="img-fluid" alt="" width="100">
            <img src="../assets/skill/database/mysql.png" class="img-fluid" alt="" width="100">
            <img src="../assets/skill/database/mongodb.png" class="img-fluid" alt="" width="100">
            </div></b-tab>
      <b-tab title="Etc"> <div class="text-center">
            <img src="../assets/skill/etc/window.png" class="img-fluid" alt="" width="100">
            <img src="../assets/skill/etc/linux.png" class="img-fluid" alt="" width="100">
            <img src="../assets/skill/etc/ngix.png" class="img-fluid" alt="" width="100">
            <img src="../assets/skill/etc/AWS.png" class="img-fluid" alt="" width="100">
            <img src="../assets/skill/etc/docker.png" class="img-fluid" alt="" width="100">
            <img src="../assets/skill/etc/git.png" class="img-fluid" alt="" width="100">
            </div>
            </b-tab>
     </b-tabs>
     <div class="beginner"><h4>초급</h4></div>
    <div class="expert"><h4>중급</h4></div>
    </div>
    </div>
    

    
</section>

</template>

<script>

export default {
   
    
}
</script>
<style scoped>
#skill{
    background-size: cover;
    background: #f9f9f9;
    background-color: #333;
    position: relative;
    color: #fff;    
    background-size: cover;
    background-position: center;
    padding: 100px 0 220px
    
}
.before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 2s ease-out;
}
.enter { 
    opacity: 1;
    transform: translateY(0px);
}
*{
    box-sizing: border-box;
}
.text-center{
    padding:20px;
    margin-top: 60px;
    
}
 .img-fluid{
     padding:10px;
 }
  .img-fluid:hover{
     transform: scale(1.5);
     transition: 0.7s;
     
 }
 
 
</style>