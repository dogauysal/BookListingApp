import { all } from "redux-saga/effects";
import bookSaga from "./Book/bookSaga";

export function* rootSaga() {
    yield all([
        bookSaga()
    ])
}