<template>
    <div>
        <p>{{ txt }}</p>
        <p>{{ txt2 }}</p>
        <hr />
        <p>{{ state.a }}</p>
        <p>{{ state.first.b }}</p>
        <p>{{ state.first.second.c }}</p>
        <button @click="change1">改变1</button>
        <button @click="change2">改变2</button>
        <hr>
        <TriggerRefcompontens/>
    </div>
</template>

<script>
import { shallowRef } from "vue";
import TriggerRefcompontens from "../components/triggerRef"
export default {
    name: "ShallowRef",
    setup() {
        const txt =
            "这是一个浅层的 ref，与 shallowReactive 一样是拿来做性能优化的";

        const txt2 =
            "shallowReactive 是监听对象第一层的数据变化用于驱动视图更新，那么 shallowRef 则是监听 .value 的值的变化来更新视图的";
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

        function change1() {
            state.value = {
                a: 7,
                first: {
                    b: 8,
                    second: {
                        c: 9,
                    },
                },
            };
        }

        function change2() {
            state.value.first.b = 8;
            state.value.first.second.c = 9;
            console.log(state);
        }

        /**
         * 我们先点击了第二个按钮，发现数据确实被改变了，但是视图并没随之更新；
         * 于是点击了第一个按钮，即将整个 .value 重新赋值了，视图就立马更新了
         * 这么一看，未免也太过麻烦了，改个数据还要重新赋值，不要担心，此时我们可以用到另一个API，
         * 叫做 triggerRef ，调用它就可以立马更新视图，其接收一个参数 state ，即需要更新的 ref 对象
         */
        return { txt, txt2, state, change1, change2 };
    },
    components:{
        TriggerRefcompontens
    }
};
</script>

<style>
</style>