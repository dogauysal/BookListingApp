import { useRef } from "react"
import { TextInput, View, Image, TouchableOpacity } from "react-native"
import { searchbarStyles } from "../styles/componentStyles"
import { useDispatch } from "react-redux"
import { ClearSearchText, SetSearchText } from "../store/Book/bookActions"
import _ from "lodash"

const SearchBar = () => {

    const searchInputRef = useRef<TextInput>(null)

    const dispatch = useDispatch()

    const debouncedSearch = _.debounce(onFilterBooks, 300)

    function onFilterBooks(text: string) {
        dispatch(SetSearchText(text))
    }

    const handleSearchBarChange = (text: string) => {
        debouncedSearch(text)
    }

    const clear = () => {
        searchInputRef.current?.clear()
        dispatch(ClearSearchText())
    }

    return (
        <View style={searchbarStyles.container}>
            <Image source={require("../assets/icons/search.png")} style={searchbarStyles.searchIcon} />
            <TextInput
                ref={searchInputRef}
                placeholder="Arama Yap"
                style={searchbarStyles.input}
                onChangeText={handleSearchBarChange}
                autoComplete="off"
                autoCorrect={false}
                autoCapitalize="none"
            />
            <TouchableOpacity style={searchbarStyles.cancelButton} onPress={clear}>
                <Image source={require("../assets/icons/cancel.png")} style={searchbarStyles.cancelIcon} />
            </TouchableOpacity>
        </View>
    )
}

export default SearchBar