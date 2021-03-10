<template lang="">
    <div>
        <div class="counter"
            :style="{ color:  $store.state.colorCode }">
            {{ $store.state.counter }}
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css">
    
</style>