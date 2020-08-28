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
                <View style ={styles.InputTextStyle}>
                <Text style = {{color:'white', fontSize:70,padding:20}}>{this.state.entrys}</Text>
                </View>
                <View style={styles.RowView}>
                    <Buttons text='AC'
                    onPress={()=>  {}}/>
                    <Buttons text='+/-' 
                    onPress={()=> {}}/>
                    <Buttons text='%' 
                    onPress={()=> {}}/>
                    <Buttons text='÷'
                    color='#f19b38' />
                </View>
                <View style={styles.RowView}>
                    <Buttons text='7' 
                    onPress={()=> {}}/>
                    <Buttons text='8'
                    onPress={()=> {}} />
                    <Buttons text='9'
                    onPress={()=> {}} />
                    <Buttons text='×' 
                    color='#f19b38'
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
                    color='#f19b38'
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
                    color='#f19b38'
                     
                    onPress={()=> {}}/>
                </View>
                <View style={styles.RowView}>
                    <Buttons text='0'
                    onPress={()=> {}} />
                    <Buttons text=','
                    onPress={()=> {}} />
                    <Buttons text='='
                    color='#f19b38'
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
        color:'white',
        width: '100%',
        height: '30%',
        alignItems:'flex-end',
        justifyContent:'flex-end'
    },

    RowView: {
        backgroundColor: 'black',
        flexDirection: 'row',
        padding:3
    },
});


export default AnaSayfa;