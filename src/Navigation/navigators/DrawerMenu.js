import React, { useState } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import Animated from 'react-native-reanimated'

import {
    Dashboard,
    Home,
    Tests,
    Lessons,
    Status,
    Settings,
    Help,
    Marketing,
    Question,
    GrammaryTest,
    RepitionTest,
} from 'Screens';
import { McText, } from 'Components'
import { Images } from 'Constants'

const Drawer = createDrawerNavigator();
const menus = [
    {
        name: 'Home',
        label: 'Home'
    },
    {
        name: 'Tests',
        label: 'Tests'
    },
    {
        name: 'Lessons',
        label: 'Lessons'
    },
    {
        name: 'Status',
        label: 'Status'
    },
    {
        name: 'Settings',
        label: 'Setting'
    },
    {
        name: 'Question',
        label: 'Question'
    },
    {
        name: 'Marketing',
        label: 'Marketing'
    },
    {
        name: 'Help',
        label: 'Help'
    },
]

const CustomDrawerContent = ({ navigation, theme }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const logout = async () => {
        try {
            await AsyncStorage.removeItem('token')
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <View style={{
            flex: 1
        }}>
            {/* Header */}
            <View style={{
                width: 210,
                height: 107,
                borderBottomEndRadius: 107 / 2,
                backgroundColor: theme.colors.background,
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        width: 44,
                        height: 44,
                        borderRadius: 22,
                        backgroundColor: theme.colors.boxBackground,
                        marginRight: 10
                    }}>
                        <Image source={Images.avatar1} />
                    </View>
                    <View>
                        <McText semi size={16} color={theme.colors.text1}>Carol Black</McText>
                        <McText medium size={10} color={theme.colors.text1}>Seattle, Washington</McText>
                    </View>
                </View>

            </View>

            {/* DrawerItems */}
            <DrawerContentScrollView
                scrollEnabled={false}
                contentContainerStyle={{}}
                style={{
                    marginLeft: -18,

                }}
            >
                {menus?.map((menu, index) => {
                    return (
                        <DrawerItem
                            activeTintColor={theme.colors.boxBackground}
                            focused={activeIndex === index}
                            onPress={() => {
                                navigation.navigate(menu.name)
                                setActiveIndex(index)
                            }}
                            key={index}
                            label={({ focused }) => {
                                return (
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center'
                                    }}>
                                        <View style={{
                                            width: 4,
                                            height: 33,
                                            marginRight: 26,
                                            backgroundColor: focused ? theme.colors.primary : 'transparent'
                                        }}></View>
                                        <McText
                                            size={16}
                                            bold={focused}
                                            color={theme.colors.text1}
                                        >
                                            {menu.label}
                                        </McText>
                                    </View>
                                )
                            }}
                        >

                        </DrawerItem>
                    )
                })}
            </DrawerContentScrollView>

            {/* Footer */}
            <View style={{ marginBottom: 27, marginLeft: 30 }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.closeDrawer()
                        navigation.navigate('Dashboard')
                        logout()
                    }}
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}>
                    <Image
                        source={Images.logout}
                        style={{
                            tintColor: theme.colors.text2,
                            marginRight: 8,
                        }} />
                    <McText bold size={16} color={theme.colors.text2}>Logout</McText>
                </TouchableOpacity>
                <View style={{ marginTop: 42 }}>
                    <McText medium size={10} color={theme.colors.text2}>Vertion 2.0.1</McText>
                </View>
            </View>
        </View>
    )
}

const DrawerMenu = () => {
    const [progress, setProgress] = useState(new Animated.Value(0))
    const theme = useTheme()

    const scale = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.75]
    })

    const rotate = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: ['0deg', '-10deg']
    })

    const borderRadius = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 30]
    })

    const animatedStyle = {
        borderRadius, transform: [{ scale, rotateZ: rotate }]
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: theme.colors.boxBackground
        }}>
            <Drawer.Navigator
                hideStatusBar={true}
                statusBarAnimation='slide'
                drawerType='slide'
                overlayColor='transparent'
                drawerStyle={{
                    flex: 1,
                    width: '60%',
                    backgroundColor: 'transparent',
                }}
                sceneContainerStyle={{
                    backgroundColor: 'transparent'
                }}
                initialRouteName='Home'
                drawerContent={(props) => {
                    setTimeout(() => {
                        setProgress(props.progress)
                    }, 0)

                    return (
                        <CustomDrawerContent
                            navigation={props.navigation}
                            theme={theme}
                        />
                    )
                }}
            >
                <Drawer.Screen name='Home'>
                    {(props) => <Home {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>
                <Drawer.Screen name='Tests'>
                    {(props) => <Tests {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>
                <Drawer.Screen name='Lessons'>
                    {(props) => <Lessons {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>
                <Drawer.Screen name='Status'>
                    {(props) => <Status {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>
                <Drawer.Screen name='Settings'>
                    {(props) => <Settings {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>
                <Drawer.Screen name='Help'>
                    {(props) => <Help {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>
                <Drawer.Screen name='Marketing'>
                    {(props) => <Marketing {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>
                <Drawer.Screen name='Question'>
                    {(props) => <Question {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>
                <Drawer.Screen name='GrammaryTest'>
                    {(props) => <GrammaryTest {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>
                <Drawer.Screen name='RepitionTest'>
                    {(props) => <RepitionTest {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}

export default DrawerMenu
