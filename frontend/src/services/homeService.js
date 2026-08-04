import api from "../../../services/api";

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

};

export default homeService;