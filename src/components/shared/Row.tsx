import React, { ReactNode } from "react"
import { View } from "react-native"
import { sharedStyles } from "../../styles/componentStyles"

interface IProps {
    children: ReactNode
}


const Row: React.FC<IProps> = ({
    children
}) => {

    return (
        <View style={sharedStyles.row}>
            {children}
        </View>
    )
}

export default Row