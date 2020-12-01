import { createStore } from "vuex";
const stroe = createStore({
    state: {
        name: "张三",
        age: 78,
        weather_store: {
            city: "",
            air: '',
            air_level: '',
            air_pm25: '',
            air_tips: '',
            country: '',
            date: '',
            wea: '',
            week: '',
            win: '',
            win_meter: '',
            win_speed: ''
        }
    },
    mutations: {
        SET_WEATHER(state, data) {
            state.weather_store = data
        }
    },
    actions: {
        setWeatherStore({ commit }, datas) {
            commit('SET_WEATHER', datas)
        }
    }
});

export default stroe;
