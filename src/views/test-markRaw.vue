<template>
    <div>
        <p>{{ txt }}</p>
        <hr />
        <p>{{ state.name }}</p>
        <p>{{ state.age }}</p>
        <button @click="change">改变</button>
    </div>
</template>

<script>
import { markRaw, reactive } from "vue";
export default {
    name: "MarkRaw",
    setup() {
        const txt =
            "markRaw 方法可以将原始数据标记为非响应式的，即使用 ref 或 reactive 将其包装，仍无法实现数据响应式，其接收一个参数，即原始数据，并返回被标记后的数据";

        const obj = {
            name: "张三",
            age: 18,
        };
        const raw = markRaw(obj);
        const state = reactive(raw);

        function change() {
            state.age = 50;
            //我们来看一下在被 markRaw 方法处理过后的数据是否还能被 reactive 包装成响应式数据
            console.log(state,"即使我们修改了值也不会更新视图了，即没有实现数据响应式");
            //即使我们修改了值也不会更新视图了，即没有实现数据响应式
        }
        return { txt, state, change };
    },
};
</script>

<style>
</style>