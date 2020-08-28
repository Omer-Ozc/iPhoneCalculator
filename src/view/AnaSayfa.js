import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import Buttons from '../components/Buttons';
import { TextInput } from 'react-native-gesture-handler';
import { connect, useDispatch } from 'react-redux';

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
                <Text style = {{color:'white', fontSize:70,padding:20,fontSize:50}}>{this.props.number1}</Text>
                </View>
                <View style={styles.RowView}>
                    <Buttons text='AC'
                    press = 'delete'
                    onPress={()=>  {}}/>
                    <Buttons text='+/-' 
                    press ='Do Not'
                    onPress={()=> {}}/>
                    <Buttons text='%' 
                    onPress={()=> {}}/>
                    <Buttons text='÷'
                    press = 'division'
                    color='#f19b38' />
                </View>
                <View style={styles.RowView}>
                    <Buttons text='7' 
                    press ='7'/>
                    <Buttons text='8'
                    press ='8'
                    onPress={()=> {}} />
                    <Buttons text='9'
                    press ='9'
                    onPress={()=> {}} />
                    <Buttons text='×' 
                    press ='x'
                    color='#f19b38'
                    onPress={()=> {}}/>
                </View>
                <View style={styles.RowView}>
                    <Buttons text='4'
                    press = '4'
                    onPress={()=> {}} />
                    <Buttons text='5' 
                    press = '5'
                    onPress={()=> {}}/>
                    <Buttons text='6'
                    press = '6'
                    onPress={()=> {}} />
                    <Buttons text='-'
                    press = '-' 
                    color='#f19b38'
                    onPress={()=> {}}/>
                </View>
                <View style={styles.RowView}>
                    <Buttons text='1'
                    press = '1'
                    onPress={()=> {}}/>
                    <Buttons text='2'
                    press = '2'
                    onPress={()=> {}}/>
                    <Buttons text='3'
                    press = '3'
                    onPress={()=> {}}/>
                    <Buttons text='+'
                    press = '+'
                    color='#f19b38'
                     
                    onPress={()=> {}}/>
                </View>
                <View style={styles.RowView}>
                    <Buttons text='0'
                    press = '0'
                    onPress={()=> {}} />
                    <Buttons text=','
                    press = ','
                    onPress={()=> {}} />
                    <Buttons text='='
                    press = '='
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
        justifyContent:'flex-end',
    },

    RowView: {
        backgroundColor: 'black',
        flexDirection: 'row',
        padding:3
    },
});

const mapStateToProps = (state) => {
    return {
      number1:state.number1,
      number2:state.number2,
      result:state.result
    }
  }

export default connect(mapStateToProps)(AnaSayfa);