import { useState, useEffect } from "react";
import "./App.css";
import ListaClientes from "./pages/ListaClientes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { CheckIcon, ChevronRightIcon, Menu, TrashIcon } from "lucide-react"; //biblioteca de icons

import MainMenu from "./components/MainMenu";
// import ListaClientes from "./components/ListaClientes";

function App() {
	// const [count, setCount] = useState();

	return (
		<Router>
			<Routes>
				<Route path="/" element={<MainMenu />} />
				<Route path="/listaClientes" element={<ListaClientes />} />
			</Routes>
		</Router>
	);
}

export default App;
