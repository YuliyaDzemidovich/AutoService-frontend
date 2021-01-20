import axios from 'axios'

const BOOK_STORE_API = 'http://localhost:8080/bookStore'

class BookDataService {
    getAllBooks() {
        return axios.get(`${BOOK_STORE_API}/books`);
    }
}

export default new BookDataService()