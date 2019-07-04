import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'

export class ScreenA extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack()}><Text>Voltar para principal</Text></TouchableOpacity>,
        }
    }
    render() {
        return (
            <View>
                <Text> ScreenA </Text>
            </View>
        )
    }
}

export default ScreenA;