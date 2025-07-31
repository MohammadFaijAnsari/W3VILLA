import { ADD_TO_CART } from "../Constant";

const initialState = {
    cardData: []
};

export default function cartitem(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            console.log(action)
            return {
                ...state,
                cardData: action.data
            };
        default:
            return state;
    }
}
