// export function increment() {

//     return {type:'INCREMENT'}
    
// }
 export function increment() {
    return async(dispatch) => {
        const response = await fetch("/facts")
        const json = await response.json()

        console.log(json)
        setInterval(()=>{
            dispatch({type:"INCREMENT"})
        },3000)
        
    }
  }

export function decrement(){

    return {type:'DECREMENT'}
}

export function setCounter(value){

    return {type:'SET_COUNTER', data:value}
}