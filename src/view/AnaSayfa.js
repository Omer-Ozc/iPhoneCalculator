import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import Buttons from '../components/Buttons';
import { TextInput } from 'react-native-gesture-handler';


class AnaSayfa extends Component {
    constructor(props){
        super(props)

        this.state ={
            entrys:'0',
        }
    }


    render() {
   

        return (
            <View style={styles.container}>
                <Text style ={styles.InputTextStyle}>{this.state.entrys}</Text>
                <View style={styles.RowView}>
                    <Buttons text='AC'
                    color='red' 
                    onPress={()=>  {}}/>
                    <Buttons text='+/-' 
                    onPress={()=> {}}/>
                    <Buttons text='%' 
                    onPress={()=> {}}/>
                    <Buttons text='/' />
                </View>
                <View style={styles.RowView}>
                    <Buttons text='7' 
                    onPress={()=> {}}/>
                    <Buttons text='8'
                    onPress={()=> {}} />
                    <Buttons text='9'
                    onPress={()=> {}} />
                    <Buttons text='x' 
                    onPress={()=> {}}/>
                </View>
                <View style={styles.RowView}>
                    <Buttons text='4'
                    onPress={()=> {}} />
                    <Buttons text='5' 
                    onPress={()=> {}}/>
                    <Buttons text='6'
                    onPress={()=> {}} />
                    <Buttons text='-' 
                    onPress={()=> {}}/>
                </View>
                <View style={styles.RowView}>
                    <Buttons text='1' 
                    onPress={()=> {}}/>
                    <Buttons text='2' 
                    onPress={()=> {}}/>
                    <Buttons text='3' 
                    onPress={()=> {}}/>
                    <Buttons text='+' 
                    onPress={()=> {}}/>
                </View>
                <View style={styles.RowView}>
                    <Buttons text='AC'
                    onPress={()=> {}} />
                    <Buttons text='+/-'
                    onPress={()=> {}} />
                    <Buttons text='AC'
                    onPress={()=> {}} />
                </View>
            </View>



        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        flexDirection: 'column'

    },

    InputTextStyle: {
        backgroundColor: 'black',
        width: '100%',
        height: '30%'
    },

    RowView: {
        backgroundColor: 'black',
        flexDirection: 'row',
        padding: 4,


    },
});


export default AnaSayfa;