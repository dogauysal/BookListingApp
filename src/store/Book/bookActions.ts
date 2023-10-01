import { SortingType } from "../../enums/SortingType";
import { bookActionTypes } from "./bookTypes";

export const GetAllBooks = () => ({
    type: bookActionTypes.BOOK_LIST_REQUEST
})

export const SetSearchText = (text: string) => ({
    type: bookActionTypes.SET_SEARCH_TEXT,
    text
})

export const ClearSearchText = () => ({
    type: bookActionTypes.CLEAR_SEARCH_TEXT
})

export const SetSortOrder = (sortingType: SortingType) => ({
    type: bookActionTypes.SET_SORT_ORDER,
    sortingType
})

export const ClearSortOrder = () => ({
    type: bookActionTypes.CLEAR_SORT_ORDER
})