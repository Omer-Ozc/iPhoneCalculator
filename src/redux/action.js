const PLUS ='plus'
const MINUS = 'minus'
const DIVISION ='division'
const MULTIPLICATION = 'multiplication'
const PASSTHENUMBER = 'passthenumber'
const RESULT = 'result'
const DELETE = 'delete'

export const Plus = (number) =>{
    return {
        type:PLUS,
        number:number
    }
}

export const Minus = (number) =>{

    return{
        type:MINUS,
        number:number
    }
}

export const Division = (number) =>{
    return {
        type:DIVISION,
        number:number
    }
}

export const Multiplication = (number) =>{
    return {
        type:MULTIPLICATION,
        number:number
    }
}

export const PassTheNumber = (number) =>{
    return {
        type:PASSTHENUMBER,
        number:number
    }
}

export const Result = (number) =>{
    return {
        type:RESULT,
        number:number
    }
}

export const Delete = (number) =>{
    return {
        type:DELETE,
        number:number
    }
}


