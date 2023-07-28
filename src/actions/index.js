export const ActionTypes = {
    FETCH_PRODUCTS: "FETCH_PRODUCTS",
    SHOW_PRODUCT: "SHOW_PRODUCT",
    REMOVE_PRODUCT: "REMOVE_PRODUCT",
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    PRODUCT_QTY: "PRODUCT_QTY",
    ADD_PRODUCT: "ADD_PRODUCT",
    EDIT_PRODUCT: "EDIT_PRODUCT",
    ADD_SORT: "ADD_SORT",
    REMOVE_SORTED: "REMOVE_SORTED"
}

export const fetchProducts = (products) => {
    console.log("fetchProducts ", products);
    return {
        type: ActionTypes.FETCH_PRODUCTS,
        payload: products,
    }
}

export const addProduct = (product) => {
    return {
        type: ActionTypes.ADD_PRODUCT,
        payload: product
    }
}

export const removeProduct = (id) => {
    return {
        type: ActionTypes.REMOVE_PRODUCT,
        payload: id
    }
}

export const showProduct = (product) => {
    return {
        type: ActionTypes.SHOW_PRODUCT,
        payload: product
    }
}

export const addToCart = (id) => {
    console.log("add to Product ",id);
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: id
    }
}

export const removeFromCart = (id) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: id
    }
}

export const productQty = (id, qty) => {
    return {
        type: ActionTypes.PRODUCT_QTY,
        payload: {
            id,
            qty
        }
    }
}

export const addSort = (products) => {
    return {
        type: ActionTypes.ADD_SORT,
        payload: products
    }
}

export const removeSorted = (products) => {
    return {
        type: ActionTypes.REMOVE_SORTED,
        payload: products
    }
}

export const editProduct = ({id, product}) => {
    console.log("action ", product)
    return {
        type: ActionTypes.EDIT_PRODUCT,
        payload: {
            id,
            product
        }
    }
}