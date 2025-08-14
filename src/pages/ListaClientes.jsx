import { useState, useEffect } from "react";
import { getClientes } from "../api/clientes";

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
	return (
		<div>
			<h1>Listagem dos Clientes</h1>

			<div className="space-y-4 p-6 bg-emerald-800 rounded-md shadow min-w-[600px] min-h-[400px] max-h-[480px] flex flex-col">
				<div className="flex p-2 bg-slate-400 gap-[60px] justify-center rounded-md">
					<h2>ID</h2>
					<h2>Nome</h2>
					<h2>Email</h2>
					<h2>Cidade</h2>
					<h2>Estado</h2>
					<h2>Telefone</h2>
				</div>
				{data.dados.map((cliente) => (
					<ul
						key={cliente.id}
						className=" bg-emerald-50 p-1 flex gap-10 justify-center flex-column rounded-md "
					>
						<li>{cliente.id}</li>
						<li>{cliente.nome}</li>
						<li>{cliente.email}</li>
						<li>{cliente.cidade}</li>
						<li>{cliente.estado}</li>
						<li>{cliente.telefone}</li>
					</ul>
				))}
			</div>
		</div>
	);
}

export default ListaClientes;
