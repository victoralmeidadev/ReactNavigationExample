import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'

export class Principal extends Component {


    _goToScreenA = () => {
        this.props.navigation.navigate("ScreenA");
    }
    render() {
        return (
            <View>
                <Text> Principal </Text>
                <TouchableOpacity onPress={this.c}>
                    <Text>Ir para Screen A</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Principal;