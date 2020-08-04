import React from 'react';
import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    manage: {
        width: 200,
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center'
    },
    body: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 30
    },
    touch: {
        backgroundColor: 'pink',
        height: Dimensions.get('window').height / 14,
        width: '100%', borderRadius: 25,
        marginTop: Dimensions.get('window').height / 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Accout: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 16
    }
})