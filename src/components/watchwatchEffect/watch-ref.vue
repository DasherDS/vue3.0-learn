<template>
    <div></div>
</template>

<script>
import { ref, watch } from "vue";
export default {
    setup() {
        const state = ref(0);

        watch(state, (newval, oldval) => {
            console.log(`原值为${oldval}`);
            console.log(`新值为${newval}`);
        });

        setTimeout(() => {
            state.value++;
        }, 1000);
    },
};
</script>

<style>
</style>