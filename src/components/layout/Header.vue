<template >
    <div>
        <div class="nav-bar">
            <router-link to="/">Home</router-link>
            <router-link to="/todos">Todos</router-link>
        </div>
        <img alt="vue js logo" src="../../assets/logo.png"/>
    </div>
</template>
<script>
export default {
    name: 'Header'
}
</script>
<style>
    .nav-bar {
        display: flex;
        justify-content: space-around;
    }

    .nav-bar a {
        font-size: 25px
    }

    img {
        margin-top: 100px
    }
</style>