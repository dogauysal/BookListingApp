import { combineReducers } from "redux";
import Book from "./Book/bookReducer"

const rootReducer = combineReducers({
    Book: Book
})

export type RootState = ReturnType<typeof rootReducer>;

export default (state: RootState | undefined, action: any) => {
    return rootReducer(state, action)
}