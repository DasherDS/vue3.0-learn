import axios from "axios";
import { Message, MessageBox } from "element-plus";

const service = axios.create({
    baseURL: "",
    timeout: 15000
})


service.interceptors.response.use(response => { return response })

export default service