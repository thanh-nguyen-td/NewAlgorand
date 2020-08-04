import React from 'react'
import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Images } from '@assets'
import styles from './EnableLognInStyle'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const EnableLognIn = () => {
    return (
        <View style={styles.container}>
            <View style={styles.ViewHead}>
                <View style={styles.ViewImages}>
                    <View style={styles.ViewImage}>
                        <Image source={Images.faceId} style={styles.image} />
                    </View>
                    <View style={styles.ViewImage}>
                        <Image source={Images.touchId} style={styles.image} />
                    </View>
                </View>
                <View style={styles.ViewText}>
                    <Text style={styles.Enable}>Enable Face ID/Touch</Text>
                    <Text style={styles.we}>We recommend thisd for improved security</Text>
                </View>
            </View>
            <View style={styles.ViewBody}>
                <TouchableOpacity style={styles.touch}>
                    <Text style={styles.TextTouch}>Enable Face ID/Touch</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

