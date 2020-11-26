<template>
    <div></div>
</template>

<script>
import { reactive, toRaw } from "vue";
export default {
    setup(props) {
        const obj = {
            name: "lisi",
            age: 45,
        };
        const state = reactive(obj);
        const raw1 = toRaw(state);
        console.log(obj === raw1);
        /**
         *上述代码就证明了 toRaw 方法从 reactive 对象中获取到的是原始数据，
         *因此我们就可以很方便的通过修改原始数据的值而不更新视图来做一些性能优化了
         *
         * 
         * 注意
         *      补充一句，当 toRaw 方法接收的参数是 ref 对象时，需要加上 .value 才能获取到原始数据对象
         */



        const raw2 = toRaw(props.data); //props.data 父页面传过的proxy 对象
        console.log(props.data === raw2);

        //组件传值的方式的话获取到的不是原始数据
    },
    props: {
        data: {
            type: Object,
            default: null,
        },
    },
};
</script>

<style>
</style>