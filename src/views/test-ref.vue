<template>
    <div>
        <h1>ref test</h1>
        <p>{{ number }}</p>
        <button @click="add">增加</button> _
        <button @click="clear">清零</button>
    </div>
</template>

<script>
/**
 *
 * 代码中用到了 ref 函数，在这里你只需要理解它的作用是包装一个响应式的数据即可，
 * 并且你可以将 ref 函数包装过的变量看作是Vue2 data 中的变量
 * 这样就简单实现了一个点击按钮数字加1的功能
 */
import { ref } from "vue";
export default {
    name: "Ref",
    setup(props, ctx) {
        console.log(props, ctx);
        //用ref函数包装一个响应式变量 number
        let number = ref(0);
        function add() {
            number.value++; //number 是函数包装过的他的值保存在.value中
        }
        function clear() {
            number.value = 0;
        }
        return { number, add, clear };
    },
};
/***
 * 在Vue2中，我们访问 data 或 props 中的变量，都是通过类似 this.number 这样的形式去获取的，
 * 但要特别注意的是，在setup中，this 指向的是 undefined，也就是说不能再向Vue2一样通过 this 去获取变量了
 *
 * 其实 setup 函数还有两个参数，分别是 props 、context，前者存储着定义当前组件允许外界传递过来的参数名称以及对应的值；
 * 后者是一个上下文对象，能从中访问到 attr 、emit 、slots其中 emit 就是我们熟悉的Vue2中与父组件通信的方法，可以直接拿来调用。
 *
 */
</script>

<style>
</style>