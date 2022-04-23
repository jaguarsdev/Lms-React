const addItem = course => {
    return {
        type: "ADD_ITEM",
        payload: course
    }
}
const removeItem = course => {
    return {
        type: "REMOVE_ITEM",
        payload: course
    }
}
const checkout = () => {
    return {
        type: "CHECKOUT",
    }
}
const clear = () => {
    return {
        type: "CLEAR",
    }
}

export {addItem, removeItem, checkout, clear}