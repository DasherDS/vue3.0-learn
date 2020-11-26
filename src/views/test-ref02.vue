<template>
    <div></div>
</template>

<script>
import { reactive, ref } from "vue";
/**
 * 在介绍 setup 函数时，我们使用了 ref 函数包装了一个响应式的数据对象，这里表面上看上去跟 reactive 好像功能一模一样啊，
 * 确实差不多，因为 ref 就是通过 reactive 包装了一个对象 ，然后是将值传给该对象中的 value 属性，
 * 这也就解释了为什么每次访问时我们都需要加上 .value我们可以简单地把 ref(obj) 理解为这个样子 reactive({value: obj})
 */
export default {
    name: "Ref02",
    setup() {
        const obj = { count: 7 };
        const state1 = ref(obj);
        const state2 = reactive(obj);

        //注意：这里指的 .value 是在 setup 函数中访问 ref 包装后的对象时才需要加的，在 template 模板中访问时是不需要的，因为在编译时，会自动识别其是否为 ref 包装过的
        console.log(state1);
        console.log(state2);

        /**
         * 第一个打印的 proxy是在value里面的
         */
        /**
         * 建议
         *    基本类型值（String 、Nmuber 、Boolean 等）或单值对象（类似像 {count: 3} 这样只有一个属性值的对象）使用 ref
         *    引用类型值（Object 、Array）使用 reactive
         */
    },
};
</script>

<style>
</style>