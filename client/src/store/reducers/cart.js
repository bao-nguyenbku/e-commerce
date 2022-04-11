const initState = {
    cartQuantity: 0
}

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'INCREASE': {
            const newQty = state.cartQuantity + 1;
            return {
                cartQuantity: newQty
            }
        }
        case 'DECREASE': {
            const newQty = state.cartQuantity - 1;
            return {
                cartQuantity: newQty
            }
        }
        default:
            return state
    }
}

export default cartReducer;