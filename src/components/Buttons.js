import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



class Buttons extends Component {

    constructor(props) {
        super(props)

    }

    Operation(press){
        console.log(press)
    }


    render() {
        let backgroundcl = this.props.color ? this.props.color : '#A6A6A6' 
       
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={{ ...styles.button, backgroundColor: backgroundcl }}
                    onPress={() => this.Operation(this.props.press)}
                >
                    <Text style = {{color:'white',fontSize:30}}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({


    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',


    },

    button: {
        width: 65,
        height: 65,
        borderRadius: 100,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',


    },
});

export default Buttons;