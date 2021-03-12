import http from "./http-common"

class VehicleService {
    getAll = () => {
        return http.get("/vehicles");
    }

    get = id => {
        return http.get(`/vehicles/${id}`);
    }

    create = data => {
        return http.post("/vehicles", data);
    }

    update = (id, data) => {
        return http.put(`/vehicles/${id}`, data);
    }

    remove = id => {
        return http.delete(`/vehicles/${id}`);
    }

    removeAll = () => {
        return http.delete(`/vehicles`);
    }

    findByVin = vin => {
        return http.get(`/vehicles?vin=${vin}`);
    }
}

export default new VehicleService()
