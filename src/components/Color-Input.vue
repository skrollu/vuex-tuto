<template lang="">
    <div>
        <label for="colorInput">Change the color of the counter: </label>
        <input
            id="colorInput"
            placeholder="Enter color code"
            type="text"
            v-model="colorCode"
        >
    </div>
</template>
<script>
export default {
    computed: {
        colorCode: {
            get() {
                return this.$store.state.colorCode
            },
            set(newValue){
                this.$store.dispatch('setColorCode', newValue)
            }
        }
    }
}
</script>
<style lang="">
    
</style>