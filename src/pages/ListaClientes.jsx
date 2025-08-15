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
	console.log(data);
	const clientes = data.dados;
	return (
		<div>
			<BtnGoBack></BtnGoBack>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{clientes.map((cliente) => (
					<div
						key={cliente.id}
						className="bg-white min-w-[280px] max-w-[400px] p-4 flex flex-col items-center rounded-lg shadow hover:shadow-lg transition"
					>
						<h2 className="text-lg font-semibold">{cliente.nome}</h2>
						<p className="text-gray-500 text-sm">{cliente.email}</p>
						<p className="text-gray-500 text-sm">
							{cliente.cidade} - {cliente.estado}
						</p>
						<p className="text-gray-700 font-medium mt-2">{cliente.telefone}</p>
						<div className="flex gap-2 mt-4">
							<button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
								Editar
							</button>
							<button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
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
