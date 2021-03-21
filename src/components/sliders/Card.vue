<template lang="">
    <div :id="data.id" class="card" :style="{ height: `${height}px`, width: `${width}px` }">
        <div class="card-back" :style="{ height: `${height}px`, width: `${width}px` }">
            <img :src="data.cover_picture" :alt="data.title" :style="{ height: `${height}px`, width: `${width}px` }">
        </div>
        <div class="card-front">
            <h3>{{data.title}}</h3>
        </div>
    </div>
</template>
<script>
export default {
    name:'Card',
    props: {
        data: Object,
        width: Number,
        height: Number,
    }
}
</script>
<style scoped>
    .card {
        border: 3px white solid;
        border-radius: 20px;
        overflow: hidden;
    }

    .card-front {
        text-align: center;
        color: white;
        height: 100px;
        background-color: rgba(83, 83, 83, 0.24);
        transition: transform 0.4s;
    }

    .card:hover .card-front{
        transform: translateY(-50px);
    }
</style>