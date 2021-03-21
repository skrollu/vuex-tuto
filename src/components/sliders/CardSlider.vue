<template lang="">
    <div class="card-slider">
        <button @click="prev" type="button" class="btn btn-left">
            <!-- &#x3008; -->
            <img src="../../assets/images/chevron-left.svg" class="icone">
        </button>
        <div class="container-slides" :style="{transform: `translateX(${index}px)`, transition: `${transition}`}">
            <div class="container-card" v-for="(item, index) in paysages" :key="index">
                <Card :data="item" :height="heightCard" :width="widthCard" />
            </div>
        </div>
        <button @click="next" type="button" class="btn btn-right">
            <!-- &#x3009; -->
            <img src="../../assets/images/chevron-right.svg" class="icone">
        </button>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Card from './Card'

export default {
    name:'CardSlider',
    components: {
        Card
    },
    computed: {
        ...mapGetters(['paysages'])
    },
    data: function() {
        return {
            index: 0,
            transition: "transform 0.2s ease",
            widthCard: 200,
            heightCard: 250
        }
    },
    methods: {
        next(){
            if(this.index === -1500) {
                this.transition = "none";
                this.index = 0;
            } else {
                this.index -= 500;
                this.transition = "transform 0.2s ease";
            }
        },
        prev(){
            if(this.index === 0) {
                this.transition = "none";
                this.index = -1500;
            } else {
                this.index += 500;
                this.transition = "transform 0.2s ease";
            }
        }
    }
}
</script>
<style scoped>
    .card-slider {
        height: 300px;
        width: 1000px;
        margin: 100px auto 0;/* top left/rigth bot */
        background: rgb(27, 31, 30);
        overflow: hidden;
        position: relative;
    }

    .container-slides {
        margin: 0 60px;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
    }

    .container-card {
        margin: 0 10px;
    }

    .btn {
        outline: none;
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: block;
        position: absolute;
        z-index: 1000;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        /*font-size: 50px;*/
        transition: background-color 0.3s ease;
    }

    .btn:hover {
        background-color: rgba(255, 255, 255, 0.452);
    }

    .icone {
        width: 15px;
    }

    .btn-left {
        top: 50%;
        left: 5px;
        transform: translateY(-50%);
    }

    .btn-right {
        top: 50%;
        right: 5px;
        transform: translateY(-50%);
    }
</style>