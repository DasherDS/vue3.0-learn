import { createStore } from "vuex";
import { getStorage } from "../utils/storage"
const stroe = createStore({
    state: {
        name: "张三",
        age: 78,
        // weather_store: {
        //     city: "",
        //     air: '',
        //     air_level: '',
        //     air_pm25: '',
        //     air_tips: '',
        //     country: '',
        //     date: '',
        //     wea: '',
        //     week: '',
        //     win: '',
        //     win_meter: '',
        //     win_speed: ''
        // }
        weather_store:JSON.parse(getStorage('stroage_weather')) || {},
        testNum:{
            num:0
        },
        hookstestNum:{
            num:0
        }
    },
    mutations: {
        SET_WEATHER(state, data) {
            state.weather_store = data
        },
        SET_NUM(state,data){
            state.testNum = data
        },
        SET_NUM_HOOKS(state,data){
            state.hookstestNum = data
        }   
    },
    actions: {
        setWeatherStore({ commit }, datas) {
            commit('SET_WEATHER', datas)
        },
        setNum({ commit },datas){
            commit('SET_NUM',datas)
        },
        hookssetNum({ commit },datas){
            commit('SET_NUM_HOOKS',datas)
        }
    }
});

export default stroe;
