import api from "./api";

const newsService = {

    getAll(params = {}) {
        return api.get("/news", { params });
    },

    getById(id) {
        return api.get(`/news/${id}`);
    },

    create(data) {
        return api.post("/news", data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    },

    update(id, data) {
        data.append("_method", "PUT");

        return api.post(`/news/${id}`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    },

    delete(id) {
        return api.delete(`/news/${id}`);
    },

};

export default newsService;