<template>
    <div class="warp">
        <a-slider class="slider" v-model:value="sliderVal" />
        {{ sliderVal }}
        <div class="hiddenbox">
            <div :class="sliderVal > 50 ? 'search2' : 'search1'"></div>
            <div :class="sliderVal > 50 ? 'move1' : 'move2'"></div>
        </div>

        <div :class="sliderVal > 50 ? 'minbox' : 'maxbox'"></div>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    setup() {
        let sliderVal = ref(0);

        return { sliderVal };
    },
};
</script>

<style lang="scss" scoped>
.warp {
    .slider {
        width: 500px;
        margin: 0 auto;
    }
    .minbox {
        transition: 1s;
        margin: 0 auto;
        width: 200px;
        height: 200px;
        background-color: yellowgreen;
    }
    .maxbox {
        transition: 1s;
        margin: 0 auto;
        width: 50px;
        height: 50px;
        background-color: skyblue;
    }
    .hiddenbox {
        div {
            border-radius: 10px;
        }
        display: flex;
        .search1 {
            transition: 1s;
            width: 80px;
            height: 80px;
            background-color: red;
            transform: translate(0, 0);
        }
        .search2 {
            transition: 1s;
            transform: translate(0px, -100px);
            width: 80px;
            height: 80px;
            background-color: saddlebrown;
        }
        .move1 {
            transition: 1.5s;
            width: 80px;
            height: 80px;
            background-color: #c9483c;
            transform: translate(-80px, 0);
        }
        .move2 {
            transition: 1.5s;
            width: 80px;
            height: 80px;
            background-color: #ccc;
            transform: translate(0, 0);
        }
    }
}
</style>
