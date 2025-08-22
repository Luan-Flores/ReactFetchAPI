import { Routes, Route } from "react-router-dom";
import MainMenu from "../pages/MainMenu";
import MenuClientes from "../pages/MenuClientes";
import ListaClientes from "../pages/ListaClientes";
import ListaServicos from "../pages/ListaServicos";
import MenuServicos from "../pages/MenuServicos";

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<MainMenu />} />
			<Route path="/MenuClientes" element={<MenuClientes />} />
			<Route path="/listaClientes" element={<ListaClientes />} />
			<Route path="/MenuServicos" element={<MenuServicos />} />
			<Route path="/listaServicos" element={<ListaServicos />} />
		</Routes>
	);
}

export default AppRoutes;
