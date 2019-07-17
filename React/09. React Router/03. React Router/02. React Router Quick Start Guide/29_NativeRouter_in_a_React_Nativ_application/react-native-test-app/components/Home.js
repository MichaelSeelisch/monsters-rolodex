import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export class Home extends Component {
    render() {
        return (
            <View>
                <Text style={style.largeText}>
                    In HomeComponent
                </Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    largeText: {
        fontSize: 30
    }
});
