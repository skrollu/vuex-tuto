<template lang="">
    <div class="home">            
        <Counter />
        <CounterSquared />
        <buttons />
        <CoLoR-Inpput />
    </div>
</template>
<script>

import Counter from '../components/counter/Counter'
import CounterSquared from '../components/counter/CounterSquared'

export default {
    name: 'Home',
    components: {
        Counter,
        CounterSquared,
        'buttons': require('@/components/counter/Buttons.vue').default, //different way of import,
        'CoLoR-Inpput': require('@/components/counter/Color-Input.vue').default
    },
}

</script>
<style>
    .home {
        margin-top: 50px;
        max-width: 1100px;
        margin: auto;
        overflow: auto;
        padding: 0 2rem;
        text-align:center;
    }

    .counter {
        font-size:50px;
    }

    .button {
        display: flex;
        justify-content: center;        
    }

    .button button {
        font-size: 35px;
        width: 100px;
        margin: 50px;
    }
</style>