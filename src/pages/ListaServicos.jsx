import { useState, useEffect } from "react";
import { getServicos } from "../api/servicos";
import LoadingScreen from "../components/LoadingScreen";
import BtnGoBack from "../components/BtnGoBack";

function ListaServicos() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		getServicos()
			.then((result) => setData(result))
			.catch((err) => setError(err));
	}, []);

	if (error) return <p>Erro: {error.message}</p>;
	if (!data) return <LoadingScreen />;

	const servicos = data.dados;

	return (
		<div className="min-h-screen flex flex-col items-center w-full bg-gradient-to-br from-blue-400 to-blue-700 p-8">
			<BtnGoBack />

			<h1 className="text-3xl font-bold text-white text-center mb-10">
				Lista de Serviços
			</h1>

			{/* Grid de serviços */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
				{servicos.map((servico) => (
					<div
						key={servico.id}
						className="bg-white p-6 flex flex-col items-center rounded-2xl shadow-md hover:shadow-xl transition min-h-[220px] w-full"
					>
						<h2 className="text-xl font-semibold text-blue-600 mb-2 text-center">
							{servico.nome}
						</h2>
						<p className="text-gray-500 text-sm">
							Duração: {servico.duracao} minutos
						</p>
						<p className="text-gray-500 text-sm">Preço: R$ {servico.preco}</p>
						<p
							className={`font-medium mt-2 ${
								servico.ativo ? "text-green-600" : "text-red-500"
							}`}
						>
							{servico.ativo ? "Ativo" : "Inativo"}
						</p>

						<div className="flex gap-3 mt-6 w-full justify-center">
							<button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition">
								Editar
							</button>
							<button className="flex-1 bg-red-500 text-white px-4 py-2 rounded-xl shadow hover:bg-red-600 transition">
								Excluir
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default ListaServicos;
