import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
const { width, height } = Dimensions.get('window');
import {useDispatch} from 'react-redux'
import * as actionTypes from '../redux/actions/actionTypes'
const itemProduct = ({item}) => {


    //const dispatch = useDispatch();    // <--- invalied hook call


    return (
        <TouchableOpacity activeOpacity = {0.9} style={styles.container}>
            {/* header */}
            <View style={styles.header}>
                <TouchableOpacity activeOpacity={0.9} style={styles.removeButton} >
                    <Text style = {styles.removeButtonText}>X</Text>
                </TouchableOpacity>
            </View>
            <Image resizeMode='stretch' source={{ uri: item.image }} style={styles.image} />
            {/* footer */}
            <View style={styles.content}>
                <Text style = {styles.textTitle}>{item.title}</Text>
                <View style = {styles.containerPrice}>
                    <Text style={styles.textPrice} >{item.price}</Text>                   
               </View>
            </View>
        </TouchableOpacity>
    )
}

export default itemProduct

const styles = StyleSheet.create({
    container: {
        width: width - width/5,
        height: height/2 + 130, 
        alignItems: 'center',             
        marginVertical: 10
    },
    image: {
        width: width - width / 5,
        height: height / 2,       
    },
    content: {
        width: width - width / 5,
        height: 100,
        backgroundColor: '#00897b',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        paddingHorizontal: 8
    },
    textTitle: {
        color: 'black',
             fontSize: 18
    },
    textPrice: {
        color: '#fff', fontSize: 18,       
    },
    containerPrice: {
        padding: 2, backgroundColor: '#f44336',
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 2
    },
    header: {
        width: width - width / 5,
        height: 30, backgroundColor: '#00897b',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        justifyContent:'center'
    },
    removeButton: {
        width: 25, height: 25,
        borderRadius: 12.5,
        backgroundColor: '#f44336',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        end: 4
    },
    removeButtonText: {
        fontSize: 12,
        fontWeight:'bold',
        color: '#fff'
    }
})
