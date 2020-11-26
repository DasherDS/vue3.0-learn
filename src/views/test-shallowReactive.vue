<template>
    <div>
        <p>{{ txt }}</p>
        <hr>
        <ShallowReactiveCompontents/>
    </div>
</template>

<script>
import { reactive, shallowReactive } from 'vue';
import ShallowReactiveCompontents from '../components/shallowReactive'
export default {
    name: "ShallowReactive",
    setup() {
        const txt =
            "这是一个渐层的 reactive，意思就是原本的 reactive 是深层的,这是一个用于性能优化的API";
        /**
         * 将 obj 作为参数传递给 reactive 生成响应式数据对象时，若 obj 的层级不止一层，那么会将每一层都用 Proxy 包装一次
         */

        const obj = {
            a: 1,
            first: {
                b: 2,
                second: {
                    c: 3,
                },
            },
        };
        const state = reactive(obj)
        console.log(state);
        console.log(state.first);
        console.log(state.first.second);
        //每一层都用 Proxy 包装后，对于性能是非常不友好的
        const obj1 = {
            a: 1,
            first: {
                b: 2,
                second: {
                    c: 3,
                },
            },
        };
        const state2 = shallowReactive(obj1)
        console.log(state2);
        console.log(state2.first);
        console.log(state2.first.second);
        //只有第一层被 Proxy 处理了，也就是说只有修改第一层的值时，才会响应式更新
        return { txt };
    },
    components:{
        ShallowReactiveCompontents
    }
};
</script>

<style>
</style>