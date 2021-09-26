import axios from "axios";

const instance = axios.create({
    baseURL: "https://mama-mouv.vercel.app/",
});

export default instance;
