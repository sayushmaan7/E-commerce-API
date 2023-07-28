import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../actions";
// import "./AddProduct.css";

const AddProduct = () => {

    const [values, setValues ] = useState({title:"", description:"",price:"", rating:""});
    const {title, description, price, rating} = values;
    const dispatch = useDispatch();

    const handleSubmit=(e)=> {
        e.preventDefault();
        console.log("values ", values);
        dispatch(addProduct({values}));
        setValues({title:"", description:"",price:"", rating:""});
    }

    return (
        <div className="container w-50 mt-5">
            <div className="w-75 mx-auto shadow p-5">
                
                <h2 className="text-center mb-4">Add Product</h2>
                    <form className="">
                        
                        <div className='form-group d-flex flex-column justify-content-start align-items-start'>
                            <label className="mb-2 ml-2 px-2">Name:</label>
                            <input 
                                type='text'
                                value={title}
                                name="title"
                                className='form-control form-control-lg'
                                placeholder="Enter Product Name"
                                onChange={(e) => setValues({...values, title: e.target.value})}
                            /> 
                        </div>
                            
                        <div className="form-group d-flex flex-column justify-content-start align-items-start">
                            <label className="mt-2 mb-2 px-2">Description:</label>
                            <textarea 
                                // type='text'
                                value={description}
                                name="description"
                                className='form-control form-control-lg '
                                placeholder="Enter Product Description"
                                onChange = {(e) => setValues({...values, description: e.target.value})}
                            />
                        </div>

                        <div className="form-group d-flex flex-column justify-content-start align-items-start">
                            <label className="mt-2 mb-2 px-2">Price:</label>
                            <input 
                                type='number'
                                value={price}
                                name="price"
                                className='form-control form-control-lg '
                                placeholder="Enter Product Price"
                                onChange = {(e) => setValues({...values, price: e.target.value})}
                            />
                        </div>

                        <div className="form-group d-flex flex-column justify-content-start align-items-start">
                            <label className="mt-2 mb-2 px-2">Rating:</label>
                            <input 
                                type='number'
                                value={rating}
                                name="rating"
                                className='form-control form-control-lg '
                                placeholder="Enter Product Rating"
                                onChange = {(e) => setValues({...values, rating: e.target.value})}
                            />
                        </div>
                        <button 
                            type="submit"
                            className='btn btn-primary btn-block mt-5 w-50 mr-10'
                            onClick={handleSubmit}
                        >
                            Add Product
                        </button>
                    </form>
                </div>
            </div>
    )
}

export default AddProduct;