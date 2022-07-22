import React from "react";
import {Link} from 'react-router-dom';
import Login from "./buttons/Login";
import Signup from "./buttons/Signup";
import CartBtn from "./buttons/CartBtn";

const Header = () => {
	return (
		<>
			<nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
				<div className="container-fluid py-2">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>

					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/products">
									Product
								</Link>
							</li>
							<li className="nav-item">
				 				<Link className="nav-link" to='/about'>
									About
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to='/contact'>
									Contact
								</Link>
							</li>
						</ul>
					<Link className="navbar-brand mx-auto fw-bold" to="/">
						WE-SELL
					</Link>
                    <Login/>
					<Signup/>
					<CartBtn/>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
