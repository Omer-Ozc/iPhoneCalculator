import { number1,number2,result } from "react-native-reanimated"
import { act } from "react-test-renderer";

const initialState = {    
        number1:'',
        number2:0,
        result:0,
        type : ''
}


export default reducer = (state = initialState, action) => {

    if (action.type == 'plus') {
        let type = action.type
        let number1 = state.number1
        let result = state.result
        result = parseFloat(number1)+parseFloat(result)
        console.log(result)
        number1 = ''


        return { 
            number1:number1,
            number2:state.number2,
            result:result,
            type:type}
    }

    if (action.type == 'minus') {
        console.log('minusda')
        let type = action.type
        let number1 = state.number1
        let result;
        result = parseFloat(number1)-parseFloat(state.result)
        number1 = ''
        return {
            number1:number1,
            number2:state.number2,
            result:result,
            type:type }
    }

    if (action.type == 'division') {
        let type = action.type
        let number1 = state.number1
        let result = state.result
        console.log(number1,result)
        result = parseFloat(number1)
        number1 = ''
        return {
            number1:number1,
            number2:state.number2,
            result:result,
            type:type }
    }

    if (action.type == 'multiplication') {
        let type = action.type
        let number1 = state.number1
        let result = state.result
        result = parseFloat(number1)
        number1 = ''

        return {
            number1:number1,
            number2:state.number2,
            result:result,
            type:type } }

    if (action.type == 'result') {

        
        let result;
        let number1;

        
        if(state.type === 'minus'){
             result = parseFloat(state.result)-parseFloat(state.number1)
             number1 = result
             result=0

        }
        else if(state.type === 'plus'){
            console.log(state.type)
             result = parseFloat(state.result)+parseFloat(state.number1)
             number1 = result
            console.log(number1)
            result=0

            
        }
        else if(state.type === 'division'){
             result = parseFloat(state.result)/parseFloat(state.number1)
             number1 = result
             result=0
            
        }
        else if(state.type === 'multiplication'){
             result = parseFloat(state.result)*parseFloat(state.number1)
             number1 = result
             console.log('resulttt',result)
             result=0
            
        }



    
        return {
            number1:number1,
            number2:state.number2,
            result:result,
            type:state.type }
    }

    if (action.type == 'passthenumber') {

        state.number1+=action.number
        

        return {
            number1:state.number1,
            number2:state.number2,
            result:state.result,
            type:state.type }
    }

    if(action.type == 'delete')
    {
        state.number1 = ''
        state.result = 0
    }
    return{number1:state.number1,
        number2:state.number2,
        result:state.result,
        type:state.type }

    return state
}
