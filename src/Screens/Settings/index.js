import React, { useContext, useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { View, Text, Switch, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Animated from 'react-native-reanimated';
import { useThemeContext } from 'Themes'

import { useTheme } from 'styled-components/native';
import { getUsers, userUpdate } from '../../Api'
import { GlobalState } from '../../GlobalState';
import { McText } from 'Components'
import { Images } from 'Constants'

const Settings = ({ animatedStyle }) => {
    const theme = useTheme();
    const themeContext = useThemeContext();
    const state = useContext(GlobalState)
    const [image, setImage] = useState(null);
    const [token] = state.token
    const [userData, setUserData] = useState({})

    const form = new FormData()

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result);
        }
    };

    useEffect(() => {
        const getUserData = () => {
            getUsers({ token })
                .then((res) => {
                    setUserData(res.data.data)
                })
                .catch((err) => {
                    console.log(err.message);
                })
        }
        getUserData()
    }, [])

    const updateUsers = () => {
        form.append({file: 'photo'}, image)

        console.log(form._parts[0]);

        userUpdate({ data: userData, token: token, photo: form._parts[0] })
            .then((res) => {
                console.log(res.data.data);
            })
            .catch((err) => {
                console.log(err.message);
            })

    }

    return (
        <Animated.View
            style={{
                flex: 1,
                backgroundColor: theme.colors.background,
                ...animatedStyle
            }}
        >
            <View style={styles.headContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Image source={Images.logo} style={{ marginRight: 10 }} />
                    <McText secondary size={28} color={theme.colors.text1} >eWallet</McText>
                </View>
                <Image source={
                    Images.union
                }
                    style={{
                        width: 19,
                        height: 19,
                        tintColor: theme.colors.text2
                    }}
                />
            </View>

            <View style={styles.container}>
                <View>
                    <TouchableOpacity
                        onPress={pickImage}
                        style={
                            styles.box
                        }>
                        {image ?
                            image.uri && <Image source={{ uri: image.uri }} style={styles.imgStyle} />
                            :
                            <Image source={Images.avatarUser1} style={styles.imgStyle} />}
                    </TouchableOpacity>
                </View>

                <View style={{
                    marginTop: 30,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                }}>
                    <TextInput
                        style={[styles.inputArea, {
                            color: theme.colors.text1,
                            borderColor: theme.colors.primary
                        }]}
                        value={userData.name}
                        onChangeText={(text) => {
                            setUserData({ ...userData, name: text })
                        }}
                        placeholder='Name'
                        placeholderTextColor={theme.colors.text3}
                    />

                    <TextInput
                        style={[styles.inputArea, {
                            color: theme.colors.text1,
                            borderColor: theme.colors.primary
                        }]}
                        value={(userData.username)}
                        onChangeText={(text) => {
                            setUserData({ ...userData, username: text })
                        }}
                        placeholder='User Name'
                        placeholderTextColor={theme.colors.text3}
                    />

                    <TextInput
                        style={[styles.inputArea, {
                            color: theme.colors.text1,
                            borderColor: theme.colors.primary
                        }]}
                        value={(userData.phone_number)}
                        onChangeText={(text) => {
                            setUserData({ ...userData, phone_number: text })
                        }}
                        placeholder='Phone Number'
                        placeholderTextColor={theme.colors.text3}
                    />

                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={updateUsers}
                >
                    <McText medium size={18} color={theme.colors.text1}>
                        Edit profile
                    </McText>
                </TouchableOpacity>

                <View style={{
                    width: '100%',
                    marginTop: 30
                }}>
                    <McText semi size={24} color={theme.colors.text1}>
                        Select Theme
                    </McText>

                    <View style={styles.themeButton}>
                        <TouchableOpacity
                            onPress={() => {
                                themeContext.setMode('dark')
                            }}
                            style={[
                                styles.buttonTheme,
                                {
                                    backgroundColor: themeContext.mode === 'dark' ? theme.colors.primary : 'transparent',
                                    borderWidth: themeContext.mode === 'dark' ? 0 : 1,
                                }
                            ]}>
                            <McText semi size={16} color={theme.colors.text1}>
                                Dark Theme
                            </McText>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                themeContext.setMode('light')
                            }}
                            style={[
                                styles.buttonTheme,
                                {
                                    backgroundColor: themeContext.mode === 'light' ? theme.colors.primary : 'transparent',
                                    borderWidth: themeContext.mode === 'light' ? 0 : 1,
                                }
                            ]} >
                            <McText semi size={16} color={theme.colors.text1}>
                                Light Theme
                            </McText>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    headContainer: {
        marginHorizontal: 25,
        marginTop: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
        marginTop: 20
    },
    imgStyle: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    box: {
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#FFAC30',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputArea: {
        width: 170,
        height: 45,
        padding: 6,
        borderRadius: 10,
        borderWidth: 1,
        marginVertical: 6,
        fontSize: 16
    },
    button: {
        width: 170,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginTop: 10,
        backgroundColor: '#FFAC30',
        borderRadius: 10
    },
    themeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30
    },
    buttonTheme: {
        width: 170,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#FFAC30'
    }
})


export default Settings;
