import api from "./api";

const governmentService = {

    getAll(params = {}) {
        return api.get("/government", {
            params,
        });
    },

    getById(id) {
        return api.get(`/government/${id}`);
    },

    create(data) {
        return api.post("/government", data);
    },

    update(id, data) {
        return api.put(`/government/${id}`, data);
    },

    delete(id) {
        return api.delete(`/government/${id}`);
    },

};

export default governmentService;