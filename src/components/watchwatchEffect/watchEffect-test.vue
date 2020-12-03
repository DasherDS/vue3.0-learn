<template>
    <div>
        <span class="txt">
            {{state.count}}---{{state.name}}
        </span>
        
    </div>
</template>

<script>
import { reactive, watchEffect } from "vue";
export default {
    setup() {
        const state = reactive({
            count: 0,
            name: "艾欧尼亚",
        });

        watchEffect(() => {
            console.log(state.count);
            console.log(state.name);
            console.log(state);
        });

        setTimeout(() => {
            state.count++;
            state.name += "，昂扬不灭";
        }, 1000);
        return { state }
    },
    /**
     * 从上述代码中可以看出，我们并没有像 watch 方法一样先给其传入一个依赖，
     * 而是直接指定了一个回调函数当组件初始化时，将该回调函数执行一次，
     * 自动获取到需要检测的数据是 state.count 和 state.name根据以上特征，
     * 我们可以自行选择使用哪一个监听器。
     */
};
</script>
<style lang="scss" scoped>
.txt{
    color: #c9483c;
    font-size: 18px;
}
</style>