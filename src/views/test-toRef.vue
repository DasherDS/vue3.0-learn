<template>
    <div>
        <p> {{txt}} </p>
        <ReftoRef/>
    </div>
</template>

<script>
import { ref, toRef } from 'vue';
import ReftoRef from "../components/ref-toRef"
export default {
    name: "ToRef",
    setup(){
        const txt = "toRef 是将某个对象中的某个值转化为响应式数据，其接收两个参数，第一个参数为 obj 对象；第二个参数为对象中的属性名"

        const obj = {count:5}
        
        //将obj 对象中的 count 转化为响应式数据
        const state = toRef(obj,"count")


        //上面代码也可以通过ref来实现
        const obj2 = {count:6}
        const state2 = ref(obj2)

        //看起来好像一样，用过案例
        return {txt,state,state2}
    },
    components:{
        ReftoRef
    }
};
</script>

<style>
</style>