import { act } from "react-dom/test-utils"

const initialCart = {
    cart : []
}

const cartReducer = (state = initialCart, action) => {
    switch (action.type) {
        case "ADD_TO_CART" :
                return {
                    cart : [...state.cart, action.data]
                }
        case "DECREMENT" : 
                state.cart.map(pizza => {
                    return pizza.id === action.data.id 
                    ? pizza.count <= 1 
                    ? state.cart.splice(state.cart.find(item => item.id === pizza.id), 1) 
                    : pizza.count = pizza.count - 1 
                    : pizza.count
                })
                return {
                    cart : [...state.cart]
                }
        case "INCREMENT" : 
                state.cart.map(pizza => {
                    return pizza.id === action.data.id ? pizza.count = pizza.count + 1 : pizza.count
                })
                return {
                    cart : [...state.cart]
                }
        default :
            return state    
    }
}

export {cartReducer}