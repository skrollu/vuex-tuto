<template lang="">
    <div class="home">            
        <Counter />
        <CounterSquared />
        <buttons />
        <CoLoR-Inpput />
    </div>
</template>
<script>

import Counter from '../components/Counter'
import CounterSquared from '../components/CounterSquared'

export default {
    name: 'Home',
    components: {
        Counter,
        CounterSquared,
        'buttons': require('@/components/Buttons.vue').default, //different way of import,
        'CoLoR-Inpput': require('@/components/Color-Input.vue').default
    },
}

</script>
<style>
    .home {
        margin-top: 50px;
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