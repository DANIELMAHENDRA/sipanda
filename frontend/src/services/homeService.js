import api from "./api";

const homeService = {

    getProfile() {
        return api.get("/profile");
    },

    getNews() {
        return api.get("/news");
    },

    getGallery() {
        return api.get("/gallery");
    },

    getContact() {
        return api.get("/contact");
    },

        getGovernment() {
        return api.get("/government");
    },

    getPotential() {
        return api.get("/potential");
    },

};

export default homeService;