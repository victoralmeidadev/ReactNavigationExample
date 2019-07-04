import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'

export class ScreenB extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack()}><Text>Voltar para screenA</Text></TouchableOpacity>,
        }
    }
    render() {
        return (
            <View>
                <Text> ScreenB </Text>
            </View>
        )
    }
}

export default ScreenB;