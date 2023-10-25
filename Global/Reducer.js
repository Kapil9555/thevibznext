export const reducer = (state, action) => {
    switch (action.type) {
        case "TRIGERTRUE":
            return ({ ...state, triger: true });
        case "TRIGERFALSE":
            return ({ ...state, triger: false });
        case "DELETECATEGORY":
            return ({ ...state, mainState: action.payload })
        case "SETCATEGORIES":
            return ({
                ...state, mensHalfSleeve: action.payload.mensHalfSleeve,
                couplesData: action.payload.couplesData,
                woHalf: action.payload.womensHalfSleeve,
                menFormalShirt: action.payload.mensFormal
            })
        case "ADDCATEGORY":
            return ({...state,mainState:[...state.mainState,action.payload]})
        case "CHANGEMAINSTATE":
            return ({...state,mainState:action.payload})
        case "ADDINGNEWPRODUCT":
            return ({...state,mainState:[...state.mainState,action.payload]})
        case "DELETEPRODUCT":
            return ({...state,mainState:action.payload})
        case "EDITPRODUCT":
            return ({...state,mainState:action.payload})
        default:
            break;
    }
}

