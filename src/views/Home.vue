<template>
    <div class="home">
        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
        <div>
            <h3>天气展示</h3>
            <p v-if="weathers.city">
                你所在的城市是{{ weathers.city }}, 今天是{{ weathers.date
                }}{{ weathers.week }}, 天气{{ weathers.wea }},{{ weathers.win
                }}{{ weathers.win_speed }}, 风速{{ weathers.wen_meter }},空气{{
                    weathers.air_level
                }},pm2.5{{ weathers.air }},
                <b>{{ weathers.air_tips }}</b>
            </p>
            <span>
                <h2>如果没有数据请点击获取数据</h2>
                <el-input v-model="reqcity" placeholder="请输入城市"></el-input>
                <el-button @click="getDatas">获取</el-button>
                <el-button @click="setVuex">存到vuex</el-button>
            </span>
        </div>

        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { weatherHooks } from "../hooks/weather";
// import { reactive, watchEffect } from "vue";
export default {
    name: "Home",
    components: {
        HelloWorld,
    },
    setup() {
        const { getDatas, reqcity, setVuex, weathers } = weatherHooks();
        
        // watchEffect(weathers,(newval,oldval)=>{
        //     console.log(newval,oldval);
        // })  
        return { weathers, getDatas, reqcity, setVuex };
    },
};
</script>
