import { useCallback, useEffect, useMemo } from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { GetAllBooks, SetSortOrder } from "../store/Book/bookActions"
import * as SplashScreen from 'expo-splash-screen';
import { RootState } from "../store/rootReducer";
import { IBook } from "../models/IBook";
import BookItem from "../components/BookItem";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import { mainStyles } from "../styles/screenStyles";
import SortButton from "../components/SortButton";
import Row from "../components/shared/Row";
import { SortOrder } from "../enums/SortOrder";


const MainScreen = () => {

    const dispatch = useDispatch()

    const books = useSelector<RootState, IBook[]>(state => state.Book.books)
    const searchText = useSelector<RootState, string>(state => state.Book.searchText)
    const sortOrder = useSelector<RootState, SortOrder | null>(state => state.Book.sortOrder)




    useEffect(() => {
        prepareApp()
    }, [])

    const prepareApp = async () => {
        try {
            dispatch(GetAllBooks())
        }
        catch (e) {
            console.log(e)
        }
        finally {
            setTimeout(() => {
                SplashScreen.hideAsync()
            }, 1000);
        }
    }

    const renderItem = ({ item }: { item: IBook }) => <BookItem book={item} />

    const SortBooks = (order: SortOrder) => {
        dispatch(SetSortOrder(order))
    }

    const sortFilteredBooks = useCallback((booksToBeSorted: IBook[]) => {

        const sortedBooks = [...booksToBeSorted]

        if (sortOrder) {
            if (sortOrder === SortOrder.ASC) {
                sortedBooks.sort((a, b) => a.publicationYear - b.publicationYear);
            } else {
                sortedBooks.sort((a, b) => b.publicationYear - a.publicationYear);
            }
        }


        return sortedBooks
    }, [sortOrder])


    const filteredBooks = useMemo(() => {
        return sortFilteredBooks(books.filter((book) => book.title.toLowerCase().includes(searchText.toLowerCase()) || book.author.toLowerCase().includes(searchText.toLowerCase())))
    }, [sortOrder, searchText, books])

    return (
        <View style={mainStyles.container}>
            <Header title={"Book Listing App"} />
            <SearchBar />
            <Row>
                <SortButton title="Ascending" imageSource={require("../assets/icons/ascending.png")} onPress={() => SortBooks(SortOrder.ASC)} />
                <SortButton title="Descending" imageSource={require("../assets/icons/descending.png")} onPress={() => SortBooks(SortOrder.DESC)} />
            </Row>
            <FlatList
                data={filteredBooks}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
            />
        </View>

    )
}

export default MainScreen