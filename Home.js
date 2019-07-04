import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    _goToPrincipal = () => {
        this.props.navigation.navigate("Principal");
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this._goToPrincipal}>
                    <Text>Ir para Principal</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Home;