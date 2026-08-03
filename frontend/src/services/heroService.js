import api from "./api";

const heroService = {

    get(page) {
        return api.get(`/hero-sections/${page}`);
    },

    update(page, data) {
        return api.put(`/hero-sections/${page}`, data);
    },

};

export default heroService;