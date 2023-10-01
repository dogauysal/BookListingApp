import { SortingType } from "../../enums/SortingType";
import { IBook } from "../../models/IBook";

export enum bookActionTypes {
    BOOK_LIST_REQUEST = "BOOK_LIST_REQUEST",
    BOOK_LIST_SUCCESS = "BOOK_LIST_SUCCESS",
    BOOK_LIST_ERROR = "BOOK_LIST_ERROR",
    SET_SEARCH_TEXT = "SET_SEARCH_TEXT",
    CLEAR_SEARCH_TEXT = "CLEAR_SEARCH_TEXT",
    SET_SORT_ORDER = "SET_SORT_ORDER",
    CLEAR_SORT_ORDER = "CLEAR_SORT_ORDER"
}

export interface GetAllBooksRequest {
    type: bookActionTypes.BOOK_LIST_REQUEST
}

export interface GetAllBooksSuccess {
    type: bookActionTypes.BOOK_LIST_SUCCESS;
    books: IBook[]
}

export interface GetAllBooksError {
    type: bookActionTypes.BOOK_LIST_ERROR;
    error: string
}

export interface SetSearchText {
    type: bookActionTypes.SET_SEARCH_TEXT
    text: string;
}

export interface ClearSearchText {
    type: bookActionTypes.CLEAR_SEARCH_TEXT
}

export interface SetSortOrder {
    type: bookActionTypes.SET_SORT_ORDER
    sortingType: SortingType
}

export interface ClearSortOrder {
    type: bookActionTypes.CLEAR_SORT_ORDER
}

export type BookActions =
    GetAllBooksRequest |
    GetAllBooksSuccess |
    GetAllBooksError |
    SetSearchText |
    ClearSearchText |
    SetSortOrder |
    ClearSortOrder;

export interface BookState {
    books: IBook[]
    error: string
    searchText: string
    sortingType: SortingType | null
}