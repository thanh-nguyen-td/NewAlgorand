import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    ViewHead: {
        flex: 1
    },
    ViewImages: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: Dimensions.get('window').height / 6
    },
    ViewImage: {
        height: 50,
        width: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10
    },
    image: {
        height: 30,
        width: 30
    },
    ViewText: {
        marginTop: Dimensions.get('window').height / 30,
        justifyContent: 'center'
    },
    Enable: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center'
    },
    we: {
        fontSize: 16,
        width: Dimensions.get('window').width * 4 / 5,
        textAlign: 'center',
        marginTop: Dimensions.get('window').height / 40
    },
    ViewBody: {
        flex: 1
    },
    touch: {
        backgroundColor: 'pink',
        height: Dimensions.get('window').height / 14,
        width: Dimensions.get('window').width * 5 / 6,
        borderRadius: 25,
        marginTop: Dimensions.get('window').height / 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextTouch: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '500'
    }
})