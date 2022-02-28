import React, { useState, useEffect, createContext } from 'react';
import { ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';

import { AppNavigator } from 'Navigation';
import ThemeManager from 'Themes';
import { Fonts } from 'Constants';
import { DataProvider } from './GlobalState';

const App = ({ params }) => {
    const [assetsLoaded, setAssetsLoaded] = useState(false);

    // const state = createContext(GlobalState);
    // const [token, setToken] = state.token;
    // const [isLoading, setIsLoading] = state.isLoading;

    // useEffect(() => {
    //     setTimeout(async() => {
    //         setIsLoading(false)
    //         try {
    //             const value = await AsyncStorage.getItem('token')
    //             if (value !== null) {
    //                 setToken(value)
    //             }
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }, 1000)
    // }, [token])

    /* Loading custom fonts in async */
    const _loadAssetsAsync = async () => {
        await Font.loadAsync(Fonts.customFonts);
        setAssetsLoaded(true);
    };

    useEffect(() => {
        _loadAssetsAsync();
    });

    return assetsLoaded ? (
        <ThemeManager>
            <DataProvider>
                <AppNavigator />
            </DataProvider>
        </ThemeManager>
    ) : (
        <ActivityIndicator size="small"></ActivityIndicator>
    );
};

export default App;
