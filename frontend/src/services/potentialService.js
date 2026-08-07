import api from "./api";

const potentialService = {
    getAll(params = {}) {
        return api.get("/potential", {
            params,
        });
    },

    getById(id) {
        return api.get(`/potential/${id}`);
    },

    create(data) {
        return api.post("/potential", data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    },

    update(id, data) {
        return api.post(`/potential/${id}`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    },

    delete(id) {
        return api.delete(`/potential/${id}`);
    },
};

export default potentialService;