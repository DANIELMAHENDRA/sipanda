import api from "./api";

const newsService = {

    getAll(params = {}) {
        return api.get("/news", {
            params,
        });
    },

    getById(id) {
        return api.get(`/news/${id}`);
    },

    create(data) {
        return api.post("/news", data);
    },

    update(id, data) {
        return api.put(`/news/${id}`, data);
    },

    delete(id) {
        return api.delete(`/news/${id}`);
    },

};

export default newsService;