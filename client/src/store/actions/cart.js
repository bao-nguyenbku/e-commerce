export const increaseTotalQuantity = (qty) => {
    return {
        type: 'INCREASE',
        payload: qty
    }
}

export const decreaseTotalQuantity = (qty) => {
    return {
        type: 'DECREASE',
        payload: qty
    }
}