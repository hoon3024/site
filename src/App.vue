<template>
  <div id="app">
    
    <TopNavOne></TopNavOne>
    
    <Home></Home>
    <div id="page-divider"></div>
    <About></About>
    <div id="page-divider"></div>
    <skill></skill>
    <div id="page-divider"></div>
    <Port></Port>
    <div id="page-divider"></div>
    <Contact></Contact>
    <div id="page-divider"></div>
    <Scroll-top></Scroll-top>
    <FooterArea></FooterArea>
    
  </div>
</template>

<script>
import AboutVue from './components/About.vue';
import ContactVue from './components/Contact.vue';
import FooterAreaVue from './components/FooterArea.vue';
import HomeVue from './components/Home.vue';
import PortVue from './components/Port.vue';
import ScrollTopVue from './components/ScrollTop.vue';
import SkillVue from './components/Skill.vue';
import TopNavOneVue from './components/TopNavOne.vue';


export default {
  
  components :{
    'About': AboutVue,
    'Contact': ContactVue,
    'FooterArea': FooterAreaVue,
    'Home': HomeVue,
    'Port': PortVue,
    'ScrollTop': ScrollTopVue,
    'Skill': SkillVue,
    'TopNavOne': TopNavOneVue
    
  },
  created(){
    console.log($.fn.jquery);
    console.log($.ui.version);
  }
  
}
</script>

<style>
/*changhoon*/


/*basic*/

html {
    scroll-behavior: smooth;
}

body {
    padding-top: 80px;
    position: relative;
    overflow-x: hidden;
}

.container {
    width: 100%;
    height: 100%;
}

section {
    max-width: auto;
    height: auto;
    padding: 50px 0;
    overflow: hidden;
}

a {
    transition: all 0.3s;
    display: inline-block;
}

p {
    transition: all 0.3s;
    line-height: 1.7rem;
}

button {
    cursor: pointer;
}

i,
span,
strong {
    display: inline-block;
}

.bg-gray,
section.skill a.active {
    background: #f5f5f5;
}

.uk-margin-remove {
    background-color: #62ff8b54;
    border-radius: 1em;
}

.no-padding {
    padding: 0 !important;
}

.no-padding-top {
    padding-top: 0 !important;
}

.no-padding-bottom {
    padding-bottom: 0 !important;
}

.no-margin {
    margin: 0 !important;
}

.no-margin-top {
    margin-top: 0 !important;
}

.no-margin-bottom {
    margin-bottom: 0 !important;
}

.header-text {
    font-family: Raleway;
    font-weight: 300;
    text-transform: capitalize;
    font-size: 35px;
    color: #B5B1AE;
    letter-spacing: 2px;
    margin-bottom: 30px;
    margin-left: 5px;
    margin-top: 50px;
}


/*Home*/

.btn {
    font-size: 0.9em !important;
}

.btn-primary:focus {
    color: #fff;
}

.btn-shadow {
    -webkit-box-shadow: 0 10px 20px rgba(109, 109, 109, 0.16) !important;
    box-shadow: 0 10px 20px rgba(109, 109, 109, 0.16) !important;
}

.btn-gradient {
    background-color: #5989e5;
    background-image: linear-gradient(to right, #5989e5, #37cfdc);
    border: none !important;
    text-transform: uppercase;
    color: #fff;
    overflow: hidden;
    position: relative;
    z-index: 1;
    -webkit-transition: all 0.3s !important;
    transition: all 0.3s !important;
}

.btn.btn-gradient:hover,
section.skill span.btn.number:hover {
    opacity: 0.85;
}

.has-shadow {
    box-shadow: -5.665px 9.429px 35px 0px rgba(0, 0, 0, 0.2);
}

.scrollUp {
    transform: translateY(-105%); 
}

.block {
    margin-bottom: 50px;
}

.imgbox {
    text-align: center;
}

.uk-margin-medium {
    text-align: center;
}

.uk-inline-clip {
    margin-bottom: 0.8 rem;
}

.blockquote {
    line-height: 1.7rem;
    color: #656565;
    padding: 40px;
    background: #fff;
    -webkit-box-shadow: -5.665px 9.429px 35px 0px rgba(0, 0, 0, 0.2);
    box-shadow: -5.665px 9.429px 35px 0px rgba(0, 0, 0, 0.2);
}

.blockquote p::first-letter {
    font-size: 2.5rem;
    color: #5989e5;
    font-weight: 800;
}


/*Navbar*/


/* Navbar미디워쿼리 */

#page-divider {
    background-image: url(../assets/background.png);
    /*마음에 안뜨면 바꾸자 수정*/
    background-color: #eee;
    height: 30px;
    background-position: center;
    display: table;
    width: 100%;
    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);
}


/*home*/


/*skill*/


/*about me*/


/*port*/


/* footer */


/*CONTACT*/
</style>
