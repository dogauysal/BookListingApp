import { API_URL } from "../constants"
import { IBook } from "../models/IBook"
import HttpClient from "../utils/HttpClient"

class BookService {
    getAllBooks = async () => {
        const response = await HttpClient.get<IBook[]>(API_URL);

        return response
    }
}

export default new BookService()