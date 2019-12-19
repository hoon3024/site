<template>
    
<!--about me page-->

<section id="about-me" class="about-me bg-right">
    <div class="container">
       <header class="text-center no-margin-bottom">
            <h2 class="header-text">Who am i?</h2>
         
        </header>
        <div  class="col-sm-12 row"> <!--좌우로 나눠서 나타내기 hoon-->
            <div  class="col-sm-6" >
                <div id="text-about" class="uk-card uk-light">
               <img src="../assets/about/aboutme.png" class="img-responsive" alt="">
                </div>
            </div>
            <div  class="col-sm-6" >
                <div id="text-about" class="uk-card uk-card-body uk-light">
                    <h3  class="uk-card-title">Who ?</h3>
                    
                    <p v-scrollanimation>저는 저의 기술들을 발전시키기위해 공부를 하며 그 날 공부한 기록과 코드들을 기록하고, 보완하고 있습니다.</p>
                        
                    <p v-scrollanimation>하루하루, 배우는 것을 주저하지않고 다양한 기술들을 습득하고 있고 더 나은 개발자가 되기위해 노력하고있습니다.
                        꾸준하게 기록하고 발전하는 노력은 저의 장점이고 더 좋고 유능한 개발자가 되기위해 도전하고있습니다.</p>
                </div>
               
            </div>
        </div>
    </div>  
</section>


</template>

<script>
export default {
    
}
</script>

<style scoped>


section.about-me p {
    font-family: "Malgun Gothic",serif; 
    color:rgba(255, 255, 255, 0.863); 
    margin: 10px 0;
}

#about-me {
    background: #f9f9f9;
    background-color: #333;
    position: relative;
    color: #fff;
    
    
    background-size: cover;
    background-position: center;
    padding: 100px 0 220px
}

.about-title {
    color: #ccc;
    font-weight: 600;
    text-decoration: underline;
    text-align: center;
}

.text-about {
    color: #ccc;
    font-size: 18px;
    font-weight: 400;
    margin: 0px 10px;
    text-align: left;
    background: rgba(0, 0, 0, 0);
    ;
    box-shadow: 15px 15px 30px rgba(21, 21, 21, .15);


}

.before-enter {
    
    opacity: 0;
    transform: translateX(100px);
    transition: all 2s cubic-bezier(.41,.01,.57,1.61);
}
    .enter{
    opacity: 1;
    transform: translateX(0px);
}


</style>