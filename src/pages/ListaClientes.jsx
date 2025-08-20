import { useState, useEffect } from "react";
import { getClientes } from "../api/clientes";
import BtnGoBack from "../components/BtnGoBack";

function ListaClientes() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		getClientes()
			.then((result) => setData(result))
			.catch((err) => setError(err));
	}, []);

	if (error) return <p>Erro: {error.message}</p>;
	if (!data) return <p>Carregando...</p>;

	const clientes = data.dados;

	return (
		<div className="min-h-screen w-full bg-gradient-to-br from-blue-400 to-blue-700 p-8">
			<BtnGoBack />

			<h1 className="text-3xl font-bold text-white text-center mb-10">
				Lista de Clientes
			</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{clientes.map((cliente) => (
					<div
						key={cliente.id}
						className="bg-white min-w-[280px] max-w-[400px] w-full p-6 flex flex-col items-center rounded-2xl shadow-md hover:shadow-xl transition"
					>
						<h2 className="text-xl font-semibold text-blue-600">
							{cliente.nome}
						</h2>
						<p className="text-gray-500 text-sm">{cliente.email}</p>
						<p className="text-gray-500 text-sm">
							{cliente.cidade} - {cliente.estado}
						</p>
						<p className="text-gray-700 font-medium mt-2">{cliente.telefone}</p>

						<div className="flex gap-3 mt-6">
							<button className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition">
								Editar
							</button>
							<button className="bg-red-500 text-white px-4 py-2 rounded-xl shadow hover:bg-red-600 transition">
								Excluir
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default ListaClientes;
