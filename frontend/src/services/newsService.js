import api from "./api";

const newsService = {

    /*
    |--------------------------------------------------------------------------
    | PUBLIC
    |--------------------------------------------------------------------------
    */

    getAll(params = {}) {
        return api.get("/news", {
            params,
        });
    },

    getById(id) {
        return api.get(`/news/${id}`);
    },


    /*
    |--------------------------------------------------------------------------
    | ADMIN
    |--------------------------------------------------------------------------
    */

    getAdminAll(params = {}) {
        return api.get("/admin/news", {
            params,
        });
    },

    getAdminById(id) {
        return api.get(`/admin/news/${id}`);
    },


    /*
    |--------------------------------------------------------------------------
    | CREATE
    |--------------------------------------------------------------------------
    */

    create(data) {

        return api.post(
            "/news",
            data,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

    },


    /*
    |--------------------------------------------------------------------------
    | UPDATE
    |--------------------------------------------------------------------------
    */

    update(id, data) {

        /*
        | Laravel membutuhkan method spoofing
        | ketika upload file menggunakan FormData.
        */

        if (!data.has("_method")) {
            data.append("_method", "PUT");
        }

        return api.post(
            `/news/${id}`,
            data,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

    },


    /*
    |--------------------------------------------------------------------------
    | DELETE
    |--------------------------------------------------------------------------
    */

    delete(id) {

        return api.delete(
            `/news/${id}`
        );

    },

};

export default newsService;