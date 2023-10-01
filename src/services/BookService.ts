import { API_URL } from "../constants"
import { IBookResponse } from "../models/IBookResponse";
import HttpClient from "../utils/HttpClient"

class BookService {
    getAllBooks = async () => {
        const response = await HttpClient.get<IBookResponse[]>(API_URL);

        return response
    }
}

export default new BookService()