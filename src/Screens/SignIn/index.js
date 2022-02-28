import React, { useState, useContext } from 'react'
import { View, Dimensions, Image, TextInput, StyleSheet } from 'react-native'

import { useTheme } from 'styled-components/native'
import { McText } from 'Components'
import { Images } from 'Constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { GlobalState } from '../../GlobalState'

const { width, height } = Dimensions.get('window');

const SignIn = ({ navigation }) => {
    const [userLogin, setUserLogin] = useState()
    const [userPassword, setUserPassword] = useState()

    const state = useContext(GlobalState)
    const [clocks] = state.clocks
    const [week] = state.week

    const theme = useTheme()
    return (
        <View>
            <View style={{
                flexDirection: 'row'
            }}>
                <Image source={Images.color_bar} style={{
                    height: height + 45
                }} />
                <View style={{
                    marginTop: 44,
                    marginHorizontal: 26,
                    marginBottom: 53,
                    justifyContent: 'space-between'
                }}>
                    <View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>

                            <McText medium size={24} color={theme.colors.text1}>{clocks}</McText>
                        </View>
                        <McText medium size={13} color={theme.colors.text3} style={{
                            marginTop: 7
                        }}>
                            {week}
                        </McText>
                    </View>

                    <View>
                        <TextInput
                            style={[styles.inputStyle, {
                                borderColor: theme.colors.primary,
                                color: theme.colors.text1
                            }]}
                            value={userLogin}
                            placeholderTextColor={theme.colors.text3}
                            placeholder='User Login'
                        />
                        <TextInput
                            style={[styles.inputStyle, {
                                borderColor: theme.colors.primary,
                                color: theme.colors.text1
                            }]}
                            value={userPassword}
                            placeholderTextColor={theme.colors.text3}
                            placeholder='User Password'
                            secureTextEntry={true}
                        />

                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Home')
                            }}
                            style={{
                                width: 220,
                                height: 50,
                                marginTop: 10,
                                borderRadius: 10,
                                backgroundColor: theme.colors.primary,
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row'
                            }}>
                            <McText semi size={16} color="#212330">Sign in</McText>
                            <Image source={Images.right_arrow} style={{
                                marginLeft: 8
                            }} />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <View style={{
                            alignContent: 'space-between',
                            width: 210
                        }}>
                            <McText
                                medium size={14}
                                color={theme.colors.text3}
                                style={{
                                    lineHeight: 22
                                }} >
                                Open An Accaunt For Digital E-Wallet Solution Instant Payouts
                            </McText>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('SignUp')
                            }}
                            style={{
                                height: 46,
                                width: 216,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 20,
                                borderWidth: 2,
                                borderColor: theme.colors.primary,
                                borderRadius: 10
                            }}>
                            <McText semi size={16} color={theme.colors.text1} >
                                CreateAccaunts
                            </McText>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        width: 216,
        height: 46,
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 2,
        paddingHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SignIn
