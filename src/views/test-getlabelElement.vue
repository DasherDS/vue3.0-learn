<template>
    <div>
        <p>{{ txt }}</p>
        <p>{{ txt2 }}</p>

        <div ref="el">div元素</div>
        <div :ref="setRef">元素标签操作</div>

        <button @click="change">改变元素的值</button>
    </div>
</template>

<script>
import { nextTick, onMounted, ref } from "vue";
export default {
    setup() {
        const txt = "获取标签元素";
        const txt2 =
            "最后再补充一个 ref 另外的作用，那就是可以获取到标签元素或组件在Vue2中，我们获取元素都是通过给元素一个 ref 属性，然后通过 this.$refs.xx 来访问的，但这在Vue3中已经不再适用了";

        //创建dom引用，名称必须与元素的ref属性相同
        const el = ref(null);

        onMounted(() => {
            console.log(el);
        });

        let myRef = "";

        const setRef = (el) => {
            myRef = el;
        };
        nextTick(() => {
            console.log(myRef);
        });

        function change() {
            myRef.innerHTML = "哈哈哈哈改了";
        }

        return { txt, txt2, el, setRef, change };
    },
};
</script>

<style>
</style>