import api from "./api";

const governmentService = {
    getAll(params = {}) {
        return api.get("/government", {
            params,
        });
    },

    getAdmin(params = {}) {
    return api.get("/admin/government", {
        params,
    });
},

    getById(id) {
        return api.get(`/government/${id}`);
    },

    create(formData) {
        return api.post(
            "/government",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
    },

    update(id, formData) {
        return api.put(
            `/government/${id}`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
    },

    delete(id) {
        return api.delete(`/government/${id}`);
    },
};

export default governmentService;