import React from "react";
import { useParams } from "react-router";
import {useState} from 'react';
import DATA from "../Data";
import { useDispatch } from "react-redux/es/exports";
import { addItem, delItem } from "./redux/actions";

const ProductDetails = () => {
    const [CartBtn, setCartBtn]= useState("Add to Cart");
	//we need a product id which is pass from the product page.
	const proid = useParams();
	const proDetail = DATA.filter((x) => x.id == proid.id);
	const product = proDetail[0];
	console.log(product);


    //we need to store useDispatch in a variable
    const dispatch = useDispatch();
    const handleCart = (product) =>{
         if(CartBtn === "Add to Cart"){
            dispatch(addItem(product));
            setCartBtn("Remove from Cart")
         }else{
            dispatch(delItem(product));
            setCartBtn("Add to Cart")
         }
    }
	return (
		<>
			<div className="container my-5 py-3">
				<div className="row">
					<div className="col-md-6 d-flex justify-content-center mx-auto product ">
						<img
							src={product.image}
							alt={product.title}
							height="400px"
							width="400px"
						/>
					</div>
					<div className="col-md-6 d-flex flex-column justify-content-center">
						<h1 className="display-5 ">{product.title}</h1>
						<hr />
						<p className=" lead fw-bolder">
							Rating {product.rating && product.rating.rate}
							<i className="fa fa-star"></i>
						</p>
						<h3 className="  my-4 fw-bold">${product.price}</h3>
						<p className="lead">{product.description}</p>
						<button  onClick={()=>handleCart(product)} className="btn btn-outline-dark my-5">{CartBtn}</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductDetails;
