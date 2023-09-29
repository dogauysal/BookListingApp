import { useEffect } from "react"
import { FlatList, View, Text, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { GetAllBooks } from "../store/Book/bookActions"

const MainScreen = () => {

    return (
        <View style={styles.container}>
            <Text>Hello World</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default MainScreen