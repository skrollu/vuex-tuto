<template >
    <div class="infinity-slider">
        <InfinitySlider />
    </div>
    <div class="card-slider">
        <CardSlider />
    </div>

</template>
<script>
import InfinitySlider from '../components/sliders/InfinitySlider'
import CardSlider from '../components/sliders/CardSlider'

export default {
    name: 'Sliders',
    components: {
        InfinitySlider,
        CardSlider
    }
}
</script>
<style scoped>
    .infinity-slider {
        margin: 100px auto 0;/* top left/rigth bot */
        display: flex;
        justify-content: center;
    }

    .card-slider {
        margin: 20px 0;
        display: flex;
        justify-content: center;
    }
</style>