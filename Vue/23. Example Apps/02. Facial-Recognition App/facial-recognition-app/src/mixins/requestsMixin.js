const axios = require('axios');

const APIURL = 'http://localhost:3000';

export const requestsMixin = {
    methods: {
        getImages() {
            return axios.get(`${APIURL}/images`);
        },
        addImage(data) {
            return axios.post(`${APIURL}/images`, data);
        },
        editImage(data) {
            return axios.put(`${APIURL}/images/${data.id}`, data);
        },
        deleteImage(id) {
            return axios.delete(`${APIURL}/images/${id}`);
        }
    }
};