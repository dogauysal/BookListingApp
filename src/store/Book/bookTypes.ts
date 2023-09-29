import { IBook } from "../../models/IBook";

export enum bookActionTypes {
    BOOK_LIST_REQUEST = "BOOK_LIST_REQUEST",
    BOOK_LIST_SUCCESS = "BOOK_LIST_SUCCESS",
    BOOK_LIST_ERROR = "BOOK_LIST_ERROR"
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

export type BookActions =
    GetAllBooksRequest |
    GetAllBooksSuccess |
    GetAllBooksError;

export interface BookState {
    books: IBook[]
    error: string
}