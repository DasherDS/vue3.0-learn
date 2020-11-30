<template>
    <div>
        <p>{{ txt }}</p>
    </div>
</template>

<script>
import { toRefs } from "vue";
export default {
    name: "toRefs",
    setup() {
        const txt =
            "其作用就是将传入的对象里所有的属性的值都转化为响应式数据对象，该函数支持一个参数，即 obj 对象";
        const obj = {
            name: "vue3常用API",
            id: 1,
            more: "暂时没有",
        };

        const state = toRefs(obj);
        let warn1 =
            "toRefs() expects a reactive object but received a plain one";
        let warn2 = "toRefs （） 期望一个反应对象， 但收到一个普通的对象";
        console.log('%c'+warn1,'color:#0f0;');
        console.log('%c'+warn2,'color:#0f0;');
        console.log(state);
        return { txt, state };
    },
};
</script>

<style>
</style>