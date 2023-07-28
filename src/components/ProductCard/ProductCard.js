import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import { removeProduct } from "../../actions";
import { addToCart } from "../../actions";
import { editProduct } from "../../actions";

const ProductCard = () => {
    const dispatch = useDispatch();
    const products = useSelector((state =>  state.products.products));
    const [editId, setEditId] = useState("");

    const [state, setState ] = useState({
        title: "",
        price: "",
        rating: "",
        description: ""
    })

    const handleUpdate = (id) => {
        console.log("State check ", id);
        dispatch(editProduct({"id": id, "product": state }));
        setEditId("");
    }

    const handleEdit = (id) => {
        setEditId(id);
        const product = products.filter((prod) => prod.id === id);
        setState({
            title: product[0].title,
            price: product[0].price,
            rating: product[0].rating,
            description: product[0].description
        })

        console.log("edit" ,state.title);
    }

    const handleInputChange = (e) => {
        console.log(e.target.name);
        let { name, value } = e.target;
        setState({...state, [name]: value})
        console.log("state check",{[name]: value})
        console.log("state", state);
    }



    const renderList = products.map((product) => {
        const { id, title, thumbnail,images, rating, description, price } = product;

        return (
            
            <div className="product" key={id}>

                {editId*1 === id ? <div>
                    { <div className="product-card-wrapper">
                        <div className="product-card-link">
                            <div className="product-card-image">
                                <img src={thumbnail} alt={title} />
                            </div>
                            <div className="product-card-right">
                                <div className="product-card-info">
                                    <input type="text" className="product-card-title input-card" value={state.title} name="title" onChange={handleInputChange} />
                                    <input type="number" className="product-card-price input-card" value={state.price} name="price" onChange={handleInputChange} />
                                    <input type="number" className="product-card-rating input-card" value={state.rating} name="rating" onChange={handleInputChange} />
                                </div>
                                <div className="product-right">
                                    <textarea className="product-card-desc desc-textarea" value={state.description} name="description" onChange={handleInputChange} />
                                </div>
                            </div>
                        </div>

                        <button className="save-button card-buttons-btn card-edit-button"
                            onClick={()=>handleUpdate(id)}>save
                        </button>
                        <button className="save-button card-buttons-btn card-delete-btn"
                            onClick={()=>setEditId("")}>cancel
                        </button>
                        
                    </div> }
                </div>  : 
                
                    <div className="product-card-wrapper">
                        <Link to={`product/${id}`} className="product-card-link">
                            {/* <div className="product-card"> */}
                                <div className="product-card-image">
                                    <img src={images[0]} alt={title} />
                                </div>
                            
                                <div className="product-card-right">
                                    <div className="product-card-info">
                                        <p className="product-card-title">{title}</p>
                                        <p className="product-card-price">{price}</p>
                                        <p className="product-card-rating">{rating}</p>
                                    </div>
                                    
                                    <div className="product-right">
                                        <p className="product-card-desc">{description}</p>   
                                    </div>
                                </div>
                            {/* </div> */}
                        </Link>

                        {/* <div className="product-card-buttons"> */}
                            {/* <div className="buttons-btn cart-button"><button onClick={(e) => dispatch(addToCart(id))}>Add To Cart</button></div> */}
                            <button className="card-buttons-btn card-edit-button" onClick={()=>handleEdit(id)}>Edit</button>
                            <button className="card-buttons-btn card-delete-btn" onClick = {()=>dispatch(removeProduct(id))}>Delete</button>
                        {/* </div>          */}
                    </div>
                }
            </div>
        )
    })

    return (
        <div className="">
                {renderList}
        </div>
    )
}

export default ProductCard;