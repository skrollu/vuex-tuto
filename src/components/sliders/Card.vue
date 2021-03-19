<template lang="">
    <div :id="id" class="card">
        <img :src="img" :alt="title">
        <h3>{{title}}</h3>
    </div>
</template>
<script>
export default {
    name:'Card',
    props: {
        id: Number,
        img: Object,
        title: String,
    }
}
</script>
<style scoped>
    .card {
        position: relative;
        display: flex;
        z-index: 0;
        height: 250px;
        width: 200px;
        border: 1px gray solid;
        border-radius: 50px;
        overflow: hidden;
    }

    img {
        position: absolute;
        z-index: 1;
    }

    h3 {
        position: absolute;
        z-index: 2;
        opacity: 0;
        transform: translateY(50px);
    }

    .card:hover h3{
        animation: card_hover forwards 0.3s;
    }

    @keyframes card_hover {
        100% {
            opacity: 1;
            transform: none,
        }
    }
</style>