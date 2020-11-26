<template>
    <div></div>
</template>

<script>
import { reactive, watch } from "vue";
export default {
    setup() {
        const state = reactive({ count: 2 });

        watch(
            () => state.count,
            (newval, oldval) => {
                console.log(`原值为${oldval}`);
                console.log(`新值为${newval}`);
            }
        );

        setTimeout(() => {
            state.count++;
        }, 1000);
    },
};
</script>

<style>
</style>