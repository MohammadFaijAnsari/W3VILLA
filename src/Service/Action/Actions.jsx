import { ADD_TO_CART } from "../Constant";

const addTocart = (data) => {
    console.log(data)
    return {
        type: ADD_TO_CART,  
        data: data
    };
};

export default addTocart;
