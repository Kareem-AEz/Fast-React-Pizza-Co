import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
	{
		name: "Focaccia",
		ingredients: "Bread with italian olive oil and rosemary",
		price: 6,
		imgURL: "pizzas/focaccia.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Margherita",
		ingredients: "Tomato and mozarella",
		price: 10,
		imgURL: "pizzas/margherita.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Spinaci",
		ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
		price: 12,
		imgURL: "pizzas/spinaci.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Funghi",
		ingredients: "Tomato, mozarella, mushrooms, and onion",
		price: 12,
		imgURL: "pizzas/funghi.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Salamino",
		ingredients: "Tomato, mozarella, and pepperoni",
		price: 15,
		imgURL: "pizzas/salamino.jpg",
		soldOut: true,
	},
	{
		name: "Pizza Prosciutto",
		ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
		price: 18,
		imgURL: "pizzas/prosciutto.jpg",
		soldOut: false,
	},
];

function App() {
	return (
		<div className="container">
			<Header></Header>
			<Menu></Menu>
			<Footer></Footer>
		</div>
	);
}

function Header() {
	return (
		<header className="header">
			<h1>Fast React Pizza Co.</h1>
		</header>
	);
}

function Menu() {
	const pizzas = pizzaData;
	// const pizzas = [];
	const numOfPizzas = pizzas.length;

	return (
		<main className="menu">
			<h2>Our Menu!</h2>

			{numOfPizzas > 0 ? (
				<>
					<p>
						Authentic Italian cuisine. 6 creative dishes to choose from. All
						from our stone oven, all organic. all delicious
					</p>
					<ul className="pizzas">
						{pizzas.map((pizza) => (
							<Pizza
								pizzaOBJ={pizza}
								key={pizza.name}
							/>
						))}
					</ul>
				</>
			) : (
				<p>We're sorry we are still working on our menu :D</p>
			)}
		</main>
	);
}

function Pizza({ pizzaOBJ }) {
	return (
		<li className={`pizza ${pizzaOBJ.soldOut ? "sold-out" : ""}`}>
			<img
				src={pizzaOBJ.imgURL}
				alt={pizzaOBJ.name}
			></img>
			<div>
				<h3>{pizzaOBJ.name}</h3>
				<p>{pizzaOBJ.ingredients}</p>
				<span>{pizzaOBJ.soldOut ? "SOLD OUT" : pizzaOBJ.price}</span>
			</div>
		</li>
	);
}

function Footer() {
	const date = new Date();
	const hour = new Date(date).getHours() + "";
	const minutes = new Date(date).getMinutes() + "";
	const openHour = 9;
	const closeHour = 22;
	const isOpen = hour >= openHour && hour <= closeHour;

	return (
		<footer className="footer">
			{isOpen ? (
				<Order
					closeHour={closeHour}
					openHour={openHour}
				/>
			) : (
				<p>
					Sorry it's currently {hour}:{minutes.padStart(2, "0")}, yet we're more
					than happy to welcome you between {openHour}:00 and {closeHour}:00.
				</p>
			)}
		</footer>
	);
}

function Order({ closeHour, openHour }) {
	return (
		<div className="order">
			<p>
				We're open from {openHour}:00 until {closeHour}:00, come visit us or
				order online!
			</p>
			<button className="btn">Order</button>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App></App>
	</React.StrictMode>
);
