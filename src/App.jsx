import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const isInputsValid = () => {
		return name.trim().length > 0 && surname.trim().length > 0;
	};

	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank" rel="noopener">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noopener">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Manuel Deploy Projesi!</h1>
			<p>Deneme 6</p>
			<p>sürüm: 1.1.4</p>
			<form action="">
				<input
					type="text"
					placeholder="İsim"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Soyisim"
					value={surname}
					onChange={(e) => setSurname(e.target.value)}
				/>
				<button type="button" disabled={!isInputsValid()}>
					Gönder
				</button>
			</form>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
