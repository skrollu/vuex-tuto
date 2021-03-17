<template >
    <div class="header">
        <div class="nav-bar">
            <router-link to="/">Home</router-link>
            <router-link to="/todos">Todos</router-link>
            <router-link to="/sliders">Sliders</router-link>
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
        display: flex;
        justify-content: space-around;
    }

    .nav-bar a {
        font-size: 25px
    }

    img {
        margin: 100px auto 0 auto;
    }
</style>