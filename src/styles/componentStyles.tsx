import { StyleSheet } from "react-native";

const headerStyles = StyleSheet.create({
    title: {
        fontSize: 24,
        textAlign: "center"
    }
})

const searchbarStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderWidth: 1,
        marginVertical: 10,
        borderRadius: 20,
        paddingLeft: 10,
        paddingVertical: 5
    },
    input: {
        flex: 1,
        marginLeft: 10,
        marginRight: 25,
        paddingVertical: 4,
    },
    searchIcon: {
        width: 24,
        height: 24
    },
    cancelIcon: {
        width: 18,
        height: 18,
    },
    cancelButton: {
        marginRight: 10,
    }
})

const bookItemStyles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 10,
        padding: 10,
        borderColor: "#CDC9C9"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    content: {
        marginTop: 5
    },
    detail: {
        fontSize: 16,
        lineHeight: 20
    }
})

const sortButtonStyles = StyleSheet.create({
    container: {
        borderWidth: 1,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        borderRadius: 15,
        marginHorizontal: 4
    },
    sortText: {
        fontSize: 16
    }
})

const sharedStyles = StyleSheet.create({
    row: {
        flexDirection: "row",
        marginBottom: 10
    }
})

export { headerStyles, searchbarStyles, bookItemStyles, sortButtonStyles, sharedStyles }