import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
function BtnGoBack() {
	const navigate = useNavigate();
	return (
		<button
			onClick={() => navigate(-1)}
			className="flex pe-3 p-1 rounded-full absolute left-2 top-4   bg-blue-500 hover:bg-blue-600 text-slate-100"
		>
			<ChevronLeftIcon />
			Voltar
		</button>
	);
}
export default BtnGoBack;
