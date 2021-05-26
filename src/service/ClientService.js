import axios from 'axios'

const AUTOSERVICE_API = 'http://localhost:8080/AutoService'

class ClientService {
    getAllClients() {
        return axios.get(`${AUTOSERVICE_API}/clients`);
    }
}

export default new ClientService()
