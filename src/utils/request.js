import axios from "axios";

const service = axios.create({
    baseURL: "",
    timeout: 15000
})


service.interceptors.response.use(response => { return response })

export default service