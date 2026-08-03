import api from "./api";

const profileService = {

    get() {
        return api.get("/profile");
    },

    update(data) {
        return api.put("/profile", data);
    },

};

export default profileService;