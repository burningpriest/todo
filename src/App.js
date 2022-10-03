import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { MainCard } from "./mainCard/mainCard";
import AddIcon from "@mui/icons-material/Add";

function App() {
	const [cards, setCards] = React.useState(["he"]);
	const [cardName, setCard] = React.useState("");
	const deleteCard = (value) => {
		const temp = cards.filter((card) => card !== value);
		setCards(temp);
	};
	const handleCardName = ({ target }) => {
		setCard(target.value);
	};
	const handleCard = () => {
		const temp = [...cards, cardName];
		setCards(temp);
	};
	return (
		<div className='App'>
			<header className='App-header'>
				{cards.length > 0 &&
					cards.map((card) => {
						return <MainCard title={card} key={card} deleteCard={deleteCard} />;
					})}
				<div className="addCardSection">
					<input
						type='text'
						className='addCard'
						placeholder='Add Card'
						value={cardName}
						onChange={handleCardName}
					/>
					<button className='addCardButton' onClick={handleCard}>
						<AddIcon />
					</button>
				</div>
			</header>
		</div>
	);
}

export default App;
