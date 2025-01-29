import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users"
});

export default api;

export const getUsers = async () => {
    const response = await api.get("/");
    return response.data;
};

export const getUserById = async (id) => {
    const response = await api.get(`/${id}`);
    return response.data;
};

export const createUser = async (user) => {
    const response = await api.post("/", user);
    return response.data;
};








