import React from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native'
import styles from './LognInStyle'
import { ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from 'react-native-screens/native-stack/types'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export interface LognInProps {
    navigation: NativeStackNavigationProp<ParamListBase>;
}

export const LognIn: React.FunctionComponent<LognInProps> = (
    props: LognInProps,

) => {
    const { navigation } = props
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>

            </View>
            <View style={styles.body}>
                <Text style={styles.manage}>Manage all assets from one app</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('EnableLognIn')}
                    style={[styles.touch, { marginTop: Dimensions.get('window').height / 15, }]}>
                    <Text style={styles.Accout}>Create Accout</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.touch, { marginTop: 20 }]}>
                    <Text style={styles.Accout}>Pair Ledger Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}