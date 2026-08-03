import api from "./api";

const settingService = {

    get() {
        return api.get("/settings");
    },

    update(data) {
        return api.put("/settings", data);
    },

};

export default settingService;