<template lang="">
    <div>
        <div class="counter"
            :style="{ color:  colorCode }">
            {{ counter }}
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['counter', 'colorCode'])
    }
}
</script>
<style lang="css">
    
</style>