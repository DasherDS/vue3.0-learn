<template>
    <div>
        <div>
            <p>{{ txt }}</p>
        </div>
        <WatchRef />
        <WatchReactive />
        <WatchMore />
        <WatchEffectTest />
    </div>
</template>

<script>
import WatchRef from "../components/watchwatchEffect/watch-ref.vue";
import WatchReactive from "../components/watchwatchEffect/watch-reactive";
//监听多个值
import WatchMore from "../components/watchwatchEffect/watchmore";

import WatchEffectTest from "../components/watchwatchEffect/watchEffect-test";
export default {
    name: "WatchWatchEffect",
    setup() {
        const txt =
            "watch 和 watchEffect 都是用来监视某项数据变化从而执行指定的操作的，但用法上还是有所区别";

        //watch：watch( source, cb, [options] )

        /**
         * 参数说明：source：可以是表达式或函数，用于指定监听的依赖对象
         * cb：依赖对象变化后执行的回调函数
         * options：可参数，可以配置的属性有
         * immediate（立即触发回调函数）、deep（深度监听）
         */

        //详见components  watchwatchEffect watch-XXX
        return { txt };

        /**
         * 因为 watch 方法的第一个参数我们已经指定了监听的对象，因此当组件初始化时，
         * 不会执行第二个参数中的回调函数，若我们想让其初始化时就先执行一遍，
         * 可以在第三个参数对象中设置 immediate: true
         *
         *
         * watch 方法默认是渐层的监听我们指定的数据，
         * 例如如果监听的数据有多层嵌套，深层的数据变化不会触发监听的回调，
         * 若我们想要其对深层数据也进行监听，可以在第三个参数对象中设置 deep: true
         *
         *
         * watch方法会返回一个stop方法，若想要停止监听，便可直接执行该stop函数
         */

        /**
         *
         * watchEffect，它与 watch 的区别主要有以下几点：
         *      不需要手动传入依赖
         *      每次初始化时会执行一次回调函数来自动获取依赖
         *      无法获取到原值，只能得到变化后的值
         * //详见components  watchwatchEffect  watchEffect-XXX
         */
    },
    components: {
        WatchRef,
        WatchReactive,
        WatchMore,
        WatchEffectTest,
    },
};
</script>

<style>
</style>