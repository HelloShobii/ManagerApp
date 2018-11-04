import React from 'react';
import {Text,TouchableOpacity} from 'react-native';

const Button =({onPress,children})=>{
    const {buttonText,styleButton}=styles;
    return(
        <TouchableOpacity onPress={onPress} style={styleButton}>
            <Text style={buttonText}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};
const styles={
    styleButton:{
        flex:2,
        paddingTop:5,
        backgroundColor:'#0A47A4',
        borderWidth:3,
        borderRadius:8,
        borderColor:'#0A47A4',
        padding:30,
        alignSelf:'stretch'

    },
    buttonText:{
        alignSelf:'center',
        fontSize:20,
        fontWeight:'600',
        color:'#fff'

    }
};

export {Button};