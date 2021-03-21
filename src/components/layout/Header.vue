<template >
    <div class="header">
        <div class="nav-bar">
            <router-link class="nav-link" to="/">Home</router-link>
            <router-link class="nav-link" to="/todos">Todos</router-link>
            <router-link class="nav-link" to="/sliders">Sliders</router-link>
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

    .nav-bar {
        margin-top: 30px;
        display: flex;
        justify-content: space-around;
    }

    .nav-link {
        position: relative;
        font-family: sans-serif;
        font-size: 20px;
        text-decoration: none;
        text-transform: uppercase;
        color: #222;
    }

    .nav-link::before {
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

    .nav-link:hover::before {
        transform-origin: 0 0;
        transform: scaleX(1);
    }

    img {
        margin: 100px auto 0 auto;
    }
</style>