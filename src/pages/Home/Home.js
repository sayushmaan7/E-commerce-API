import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import { addSort, fetchProducts, removeSorted } from "../../actions/index";

import  ProductCard from "../../components/ProductCard/ProductCard";
import "./Home.css";


function Home() {
  const [sort, setSort] = useState("Sort By Price");
  const [removeSort, setRemoveSort] = useState();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  useEffect(()=> {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => dispatch(fetchProducts(data.products)));
      // fetchLists();
    
  }, []);

  const handleSort = () => {
    setSort("Sorted");
    setRemoveSort("❌");
    dispatch(addSort(products));
  }

  const handleRemoveSort = () => {
    setSort("Sort by Price");
    setRemoveSort();
    dispatch(removeSorted(products))
  }


  return (
    <div className="Home">
      <div className="sort-btn">
        <button className="button-checked" onClick={handleSort}>{sort}</button>
        <div className="button-unchecked" onClick={handleRemoveSort}>{removeSort}</div>
      </div>
        <ProductCard />
    </div>
  );
}

export default Home;
