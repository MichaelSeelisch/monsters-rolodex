import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import { Route } from 'react-router-native';

import { Home } from './Home';
import { Dashboard } from './Dashboard';

export class ContentView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Route
                    path="/"
                    exact
                    component={ Home }
                />
                <Route
                    path="/dashboard"
                    component={ Dashboard }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});
