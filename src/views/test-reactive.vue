<template>
    <div>
        {{ state.count }}
        <h3>reactive是用来定义更加复杂的数据类型，但是定义后里面的变量取出来就不在是响应式Ref对象数据了</h3>
    </div>
</template>

<script>
import { reactive } from "vue";
/**
 * reactive 方法是用来创建一个响应式的数据对象，该API也很好地解决了Vue2通过 defineProperty 实现数据响应式的缺陷
 * 
 * 特别注意：reactive是用来定义更加复杂的数据类型，但是定义后里面的变量取出来就不在是响应式Ref对象数据了
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