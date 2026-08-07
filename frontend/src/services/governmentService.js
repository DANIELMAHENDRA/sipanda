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
        formData.append("_method", "PUT");

        return api.post(
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