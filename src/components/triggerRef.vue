<template>
    <div>
        <p>triggerRef</p>
        <p>{{ state.a }}</p>
        <p>{{ state.first.b }}</p>
        <p>{{ state.first.second.c }}</p>
        <button @click="change">改变</button>
    </div>
</template>

<script>
import { shallowRef, triggerRef } from "vue";
export default {
    setup() {
        const obj = {
            a: 1,
            first: {
                b: 2,
                second: {
                    c: 3,
                },
            },
        };
        const state = shallowRef(obj);
        console.log(state);

        function change() {
            state.value.first.b = 8;
            state.value.first.second.c = 9;
            //修改后立即驱动视图更新
            triggerRef(state);
            console.log(state,"可以看到，我们没有给 .value 重新赋值，只是在修改值后，调用了 triggerRef 就实现了视图的更新");
        }

        return { state, change };
    },
};
</script>

<style>
</style>