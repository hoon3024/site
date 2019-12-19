<template>
   
<section id="contact" class="contact ">
    <div class="container text-center">
            <h2 class="header-text">Contact</h2>
            <div class="row"> <!--좌우로 나눠서 나타내기 6/6 hoon-->
                <div class="col-sm-6" >
                    <div id="text-about" class="uk-card">
                        <img src="../assets/contect/end.gif" class="img-responsive" alt="">
                    </div>
                </div>
                <div class="col-sm-6" >
                    <div class="col-sm-12">
                        <div id="text-contact" class="uk-card">
                            
                            <img src="../assets/contect/github.png" target="_black" class="img-fluid" alt="">

                         </div>
                        <div id="text-contact" class="uk-card">
                            
                             
                             <a href="github.com/hoon3024" target="_black" class="btn btn-primary btn-shadow btn-gradient">More</a>
                            <h3 class="endtext">github.com/hoon3024</h3>
                        
                        </div>
                      
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
<style>

#contact {
    background: #f9f9f9;
    background-color: #333;
    position: relative;
    color: #fff;
    background-size: cover;
    background-position: center;
    padding: 100px 0 220px
    

}
.container{
    margin-top: 20px;
}
.text-contact {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    margin: 80px 0;
    text-align: left;
    
    
}
.endtext {
    color: #fff;
    font-size: 30px;
    font-weight: 400;
    margin: 80px 0;
    text-align: center;
    
    
}
.img-fluid{
    align-items: center;
}

</style>