import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Link } from 'react-router-native';

export class Menu extends Component {
    render() {
        return (
            <ScrollView
                scrollsToTop={ false }
                style={ styles.menu }>
                <View>
                    <Link to="/">
                        <Text>Home</Text>
                    </Link>
                    <Link to="/dashboard">
                        <Text>Dashboard</Text>
                    </Link>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: window.width,
        height: window.height,
        backgroundColor: 'lightblue',
        padding: 20,
        marginTop: 30
    }
});
