import axios from 'axios'

const AUTOSERVICE_API = 'http://localhost:8080'

class OrderService {
    getAllOrders() {
        return axios.get(`${AUTOSERVICE_API}/orders`);
    }
}

export default new OrderService()
