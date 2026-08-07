import api from "./api";

const galleryService = {

    getAll(params = {}) {
        return api.get("/gallery", {
            params,
        });
    },

    getById(id) {
        return api.get(`/gallery/${id}`);
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

        return api.post(
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