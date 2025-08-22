import BtnOption from "../components/BtnOption";
import { useNavigate } from "react-router-dom";

function MainMenu() {
	const navigate = useNavigate();

	return (
		<div className="min-h-screen w-full bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center p-6">
			<div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md flex flex-col space-y-6">
				<h1 className="text-3xl font-bold text-blue-600 text-center mb-4">
					Menu Principal
				</h1>

				<BtnOption onClick={() => navigate("/MenuReservas")}>
					✅ Reservas
				</BtnOption>
				<BtnOption onClick={() => navigate("/MenuClientes")}>
					📝 Clientes
				</BtnOption>
				<BtnOption onClick={() => navigate("/MenuServicos")}>
					⚙️ Serviços
				</BtnOption>
			</div>
		</div>
	);
}
export default MainMenu;
