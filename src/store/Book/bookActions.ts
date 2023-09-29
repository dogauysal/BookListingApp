import { bookActionTypes } from "./bookTypes";

export const GetAllBooks = () => ({
    type: bookActionTypes.BOOK_LIST_REQUEST
})