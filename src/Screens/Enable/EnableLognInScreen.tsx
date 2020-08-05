import React, { useEffect, useState } from 'react'
import { View, Text, Image, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Images } from '@assets'
import styles from './EnableLognInStyle'
import { TouchableOpacity } from 'react-native-gesture-handler'
import TouchID from 'react-native-touch-id'

export const EnableLognIn = () => {
    const[supported,setSupported]= useState(null)
    useEffect(()=>{
        TouchID.isSupported()
        .then( sucesso =>{
            setSupported(true);
            alert('Touch ID support');
        })
        .catch((error) =>{
            console.log('error touch',error);
            alert('Touch ID no support');
        })
    },[])
    function handleLogin() {
        const configs = {
            title:'Authenicacao Touch ID',
            color:'#ff0000',
            sensorErrorDescription:'Touch ID invalido'
        };
        TouchID.authenticate('Login App', configs)
        .then( sucess =>{
            alert('Athenicate successful');
            
        })
        .catch((error) =>{
            alert('Athenicate failed')
        })
    }

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
                <TouchableOpacity style={styles.touch} onPress={handleLogin}>
                    <Text style={styles.TextTouch}>Enable Face ID/Touch</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

