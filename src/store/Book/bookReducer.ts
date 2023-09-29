import { BookActions, BookState, bookActionTypes } from "./bookTypes";

const initialState: BookState = {
    books: [],
    error: ""
}

const bookReducer = (state: BookState = initialState, action: BookActions): BookState => {
    switch (action.type) {
        case bookActionTypes.BOOK_LIST_REQUEST:
            return {
                ...state
            }
        case bookActionTypes.BOOK_LIST_SUCCESS:
            return {
                ...state,
                books: action.books
            }
        case bookActionTypes.BOOK_LIST_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default bookReducer