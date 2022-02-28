import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';

import { McText } from 'Components'
import { dummyData } from 'Mock'
import { Images } from 'Constants'


const Lessons = ({ animatedStyle, navigation }) => {
    const theme = useTheme();
    return (
        <Animated.View
            style={{
                flex: 1,
                backgroundColor: theme.colors.background,
                ...animatedStyle
            }}
        >
            <View>
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
                    {
                        dummyData.Lessons?.map((item, index) => {
                            return (
                                <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate(item.name)
                                }}
                                    key={item.id}
                                    style={styles.box}
                                >
                                    <Image
                                        source={item.img}
                                        style={styles.imgStyle}
                                    />
                                    <McText
                                        semi
                                        size={12}
                                        color={theme.colors.text1}
                                        style={{
                                            marginTop: 5
                                        }}
                                    >
                                        {item.label}
                                    </McText>
                                </TouchableOpacity>
                            )
                        })
                    }
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 25,
        marginTop: 30
    },
    imgStyle: {
        width: 90,
        height: 90
    },
    box: {
        width: 112,
        paddingVertical: 7,
        paddingHorizontal: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: '#FFAC30',
        marginTop: 10
    }
})

export default Lessons;
