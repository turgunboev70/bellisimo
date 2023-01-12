const initialCart = {
    cart : []
}

const cartReducer = (state = initialCart, action) => {
    switch (action.type) {
        case "ADD_TO_CART" :
            return {
                cart : [...state.cart, action.data]
            }
        default :
            return {state}    
    }
}

export {cartReducer}