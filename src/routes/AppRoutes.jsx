import { Routes, Route } from "react-router-dom";
import MainMenu from "../pages/MainMenu";
import MenuClientes from "../pages/MenuClientes";
import ListaClientes from "../pages/ListaClientes";
import ListaReservas from "../pages/ListaReservas";
import ListaServicos from "../pages/ListaServicos";
import MenuServicos from "../pages/MenuServicos";
import CadastroCli from "../pages/CadastroCli";
import MenuReservas from "../pages/MenuReservas";

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<MainMenu />} />
			<Route path="/MenuClientes" element={<MenuClientes />} />
			<Route path="/cadastrarClientes" element={<CadastroCli />} />
			<Route path="/listaClientes" element={<ListaClientes />} />
			<Route path="/MenuServicos" element={<MenuServicos />} />
			<Route path="/listaServicos" element={<ListaServicos />} />
			<Route path="/MenuReservas" element={<MenuReservas />} />
			<Route path="/listaReservas" element={<ListaReservas />} />
		</Routes>
	);
}

export default AppRoutes;
