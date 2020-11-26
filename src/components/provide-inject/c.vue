<template>
    <h3>this is C --- 孙</h3>
</template>

<script>
import { inject } from "vue";
export default {
    setup() {
        let data = inject("info");
        console.log(data,"孙");
    },
};
</script>

<style>
</style>