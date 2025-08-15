import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { CheckIcon, ChevronRightIcon, Menu, TrashIcon } from "lucide-react"; //biblioteca de icons
import MainMenu from "./components/MainMenu";
import ListaClientes from "./pages/ListaClientes";
import ListaClientesID from "./pages/ListaClientesID";

function App() {
	// const [count, setCount] = useState();

	return (
		<Router>
			<Routes>
				<Route path="/" element={<MainMenu />} />
				{/* path="/listaClientes é o caminho para a page que chama o fetch específico" */}
				<Route path="/listaClientes" element={<ListaClientes />} />
				<Route path="/listaClientesID" element={<ListaClientesID />} />
			</Routes>
		</Router>
	);
}

export default App;
