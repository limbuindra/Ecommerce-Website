import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Product from "./Components/Product";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Navigate, Routes, Route } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Product />} />
				<Route path="/products/:id" element={<ProductDetails />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
