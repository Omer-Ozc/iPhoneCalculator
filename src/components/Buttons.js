import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Plus,Minus,Division,Multiplication,PassTheNumber,Result,Delete} from '../redux/action';
import { connect, useDispatch } from 'react-redux';



class Buttons extends Component {

    constructor(props) {
        super(props)

        this.state ={
        numbers: '',
        }
        
    }

    Operation(press){    
        if(press == '+'){
            this.props.plus(press)
        }
        else if(press == '-'){
            this.props.minus(press)
        }
        else if(press == 'division'){
            this.props.division(press)
        }
        else if(press == 'x'){
            this.props.multiplication(press)
        }
        else if(press=='='){
            this.props.result(press)
        }
        else if(press == 'delete'){
            this.props.delete(press)
        }

        else{
            this.props.passthenumber(press)

        }

        

        
        /*{press == '+' ? this.props.plus() : null }
        {press == '-' ? this.props.minus() : null }
        {press == 'division' ? this.props.division() : null }
        {press == 'x' ? this.props.multiplication() : null }*/

        
        
        
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

const mapStateToProps = (state) => {
    return {
      number1:state.number1,
      number2:state.number2,
      result:state.result
    }
  }
  
  
  const mapDispatchToProps = (dispatch) => {
    return {
        plus : (number) => dispatch(Plus(number)),
        minus :(press)=> dispatch(Minus(press)),
        division : (press) => dispatch(Division(press)),
        multiplication : (press) => dispatch(Multiplication(press)),
        passthenumber : (number) => dispatch(PassTheNumber(number)),
        result : (press) => dispatch(Result(press)),
        delete : (press) => dispatch(Delete(press))
    }
    
  }


export default connect(mapStateToProps,mapDispatchToProps)(Buttons);