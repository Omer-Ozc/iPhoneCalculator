import { number1,number2,result } from "react-native-reanimated"
import { act } from "react-test-renderer";

const initialState = {    
        number1:0,
        number2:0,
        result:0,
}

export default reducer = (state = initialState, action) => {

    if (action.type == 'ekle') {
        return { 
            number1:state.number1,
            number2:state.number2,
            result:state.result }
    }

    if (action.type == 'sonuc') {
        return {
            number1:state.number1,
            number2:state.number2,
            result:state.result}
    }

    if (action.type == 'sonuc') {
        return {
            number1:state.number1,
            number2:state.number2,
            result:state.result}
    }

    if (action.type == 'sonuc') {
        return {
            number1:state.number1,
            number2:state.number2,
            result:state.result}
    }

    return state
}
