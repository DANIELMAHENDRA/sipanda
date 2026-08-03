import api from "./api";

const contactService = {

    get() {
        return api.get("/contact");
    },

    update(data) {
        return api.put("/contact", data);
    },

};

export default contactService;