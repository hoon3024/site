<template>
    
<header class="header">
    <nav class="navbar navbar-expand-lg nav-dark fixed-top">
        <a class="navbar-brand">ChangHoon Webs</a>
        <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><span></span><span></span><span></span></button>
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto align-items-start align-items-lg-center">
                <li class="nav-item"><a href="#" class="nav-link link-scroll">HOME</a></li>
                <li class="nav-item"><a href="#about-me" class="nav-link link-scroll">About me</a></li>
                <li class="nav-item"><a href="#skill" class="nav-link link-scroll">Skills</a></li>
                <li class="nav-item"><a href="#port" class="nav-link link-scroll">Portfolio</a></li>
                <li class="nav-item"><a href="#contact" class="nav-link link-scroll">Contact</a></li>
            </ul>
            
        </div>
        
    </nav>
   
</header>

</template>

<script>

export default {
    
}
</script>
<style>
nav.navbar {
    padding-top: 15px;
    padding-bottom: 15px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background: #fff;
    transition: all 0.5s;
}

nav.navbar .navbar-brand {
    text-transform: uppercase;
    color: #66cae2;
    font-weight: 300;
    font-size: 1.7rem;
}

nav.navbar .navbar-brand:hover {
    color: #358c9f;
    font-weight: 800;
    font-size: 1.7rem;
    
}

nav.navbar a.nav-link {
    color: #B5B1AE;
    font-weight: 300;
    font-size: 15px;
    text-transform: uppercase;
}

nav.navbar a.nav-link:hover,
nav.navbar a.nav-link.active {
    color: #78cbe0;
    transform: scale(1.2);
}


@media (max-width: 1199px) {
    nav.navbar .navbar-btn {
        margin-left: 0;
    }
}

@media (min-width: 992px) {
    nav.navbar {
        padding-left: 3rem;
        padding-right: 3rem;
    }
}

nav.navbar .navbar-btn {
    margin-left: 15px;
    color: #fff;
}

nav.navbar .navbar-toggler {
    outline: none;
}

nav.navbar .navbar-toggler span {
    width: 25px;
    margin: 5px;
    display: block;
    height: 2px;
    background: #333;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
}



</style>