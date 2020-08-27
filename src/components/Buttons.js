import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



class Buttons extends Component {

    constructor(props) {
        super(props)

    }


    render() {
        let backgroundcl = this.props.color ? this.props.color : 'grey'
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={{ ...styles.button, backgroundColor: backgroundcl }}
                    onPress={this.props.onPress}
                >
                    <Text>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({


    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'


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