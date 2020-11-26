<template>
    <h2>this is B --- 子</h2>
    <Ctest />
</template>

<script>
import { inject } from "vue";
import Ctest from "./c.vue";
export default {
    setup() {
        let data = inject("info");
        console.log(data,"子");
    },
    components: {
        Ctest,
    },
};
</script>

<style>
</style>