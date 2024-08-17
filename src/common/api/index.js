import axios from "axios";

const config = {
    apiUrl : 'http://192.168.1.109:5000/api/v1'
};

export const agent = axios.create({
    baseURL:config.apiUrl
});

agent.CancelToken = axios.CancelToken;
