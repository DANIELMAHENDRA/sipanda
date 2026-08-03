import api from "./api";

const serviceService = {

    getAll(params = {}) {
        return api.get("/service", {
            params,
        });
    },

    getById(id) {
        return api.get(`/service/${id}`);
    },

    create(data) {
        return api.post("/service", data);
    },

    update(id, data) {
        return api.put(`/service/${id}`, data);
    },

    delete(id) {
        return api.delete(`/service/${id}`);
    },

};

export default serviceService;