import api from "./api";

const potentialService = {

    getAll(params = {}) {
        return api.get("/potential", {
            params,
        });
    },

    // Admin (berdasarkan ID)
    getById(id) {
        return api.get(`/potential/${id}`);
    },

    create(data) {
        return api.post("/potential", data);
    },

    update(id, data) {
        return api.put(`/potential/${id}`, data);
    },

    delete(id) {
        return api.delete(`/potential/${id}`);
    },

};

export default potentialService;