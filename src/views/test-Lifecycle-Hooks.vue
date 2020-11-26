<template>
  <div>

  </div>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from 'vue'
    /**
     * Vue2            Vue3
     * beforeCreate    setup
     * created         setup
     * beforeMount     onBeforeMount
     * mounted         onMounted
     * beforeUpdate    onBeforeUpdate
     * updated         onUpdated
     * beforeDestory   onBeforeUnmount
     * destoryed       onUnmounted
     * 
     * */

export default {
    //声明周期
    name:"Lifecycle-Hooks",
    setup(){
        onBeforeMount(()=>{
            console.log("在挂在前执行");
        })
        onMounted(()=>{
            console.log("在挂在后执行");
        })
        onBeforeUpdate(()=>{
            console.log("再更新前执行");
        })
        onUpdated(()=>{
            console.log("再更新后执行");
        })
        onBeforeUnmount(()=>{
            console.log("在组件销毁前执行");
        })
        onUnmounted(()=>{
            console.log("在组件销毁后执行");
        })

        return {}
    }
}
</script>

<style>

</style>