import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



class Buttons extends Component {

    constructor(props){
        super(props)
    
    }
    

    render() {
        return (
            <View stlye = {styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:'yellow',
        width:500,
        height:500
    },

    button: {
        alignItems: "center",
        justifyContent:'center',
        backgroundColor: "#DDDDDD",
    },
});

export default Buttons;