import React, { useContext, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GlobalState } from '../../GlobalState'

import {
    Dashboard,
    Home,
    Tests,
    Lessons,
    Status,
    Settings,
    Help,
    SignIn,
    SignUp,
    Marketing,
    Question,
    GrammaryTest,
    RepitionTest,
} from 'Screens';
import DrawerMenu from './DrawerMenu';

const Stack = createStackNavigator();
const Stacks = ({ params }) => {
    const state = useContext(GlobalState)
    const [token] = state.token
    
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={ token ? DrawerMenu : Dashboard}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Marketing"
                component={Marketing}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Question"
                component={Question}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Tests"
                component={Tests}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Lessons"
                component={Lessons}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Status"
                component={Status}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Help"
                component={Help}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="GrammaryTest"
                component={GrammaryTest}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="RepitionTest"
                component={RepitionTest}
                options={{
                    headerShown: false,
                }}
            />

        </Stack.Navigator>
    )
}

export default Stacks;
