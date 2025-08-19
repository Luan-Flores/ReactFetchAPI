import { useNavigate } from "react-router-dom";
import BtnOption from "./BtnOption";
import ClientesForm from "./ClientesForm";
function MainMenu() {
	const navigate = useNavigate();
	return (
		<div className="space-y-4 p-6 bg-white rounded-md shadow min-w-[200px] min-h-[200px] max-h-[480px] flex flex-col">
			<BtnOption onClick={() => navigate("/ListaClientes")}>
				Lista de Clientes
			</BtnOption>
			<BtnOption onClick={() => navigate("/ListaClientesID")}>
				Buscar cliente por ID
			</BtnOption>
			<ClientesForm></ClientesForm>
		</div>
	);
}
export default MainMenu;
