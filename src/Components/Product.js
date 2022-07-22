import React from "react";
import { Link } from "react-router-dom";
import DATA from "../Data";

const Product = () => {
	const cardItem = (item) => {
		return (
			<div className="card my-4 py-4 " key={item.id} style={{width:"18rem"}}>
        
				<img src={item.image} className="card-img-top" alt={item.title} height="250px" />
				<div className="card-body text-center">
					<h5 className="card-title mb-0">
						{item.title.substring(0,12)}...</h5>
					<p className=" lead fw-bold">${item.price}</p>
					<Link to={`/products/${item.id}`} className="btn btn-outline-dark">
						Buy Now
					</Link>
      </div>
				</div>
		);
	};
	return (
		<div>
			<div className="container py-5">
				<div className="row">
					<div className="col-12 text-center">
						<h1>Product</h1>
						<hr />
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row justify-content-around">{DATA.map(cardItem)}</div>
			</div>
		</div>
	);
};

export default Product;
