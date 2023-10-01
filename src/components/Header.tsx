import React from "react"
import { Text } from "react-native"
import { headerStyles } from "../styles/componentStyles"

interface IProps {
    title: string
}

const Header: React.FC<IProps> = ({
    title
}) => {

    return <Text style={headerStyles.title}>{title}</Text>
}


export default Header;