import { View, Text } from "react-native"
import { IBook } from "../models/IBook"
import { bookItemStyles } from "../styles/componentStyles"

interface IProps {
    book: IBook
}

const BookItem: React.FC<IProps> = ({
    book
}) => {

    return (
        <View style={bookItemStyles.container}>
            <Text style={bookItemStyles.title}>{book.title}</Text>
            <View style={bookItemStyles.content}>
                <Text style={bookItemStyles.detail}>{book.author}</Text>
                <Text style={bookItemStyles.detail}>{book.publicationYear}</Text>
            </View>
        </View>
    )
}



export default BookItem