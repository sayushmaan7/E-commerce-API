import { ActionTypes } from "../actions";

const initialState = {
    products: [],
    cart: []
};


export const productReducer = (state=initialState, { type, payload }) => {
    
    switch(type) {
        case ActionTypes.FETCH_PRODUCTS:
            return {
                ...state,
                products: payload
            }

        case ActionTypes.ADD_PRODUCT:
            const newProducts = [...state.products, payload.values]
            return {
                ...state,
                products: newProducts
            }

        case ActionTypes.REMOVE_PRODUCT:
            const filterProducts = state.products.filter(product => product.id !== payload) 
            return {
                ...state,
                products: filterProducts
            }

        case ActionTypes.ADD_TO_CART:
            let id = payload*1
            const prod = state.products.find(product => product.id === id);
        
            const inCart = state.cart.find(item => item.id === id ? true : false);
            // const newCart = [...state.cart, payload]
            return {
                ...state,
                cart: inCart ? 
                    state.cart.map((item) => 
                    
                    item.id === id 
                        ? {...prod, qty: item.qty+1}
                        : prod
                    )
                    :[...state.cart, {...prod, qty: 1}]
            }

        case ActionTypes.REMOVE_FROM_CART:
            const cartItem = state.cart.filter(item => item.id !== payload*1) 
        return {
            ...state,
            cart: cartItem
            }

        case ActionTypes.PRODUCT_QTY: 
            return {
                ...state,
                cart: state.cart.map((item) => 
                    item.id === payload.id
                        ? {...item, qty: payload.qty}
                        : item
                )
            }

        case ActionTypes.ADD_SORT:
            const newProd = payload.sort((a,b)=> a.price - b.price);
            return {
                ...state,
                products: newProd
            }

        case ActionTypes.REMOVE_SORTED:
            const initialProd = payload.sort((a,b)=> a.id - b.id);
            return {
                ...state,
                products: initialProd
            }

        case ActionTypes.EDIT_PRODUCT:
            const updateProduct = state.products.filter(prod => prod.id === payload.id*1);
            const product = payload.product;
            const updatedProduct = {...updateProduct[0], ...product};
            state.products[payload.id*1-1] = updatedProduct
            
            console.log("edit paayload 2",state.products);
            return {
                ...state,
                products: state.products
            }

        default: 
            return state;
    }

};