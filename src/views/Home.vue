<template>
    <div class="home">
        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
        <div>
            <h3>天气展示</h3>
            <p v-if="states.city" class="weather">
                你搜索城市是<span>{{ states.city }}</span>, 今天是<span>{{ states.date
                }}</span><span>{{ states.week }}</span>, 天气<span>{{ states.wea }}</span>,<span>{{ states.win
                }}</span><span>{{ states.win_speed }}</span>, 风速<span>{{ states.win_meter }}</span>, 
                空气<span>{{states.air_level}}</span>,pm2.5:<span>{{ states.air }}</span>,<br>
                <b><span>{{ states.air_tips }}</span></b>
            </p>
            <span>
                <h2 v-if="!states.city">如果没有数据请先点击获取再点击存到vuex</h2>
                <!-- <a-input
                    v-model:reqcity="reqcity"
                    placeholder="请输入城市"
                    class="city"
                ></a-input> -->
                <input type="text" v-model="reqcity" placeholder="请输入想搜索的城市">
                <a-button @click="getDatas" type="default" >获取</a-button>
                <a-button @click="setVuex" type="danger">存到vuex</a-button>
            </span>
        </div>
        <HelloWorld msg="vue3.0" @opendialog="opendialog" />
        <hr />
        <div class="content">
            <div>
                <a-button type="primary" @click="showModal"> Modal </a-button>
                <a-modal
                    v-model:visible="visible"
                    title="Modal"
                    ok-text="确认"
                    cancel-text="取消"
                    @ok="hideModal"
                >
                    <a-tag color="pink"> <span>{{ str }}</span> </a-tag>
                </a-modal>
            </div>
            |
            <div></div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { weatherHooks } from "../hooks/weather";
import { ref } from "vue";
import { message } from "ant-design-vue";
export default {
    name: "Home",
    components: {
        HelloWorld,
    },
    setup() {
        const str = ref("父组件打开文字");
        const visible = ref(false);
        const { getDatas, reqcity, setVuex, states } = weatherHooks(reqcity);
        function showModal() {
            visible.value = true;
        }
        function hideModal() {
            message.success("点击了确定");
            visible.value = false;
        }
        function opendialog(val) {
            visible.value = val.visible;
            str.value = val.str;
            console.log(val);
        }
        return {
            states,
            getDatas,
            reqcity,
            setVuex,
            showModal,
            visible,
            hideModal,
            opendialog,
            str,
        };
    },
    
};
</script>
<style lang="scss" scoped>
.city {
    width: 200px;
}
.content {
    display: flex;
    justify-content: space-around;
    div {
        flex: 1;
    }
}
.weather{
    font-family: "楷体";
    font-size: 18px;
    color: #3ca6ff;
    span{ color: #ff4d4f; }
}
</style>
