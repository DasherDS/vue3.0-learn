<template>
    <div>
        <p>{{ txt }}</p>
        <hr />
        <p>{{ state.name }}</p>
        <p>{{ state.age }}</p>
        <button @click="change">改变</button>

        <h3>组件↓</h3>
        <toRawCompontents :data="state"/>
    </div>
</template>

<script>
import { reactive } from "vue";
import toRawCompontents from "../components/toRaw-compontents"
export default {
    name: "ToRow",
    setup() {
        const txt = "toRaw 方法是用于获取 ref 或 reactive 对象的原始数据的";

        const obj = {
            name: "张三",
            age: 18,
        };
        const state = reactive(obj);

        function change() {
            state.age = 90;
            console.log(obj); //打印原始数据obj
            console.log(state); //打印reactive数据对象

            /**
             * 我们改变了 reactive 对象中的数据，于是看到原始数据 obj 和被 reactive 包装过的对象的值都发生了变化，
             * 由此我们可以看出，这两者是一个引用关系那么此时我们就想了，那如果直接改变原始数据 obj 的值，
             * 会怎么样呢？
             * 答案是： reactive 的值也会跟着改变，但是视图不会更新由此可见，当我们想修改数据，但不想让视图更新时，
             * 可以选择直接修改原始数据上的值，因此需要先获取到原始数据，我们可以使用 Vue3 提供的 toRaw 方法
             */
        }
        return { txt, state, change };
    },
    components:{
        toRawCompontents
    }
};
</script>

<style>
</style>