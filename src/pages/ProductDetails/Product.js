import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom";
import "./Product.css";
import { addToCart } from "../../actions";

const Product = () => {
    const dispatch = useDispatch();
    let { id } = useParams();
    const productId = id*1;
    console.log("id", typeof id)
    const products = useSelector((state =>  state.products.products));
    console.log("product Details", products)
    let singleProduct = products.find((item) => item.id === productId);
    console.log("Single product",singleProduct);


    return(
        <div className="details-container">
            <div className="product-image">
                <img 
                    src={singleProduct.thumbnail}
                    alt={singleProduct.title}
                />
            </div>
            <div className="product-info">
                <div className="product-title">{singleProduct.title}</div>
                {/* <div className="product-rating">
                    {Array(parseInt(singleProduct.rating))
                        .fill()
                        .map((_, index) => {
                            <p key={index}>⭐</p>
                        })}
                </div> */}
                <div className="product-price">
                    Price: <strong>Rs</strong>
                    <strong>{singleProduct.price}</strong>
                </div>
                <div className="product-description">
                    <h4>Product Description</h4>
                    <p>{singleProduct.description}</p>
                </div>

                <button className="addCart-button" onClick={(e) => dispatch(addToCart(id))}>
                        Add To Cart
                </button>


            </div>

        </div>
    )
}

export default Product;