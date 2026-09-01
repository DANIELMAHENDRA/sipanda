import api from "./api";

const galleryService = {
    getAll(params = {}) {
        return api.get("/gallery", {
            params,
        });
    },

    getAdmin(params = {}) {
        return api.get("/admin/gallery", {
            params,
        });
    },

    getStatistics() {
        return api.get("/gallery/statistics");
    },

    getById(id) {
        return api.get(`/gallery/${id}`);
    },

    getAdminById(id) {
        return api.get(`/admin/gallery/${id}`);
    },

    create(data) {
        return api.post(
            "/gallery",
            data,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
    },

    update(id, data) {
        return api.put(
            `/gallery/${id}`,
            data,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
    },

    delete(id) {
        return api.delete(`/gallery/${id}`);
    },
};

export default galleryService;