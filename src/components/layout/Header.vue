<template >
    <div class="header">
        <div class="nav-bar">
            <router-link class="nav-link-1" to="/">Home</router-link>
            <router-link class="slide-link" to="/todos">
                <span>Todos</span>
                <span>Todos</span>
            </router-link>
            <router-link class="nav-link-3" to="/sliders">Sliders</router-link>
        </div>
        <img alt="vue js logo" src="../../assets/images/vue_logo.png"/>
    </div>
</template>
<script>
export default {
    name: 'Header'
}
</script>
<style scoped>
    .header {
        text-align: center;
    }

    img {
        margin: 100px auto 0 auto;
    }
    
    .nav-bar {
        margin-top: 30px;
        display: flex;
        justify-content: space-around;
    }

/** COUNTER */

    .nav-link-1 {
        position: relative;
        font-family: sans-serif;
        font-size: 20px;
        text-decoration: none;
        text-transform: uppercase;
        color: #222;
    }

    .nav-link-1::before {
        content: "";
        position: absolute;
        bottom: 0;
        background: #222;
        height: 3px;
        width: 100%; /* taille de la barre*/
        transform-origin: 120% 0; /* distance du point de chute */   
        transform: scaleX(0);
        transition: transform 0.4s;
    }

    .nav-link-1:hover::before {
        transform-origin: 0 0;
        transform: scaleX(1);
    }

/** TODOS */

.slide-link {
    font-family: sans-serif;
    overflow: hidden;
    position: relative;
       font-size: 20px;
        text-decoration: none;
        text-transform: uppercase;
        color: #222;
}

.slide-link span {
    padding: 0 10px;
    display: inline-block;/* De base les spans sont des elements inline ici on met au moins block en plus pour pouvoir y ajouter une transformation */
    transition: transform 0.3s ease-out; 
}

.slide-link span:nth-child(2){
    position: absolute;
    width: 100%;
    text-align: center;
    left: 100%;
}

.slide-link:hover span {
    transform: translateX(-100%);
}

/** SLIDERS */

    .nav-link-3 {
        font-size: 20px;
        text-decoration: none;
        text-transform: uppercase;
        color: #222;
        position: relative;
    }

    .nav-link-3::before,
    .nav-link-3::after {
        content: "";
        position: absolute;
        height: 2px;
        opacity: 0;
        background: #222;
        left: 50%;
        transform: translate(-50%, 10px);
        transition: all 0.2s ease-in-out;
    }

    .nav-link-3::before {
        width: 90%;
        bottom: 0;;
    }

    .nav-link-3::after {
        width: 60%;
        bottom: -7px;
    }

    .nav-link-3:hover::before,
    .nav-link-3:hover::after {
        opacity: 1;
        transform: translate(-50%, 0px);
    }

    .nav-link-3::before, /** ajoute un delay quand on enlève la souris de notre lien sur la barre du haut */
    .nav-link-3:hover::after { /**ajoute un delay pour la barre du bas */
        transition-delay: 0.1s;
    }

    .nav-link-3:hover::before { /** enlève le delay pour pour la barre du haut pour le hover */
        transition-delay: 0s;
    }
</style>