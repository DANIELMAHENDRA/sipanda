import api from "./api";

const activityLogService = {

    getAll(params = {}) {

        return api.get("/activity-logs", {
            params,
        });

    },

    getById(id) {

        return api.get(`/activity-logs/${id}`);

    },

};

export default activityLogService;