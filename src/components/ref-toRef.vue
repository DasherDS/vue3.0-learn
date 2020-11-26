<template>
    <div>
        <h3>ref toRef 案例</h3>
        <p>{{ state1 }}</p>
        <button @click="add1">增加</button>

        <p>{{ state2 }}</p>
        <button @click="add2">增加</button>
    </div>
</template>

<script>
import { ref, toRef } from "vue";
export default {
    setup() {
        const obj = { count: 2 };
        const state1 = ref(obj.count);
        const state2 = toRef(obj, "count");

        function add1() {
            state1.value++;
            console.log(`原始值:`, obj);
            console.log(`响应式数据对象：`, state1);
        }
        /**
         * 可以看到，在对响应式数据的值进行 +1 操作后，视图改变了，
         * 原始值未改变，响应式数据对象的值也改变了，这说明 ref 是对原数据的一个拷贝，
         * 不会影响到原始值，同时响应式数据对象值改变后会同步更新视图
         */

        function add2() {
            state2.value++;
            console.log(`原始值:`, obj);
            console.log(`响应式数据对象：`, state2);
        }
        /**
         * 可以看到，在对响应式数据的值进行 +1 操作后，视图未发生改变，原始值改变了，
         * 响应式数据对象的值也改变了，这说明 toRef 是对原数据的一个引用，
         * 会影响到原始值，但是响应式数据对象值改变后会不会更新视图
         *
         */

        return { state1, state2, add1, add2 };

        /**
         * 总结
         *      ref 是对传入数据的拷贝；toRef 是对传入数据的引用
         *      ref 的值改变会更新视图；toRef 的值改变不会更新视图
         */
    },
};
</script>

<style>
</style>