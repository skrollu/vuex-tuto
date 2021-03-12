<template lang="">
    <div class="button">
        <button @click="$store.commit('decreaseCounter')">-</button>    <!-- commit mutation -->
        <button @click="$store.commit('increaseCounter')">+</button> <!-- dispatch action -->
        <button @click="$store.dispatch('randomNumber')">?</button> <!-- dispatch action -->
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>