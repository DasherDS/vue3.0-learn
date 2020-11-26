<template>
    <div>
        {{ state.count }}
    </div>
</template>

<script>
import { reactive } from "vue";
/**
 * reactive 方法是用来创建一个响应式的数据对象，该API也很好地解决了Vue2通过 defineProperty 实现数据响应式的缺陷
 */
export default {
    name: "Reactive",
    setup() {
        //创建响应对象
        const state = reactive({
            count: 5,
        });
        //将响应对象state return出去供template使用
        return {state};
    },
};
</script>

<style>
</style>