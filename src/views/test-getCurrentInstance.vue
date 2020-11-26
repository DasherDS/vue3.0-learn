<template>
    <div>
        <p>{{ txt }}</p>
    </div>
</template>

<script>
import { getCurrentInstance, ref } from "vue";
export default {
    setup() {
        const txt =
            "我们都知道在Vue2的任何一个组件中想要获取当前组件的实例可以通过 this 来得到，而在Vue3中我们大量的代码都在 setup 函数中运行，并且在该函数中 this 指向的是 undefined，那么该如何获取到当前组件的实例呢？这时可以用到另一个方法，即 getCurrentInstance";
        const num = ref(3);
        const instance = getCurrentInstance();
        console.log(instance);
        //可以看到 ctx 和 proxy 的内容十分类似，只是后者相对于前者外部包装了一层 proxy，由此可说明 proxy 是响应式的
        return { txt, num };
    },
};
</script>

<style>
</style>