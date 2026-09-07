import api from "./api";

const potentialService = {
    getAll(params = {}) {
        return api.get("/potential", {
            params,
        });
    },

    getAdmin(params = {}) {
        return api.get("/admin/potential", {
            params,
        });
    },

    getById(id) {
        return api.get(`/potential/${id}`);
    },

    create(data) {
        return api.post("/potential", data);
    },

    update(id, data) {
        return api.post(`/potential/${id}`, data);
    },

    delete(id) {
        return api.delete(`/potential/${id}`);
    },
};

export default potentialService;