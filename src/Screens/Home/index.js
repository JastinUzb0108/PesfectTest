import React from 'react';
import { View, Image, TouchableOpacity, FlatList } from 'react-native';
import Animated from 'react-native-reanimated';
import styled, { useTheme } from 'styled-components/native';

import { McText } from 'Components'
import { Images } from 'Constants'
import { dummyData } from 'Mock'

const Home = ({ animatedStyle }) => {
    const theme = useTheme();
    return (
        <Animated.View
            style={{
                flex: 1,
                // justifyContent: 'center',
                // alignItems: 'center',
                backgroundColor: theme.colors.background,
                paddingTop: 38,
                ...animatedStyle
            }}
        >
            {/* Header */}
            <HeaderSction>
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
            </HeaderSction>

            {/* Accaunt Overview */}
            <HeaderSction style={{ marginTop: 50 }}>
                <McText semi size={16} color={theme.colors.text2}>
                    Accaunt Overview
                </McText>
            </HeaderSction>
            <View style={{
                marginHorizontal: 25,
                marginTop: 20,
                height: 116,
                backgroundColor: theme.colors.boxBackground,
                borderRadius: 12,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <View style={{
                    marginLeft: 25
                }}>
                    <McText semi size={24} color={theme.colors.text1} style={{
                        lineHeight: 30,
                        marginBottom: 8
                    }}>20,600</McText>
                    <McText size={24} color={theme.colors.text3} >Current balance</McText>
                </View>
                <TouchableOpacity style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    backgroundColor: theme.colors.primary,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 25
                }}>
                    <Image source={Images.plus} />
                </TouchableOpacity>
            </View>

            {/* Send Money */}
            <HeaderSction style={{ marginTop: 40 }}>
                <McText semi size={16} color={theme.colors.text2}>
                    Send Monay
                </McText>
                <Image source={Images.scan}
                    style={{
                        width: 24,
                        height: 24,
                        tintColor: theme.colors.text2
                    }}
                />
            </HeaderSction>

            <View>
                <FlatList
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={dummyData.SendMoneyRecords}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{
                                marginTop: 20,
                                marginLeft: index === 0 ? 25 : 0,
                                marginRight: index === dummyData.SendMoneyRecords.length - 1 ? 0 : 10
                            }}>
                                {index === 0 ? (
                                    <TouchableOpacity style={{
                                        width: 52,
                                        height: 120,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <View style={{
                                            width: 52,
                                            height: 52,
                                            borderRadius: 26,
                                            backgroundColor: theme.colors.primary,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <Image source={item.img} />
                                        </View>
                                    </TouchableOpacity>
                                ) : (
                                    <View style={{
                                        width: 110,
                                        height: 120,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: theme.colors.boxBackground,
                                        borderRadius: 12
                                    }}>
                                        <View style={{
                                            width: 42,
                                            height: 42,
                                            borderRadius: 21,
                                            borderWidth: 1,
                                            borderColor: 'rgba(58, 66, 118, 0.2)',
                                            backgroundColor: theme.colors.boxBackground,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }} >
                                            <Image source={item.avatar} />
                                        </View>
                                        <McText size={16} color={theme.colors.text3} style={{
                                            marginTop: 16
                                        }}>{item.name}</McText>
                                    </View>
                                )}
                            </View>
                        )
                    }}
                />
            </View>

            {/* Services */}
            <HeaderSction style={{ marginTop: 40 }}>
                <McText semi size={16} color={theme.colors.text2}>
                    Services
                </McText>
                <Image source={Images.filter}
                    style={{
                        width: 24,
                        height: 24,
                        tintColor: theme.colors.text2
                    }}
                />
            </HeaderSction>

            <View>
                <View style={{
                    marginTop: 20,
                    marginHorizontal: 25,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap'
                }}>
                    {dummyData.Services?.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={item.id}
                                style={{
                                    height: 96,
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    marginLeft: (index === 0 || index === 4) ? 0 : 28,
                                    marginTop: index > 3 ? 20 : 0
                                }}
                            >
                                <View
                                    style={{
                                        width: 65,
                                        height: 65,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 12,
                                        backgroundColor: theme.colors.boxBackground,
                                    }}>
                                    <Image source={item.img} />
                                </View>
                                <McText
                                    semi
                                    size={10}
                                    color={theme.colors.text3}
                                    style={{
                                        marginTop: 6,
                                        width: 52,
                                        textAlign: 'center'
                                    }}>{item.name}</McText>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
        </Animated.View>
    );
};

const HeaderSction = styled.View`
    margin: 0px 25px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export default Home;
