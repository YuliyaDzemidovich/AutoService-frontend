import axios from 'axios'

const AUTOSERVICE_API = 'http://localhost:8080/AutoService'

class VehicleService {
    getAllVehicles() {
        return axios.get(`${AUTOSERVICE_API}/vehicles`);
    }
}

export default new VehicleService()
