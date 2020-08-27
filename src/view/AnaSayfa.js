import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Buttons from '../components/Buttons';


class AnaSayfa extends Component {

    render() {
        return (
                <View style={styles.RowView}>
                    <Buttons text='AC' />
                    <Buttons text='+/-' />
                    
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:'blue'
    },

    RowView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'red'
    },
});


export default AnaSayfa;