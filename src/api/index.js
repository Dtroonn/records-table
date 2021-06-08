import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5555/api/records',
});

export const recordsAPI = {
    getAll() {
        return axiosInstance.get();
    },

    create(data) {},

    update(data) {},

    delete(id) {},
};
