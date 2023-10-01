import { put, call, takeLatest } from 'redux-saga/effects';
import BookService from "../../services/BookService";
import { bookActionTypes } from "./bookTypes";
import { IBookResponse } from "../../models/IBookResponse";

function* getAllBooks() {
    const response: IBookResponse = yield call(BookService.getAllBooks);

    if (response) {
        yield put({
            type: bookActionTypes.BOOK_LIST_SUCCESS,
            books: response.books
        })
    } else {
        yield put({
            type: bookActionTypes.BOOK_LIST_ERROR,
            error: "Kitapları listelerken bir hata oluştu"
        })
    }
}

function* bookSaga() {
    yield takeLatest(bookActionTypes.BOOK_LIST_REQUEST, getAllBooks)
}

export default bookSaga