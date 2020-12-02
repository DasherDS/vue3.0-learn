<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <div>
      <h3>天气展示</h3>
      <p v-if="states.city">
        你搜索城市是{{ states.city }}, 
        今天是{{ states.date}}{{ states.week }}, 
        天气{{ states.wea }},{{ states.win}}{{ states.win_speed }}, 风速{{ states.wen_meter }},
        空气{{states.air_level}},pm2.5{{ states.air }},
        <b>{{ states.air_tips }}</b>
      </p>
      <span>
        <h2>如果没有数据请点击获取数据</h2>
        <el-input v-model="reqcity"
                  placeholder="请输入城市"></el-input>
        <el-button @click="getDatas">获取</el-button>
        <el-button @click="setVuex">存到vuex</el-button>
        <el-button @click="show">展示</el-button>
      </span>
    </div>

    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { weatherHooks } from "../hooks/weather";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  setup () {
    const { getDatas, reqcity, setVuex, states } = weatherHooks();
    function show(){
        console.log(states);
    }
    return { states, getDatas, reqcity, setVuex,show };
  },
};
</script>
