import React from "react"
import { TouchableOpacity, Text, Image, ImageSourcePropType } from "react-native"
import { sortButtonStyles } from "../styles/componentStyles";

interface IProps {
    title: string
    onPress: () => void;
    imageSource: ImageSourcePropType
}

const SortButton: React.FC<IProps> = ({
    title,
    onPress,
    imageSource
}) => {

    return (
        <TouchableOpacity onPress={onPress} style={sortButtonStyles.container}>
            <Image source={imageSource} width={40} height={40} />
            <Text style={sortButtonStyles.sortText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default SortButton