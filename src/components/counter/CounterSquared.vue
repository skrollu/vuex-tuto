<template lang="">
    <div class="counter-squared">
        {{ counter}}
        <sup>2</sup> = {{counterSquared}}
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['counterSquared', 'counter'])
    }
}
</script>
<style lang="">
    
</style>