//import libraries
import React from 'react';
import {Text,View} from 'react-native';

//creating Header Component

const Header = (props) => {
    const { textStyle,viewStyle } = styles;
    return (
        <View style={viewStyle}>
        <Text style={textStyle}> {props.headerText} </Text>
        </View>
            );
};

const styles = {
    viewStyle:{
        backgroundColor:'#0A47A4',
        justifyContent:'center',
        alignItems:'center',
        height:80,
        paddingTop:20,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#000',
        shadowOpacity: 0.2,
        elevation:5,
        position:'relative'
    },
    textStyle:{
        fontSize: 30,
        color:'#fff',
        fontWeight:'600',
        justifyContent:'center'
    }
};



//Make the component available to other parts of app.
export { Header};