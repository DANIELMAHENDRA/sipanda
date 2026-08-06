import api from "./api";

const userService = {

    getAll(params = {}) {

        return api.get("/users", {
            params,
        });

    },

    getById(id) {

        return api.get(`/users/${id}`);

    },

    create(data) {

        return api.post("/users", data);

    },

    update(id, data) {

        return api.put(`/users/${id}`, data);

    },

    delete(id) {

        return api.delete(`/users/${id}`);

    },

    toggleStatus(id) {

        return api.patch(`/users/${id}/toggle-status`);

    },

    resetPassword(id) {

        return api.patch(`/users/${id}/reset-password`);

    },

};

export default userService;