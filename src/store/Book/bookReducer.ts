import { BookActions, BookState, bookActionTypes } from "./bookTypes";

const initialState: BookState = {
    books: [],
    searchText: "",
    sortOrder: null,
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
        case bookActionTypes.SET_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.text
            }
        case bookActionTypes.CLEAR_SEARCH_TEXT:
            return {
                ...state,
                searchText: ""
            }
        case bookActionTypes.SET_SORT_ORDER:
            return {
                ...state,
                sortOrder: action.sortOrder
            }
        case bookActionTypes.CLEAR_SORT_ORDER:
            return {
                ...state
            }
        default:
            return state
    }
}

export default bookReducer