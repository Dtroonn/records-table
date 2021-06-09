import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5555/api/records/',
});

export const recordsAPI = {
    getAll() {
        return axiosInstance.get();
    },

    create(data) {
        return axiosInstance.post('', data);
    },

    update(data) {
        return axiosInstance.put('', data);
    },

    delete(id) {
        return axiosInstance.delete(`${id}`);
    },
};
