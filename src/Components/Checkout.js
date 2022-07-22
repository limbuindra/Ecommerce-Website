import React from "react";
import { useSelector } from "react-redux/es/exports";

const Checkout = () => {
	const state = useSelector((state) => state.addItem);
	var total = 0;
	const itemList = (item) => {
		total = total + item.price;
		return (
			<li className="list-group-item d-flex justify-content-between lh-sm">
				<div>
					<h6 className="my-0">{item.title}</h6>
				</div>
				<span className="text-muted">${item.price}</span>
			</li>
		);
	};
	return (
		<>
			<div className="container my-5">
				<div className="row g-5">
					<div className="col-md-5 col-lg-4 order-md-last">
						<h4 className="d-flex justify-content-between align-items-center mb-3">
							<span className="text-primary">Your cart</span>
							<span className="badge bg-primary rounded-pill">
								{state.length}
							</span>
						</h4>
						<ul className="list-group mb-3">
							{state.map(itemList)}

							<li className="list-group-item d-flex justify-content-between">
								<span>Total (USD)</span>
								<strong>${total} </strong>
							</li>
						</ul>

						<htmlForm className="card p-2">
							<div className="input-group">
								<input
									type="text"
									className="htmlForm-control"
									placeholder="Promo code"
								/>
								<button type="submit" className="btn btn-secondary">
									Redeem
								</button>
							</div>
						</htmlForm>
					</div>
					<div className="col-md-7 col-lg-8">
						<h4 className="mb-3">Billing address</h4>
						<htmlForm className="needs-validation" novalidate="">
							<div className="row g-3">
								<div className="col-sm-6">
									<label htmlFor="firstName" className="htmlForm-label">
										First name
									</label>
									<input
										type="text"
										className="htmlForm-control"
										id="firstName"
										placeholder=""
										value=""
										required=""
									/>
									<div className="invalid-feedback">
										Valid first name is required.
									</div>
								</div>

								<div className="col-sm-6">
									<label htmlFor="lastName" className="htmlForm-label">
										Last name
									</label>
									<input
										type="text"
										className="htmlForm-control"
										id="lastName"
										placeholder=""
										value=""
										required=""
									/>
									<div className="invalid-feedback">
										Valid last name is required.
									</div>
								</div>

								<div className="col-12">
									<label htmlFor="username" className="htmlForm-label">
										Username
									</label>
									<div className="input-group has-validation">
										<span className="input-group-text">@</span>
										<input
											type="text"
											className="htmlForm-control"
											id="username"
											placeholder="Username"
											required=""
										/>
										<div className="invalid-feedback">
											Your username is required.
										</div>
									</div>
								</div>

								<div className="col-12">
									<label htmlFor="email" className="htmlForm-label">
										Email <span className="text-muted">(Optional)</span>
									</label>
									<input
										type="email"
										className="htmlForm-control"
										id="email"
										placeholder="you@example.com"
									/>
									<div className="invalid-feedback">
										Please enter a valid email address htmlFor shipping updates.
									</div>
								</div>

								<div className="col-12">
									<label htmlFor="address" className="htmlForm-label">
										Address
									</label>
									<input
										type="text"
										className="htmlForm-control"
										id="address"
										placeholder="1234 Main St"
										required=""
									/>
									<div className="invalid-feedback">
										Please enter your shipping address.
									</div>
								</div>

								<div className="col-12">
									<label htmlFor="address2" className="htmlForm-label">
										Address 2 <span className="text-muted">(Optional)</span>
									</label>
									<input
										type="text"
										className="htmlForm-control"
										id="address2"
										placeholder="Apartment or suite"
									/>
								</div>

								<div className="col-md-5">
									<label htmlFor="country" className="htmlForm-label">
										Country
									</label>
									<select className="htmlForm-select" id="country" required="">
										<option value="">Choose...</option>
										<option>United States</option>
									</select>
									<div className="invalid-feedback">
										Please select a valid country.
									</div>
								</div>

								<div className="col-md-4">
									<label htmlFor="state" className="htmlForm-label">
										State
									</label>
									<select className="htmlForm-select" id="state" required="">
										<option value="">Choose...</option>
										<option>CalihtmlFornia</option>
									</select>
									<div className="invalid-feedback">
										Please provide a valid state.
									</div>
								</div>

								<div className="col-md-3">
									<label htmlFor="zip" className="htmlForm-label">
										Zip
									</label>
									<input
										type="text"
										className="htmlForm-control"
										id="zip"
										placeholder=""
										required=""
									/>
									<div className="invalid-feedback">Zip code required.</div>
								</div>
							</div>

							<hr className="my-4" />

							<div className="htmlForm-check">
								<input
									type="checkbox"
									className="htmlForm-check-input"
									id="same-address"
								/>
								<label className="htmlForm-check-label" htmlFor="same-address">
									Shipping address is the same as my billing address
								</label>
							</div>

							<div className="htmlForm-check">
								<input
									type="checkbox"
									className="htmlForm-check-input"
									id="save-info"
								/>
								<label className="htmlForm-check-label" htmlFor="save-info">
									Save this inhtmlFormation htmlFor next time
								</label>
							</div>

							<hr className="my-4" />

							<h4 className="mb-3">Payment</h4>

							<div className="my-3">
								<div className="htmlForm-check">
									<input
										id="credit"
										name="paymentMethod"
										type="radio"
										className="htmlForm-check-input"
										checked=""
										required=""
									/>
									<label className="htmlForm-check-label" htmlFor="credit">
										Credit card
									</label>
								</div>
								<div className="htmlForm-check">
									<input
										id="debit"
										name="paymentMethod"
										type="radio"
										className="htmlForm-check-input"
										required=""
									/>
									<label className="htmlForm-check-label" htmlFor="debit">
										Debit card
									</label>
								</div>
								<div className="htmlForm-check">
									<input
										id="paypal"
										name="paymentMethod"
										type="radio"
										className="htmlForm-check-input"
										required=""
									/>
									<label className="htmlForm-check-label" htmlFor="paypal">
										PayPal
									</label>
								</div>
							</div>

							<div className="row gy-3">
								<div className="col-md-6">
									<label htmlFor="cc-name" className="htmlForm-label">
										Name on card
									</label>
									<input
										type="text"
										className="htmlForm-control"
										id="cc-name"
										placeholder=""
										required=""
									/>
									<small className="text-muted">
										Full name as displayed on card
									</small>
									<div className="invalid-feedback">
										Name on card is required
									</div>
								</div>

								<div className="col-md-6">
									<label htmlFor="cc-number" className="htmlForm-label">
										Credit card number
									</label>
									<input
										type="text"
										className="html m-control"
										id="cc-number"
										placeholder=""
										required=""
									/>
									<div className="invalid-feedback">
										Credit card number is required
									</div>
								</div>

								<div className="col-md-3">
									<label htmlFor="cc-expiration" className="htmlForm-label">
										Expiration
									</label>
									<input
										type="text"
										className="htmlForm-control"
										id="cc-expiration"
										placeholder=""
										required=""
									/>
									<div className="invalid-feedback">
										Expiration date required
									</div>
								</div>

								<div className="col-md-3">
									<label htmlFor="cc-cvv" className="htmlForm-label">
										CVV
									</label>
									<input
										type="text"
										className="htmlForm-control"
										id="cc-cvv"
										placeholder=""
										required=""
									/>
									<div className="invalid-feedback">Security code required</div>
								</div>
							</div>

							<hr className="my-4" />

							<button className="w-100 btn btn-primary btn-lg" type="submit">
								Continue to checkout
							</button>
						</htmlForm>
					</div>
				</div>
			</div>
		</>
	);
};

export default Checkout;
