import axios from "axios"

export default axios.create({
    baseURL: "http://0.0.0.0:6786/api",
    headers: {
        "Content-type": "application/json"
    }
});