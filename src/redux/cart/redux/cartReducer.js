const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false
}

// const sumItems = items => {
//     const totali = items.reduce((a, b) => a + +b.price_type_closed_price , 0)
//     return {totali}
// }

const cartReduser = (state=initialState, action) => {
    console.log(state.selectedItems)
    switch(action.type) {
        // case "ADD_ITEM":
        //     if(!state.selectedItems.find(item => item.id === action.payload.id)) {
        //         state.selectedItems.push({
        //             ...action.payload,
        //             quantity: 1
        //         })
        //     }
        //     return{
        //         ...state,
        //         selectedItems: {...state.selectedItems}
        //     }
        case "ADD_ITEM":
            return{
                ...state,
                selectedItems: [...state.selectedItems, action.payload],
                itemsCounter: state.selectedItems.length + 1,
                // total: parseInt(state.selectedItems.reduce((a, b) => a + +b.price_type_closed_price , 0))
            }
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                selectedItems: [...newSelectedItems],
                itemsCounter: [...newSelectedItems].length ,
                // total: parseInt(state.selectedItems.reduce((a, b) => a + +b.price_type_closed_price , 0))
            }
        case "CHECKOUT":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: true
            }
        case "CLEAR":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: false
            }
        default: 
            return state;
    }
}

export default cartReduser;