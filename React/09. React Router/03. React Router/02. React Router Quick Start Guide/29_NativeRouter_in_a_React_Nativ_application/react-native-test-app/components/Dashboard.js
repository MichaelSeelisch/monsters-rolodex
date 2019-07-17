import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Prompt } from 'react-router';

export class Dashboard extends Component {
    render() {
        return (
            <View>
                <Text style={style.largeText}>
                    In DashboardComponent
                </Text>
                <Prompt message="Are you sure?" />
            </View>
        )
    }
}

const style = StyleSheet.create({
    largeText: {
        fontSize: 30
    }
});
