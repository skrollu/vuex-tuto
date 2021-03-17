<template >
    <div class="sliders">
        <video src="../assets/videos/sport.mp4" autoplay muted loop></video>
        <div class="sport-titles">
            <span class="sport-title">Unlimited</span>
            <span class="sport-title">Power</span>
            <span class="sport-title">Now</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .sliders {
        position: relative;
        margin: auto;
    }

    .sport-titles {
        margin: 150px;
        position: absolute;
        font-family: sans-serif;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    video {
        position: absolute;
        height: 80vh;
        width: 100vw;
        object-fit: cover;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }

    .sport-title {
        font-size: 200px;
        font-weight:900;
        line-height: 1;
        -webkit-text-stroke: 2px #222;
        background-clip: text;
        -webkit-background-clip: text;
        background-image: linear-gradient(to bottom, transparent 50%, black 50%);
        color: transparent;
        margin-left: 100px;
        transition: background-position ease-out 0.4s;
        background-size: 1% 200%;
    }

    .sport-title:hover {
        background-position: 0 +100%;
    }

</style>