<template>
    <h1>this is A --- 爷</h1>
    <Btest/>
</template>

<script>
import { provide } from 'vue';
import Btest from "./b.vue";
export default {
    setup(){
        const obj = {
            name:"爷",
            age:80
        }
        provide('info',obj)
    },
    components: {
        Btest,
    },
};
</script>

<style>
</style>