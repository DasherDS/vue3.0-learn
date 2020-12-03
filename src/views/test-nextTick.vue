<template>
  <div>
      <h2>nextTick</h2>
      <p>定义: 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM</p>
        <div>
            <p> {{msg}} </p>

        </div>
      <a-button @click="changeMsg">改变</a-button>
  </div>
</template>

<script>
import { nextTick, ref } from 'vue'
export default {
    name:"NextTick",
    setup(){
        const msg = ref('dom')
        const changeMsg = async ()=>{
            msg.value = 'dom还没更新，现在在赋值，修改数据'  //1
            await nextTick(()=>{
                console.log(121323123121123132123);
            })
            //dom更新了
            dosome()

        }
        function dosome(){
            msg.value = '!!!!!!!!!!!!!!!!!!!!!' //1
            console.log('dom更新了才操作');
        }
        //打开调试运行会发现   dom 的值是先出现1 在出现2 的
        return { msg,changeMsg }
    }
}
</script>

<style>

</style>