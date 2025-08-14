import { useNavigate } from "react-router-dom";

function MainMenu() {
	const navigate = useNavigate();
	return (
		<div className="space-y-4 p-6 bg-slate-200 rounded-md shadow min-w-[500px] min-h-[200px] max-h-[480px]">
			<h1>Oi</h1>
			<button
				className="bg-blue-500 text-white px-4 py-2 rounded"
				onClick={() => navigate("/ListaClientes")}
			>
				Listar Clientes
			</button>
		</div>
	);
}
export default MainMenu;
