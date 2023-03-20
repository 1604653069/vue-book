import axios from "axios"

const requests = axios.create({
    baseURL: "http://localhost:9999",
    timeout: 5000,
})

export default requests