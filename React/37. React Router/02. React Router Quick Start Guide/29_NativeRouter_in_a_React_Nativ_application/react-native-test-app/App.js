import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import {
    NativeRouter,
    BackButton
} from 'react-router-native';
import SideMenu from 'react-native-side-menu';

import { Menu } from './components/Menu';
import { ContentView } from './components/ContentView';

export default class App extends Component {
    render() {
        const menu = <Menu />;
        const initialEntries = [
            '/' ,
            {
                 pathname: '/dashboard',
                 search: '',
                 hash: 'test',
                 state: { from: '/'}
            }];
        const initialIndex = 1;

        return (
            <NativeRouter
                initialEntries={ initialEntries }
                initialIndex={ initialIndex }>
                <View style={styles.container}>
                    <BackButton />
                    <SideMenu menu={menu}>
                        <ContentView />
                    </SideMenu>
                </View>
            </NativeRouter>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#ff0000'
    }
});
