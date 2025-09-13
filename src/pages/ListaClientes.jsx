import { useState, useEffect } from "react";
import { getClientes, deleteClientes } from "../api/clientes";
import BtnGoBack from "../components/BtnGoBack";
import LoadingScreen from "../components/LoadingScreen";
import EditModel from "../components/EditModel";
import Confirm from "../components/Confirm";
import SuccessModel from "../components/SuccessModel";

function ListaClientes() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [clienteParaEditar, setClienteParaEditar] = useState(null);
	const [excluirCliente, setExcluirCliente] = useState(null);
	const [showSuccess, setShowSuccess] = useState(false);

	function closeModel() {
		setShowSuccess(false);
		setExcluirCliente(false);
	}
	const getNewClient = async () => {
		getClientes()
			.then((result) => {
				setData(result);

				// salva no localStorage com timestamp
				const dataClientes = {
					clientes: result,
					updatedAt: Date.now(),
				};
				localStorage.setItem("clientes", JSON.stringify(dataClientes));
			})
			.catch((err) => setError(err));
	};
	useEffect(() => {
		window.addEventListener("clientesAtualizados", getNewClient());
		return () =>
			window.removeEventListener("clientesAtualizados", getNewClient());
	}, []);

	useEffect(() => {
		const cached = localStorage.getItem("clientes");

		if (cached) {
			const parsed = JSON.parse(cached);

			// verifica se tem menos de 5 minutos
			if (Date.now() - parsed.updatedAt < 300000) {
				setData(parsed.clientes);
				return;
			}
		}

		getNewClient();
	}, []);

	if (error) return <p>Erro: {error.message}</p>;
	if (!data) return <LoadingScreen />;

	const clientes = data.dados;
	const handleEdit = (cli) => setClienteParaEditar(cli);

	const closeEditModel = () => setClienteParaEditar(null);

	const handleDelete = async (id) => {
		setExcluirCliente(id);
	};

	async function deleteCliente() {
		console.log(excluirCliente);
		try {
			await deleteClientes(excluirCliente);
			setShowSuccess(true);

			setData((prevData) => ({
				...prevData,
				dados: prevData.dados.filter(
					(cliente) => cliente.id !== excluirCliente
				),
			}));
			setExcluirCliente(false);
		} catch (err) {
			console.error("Erro ao excluir cliente: ", err);
			alert("Erro ao excluir cliente.");
		}
	}

	return (
		<div className="min-h-screen flex flex-col items-center w-full bg-gradient-to-br from-blue-400 to-blue-700 p-8">
			<BtnGoBack />
			<div>
				{/* exibição condicional do modal */}
				{clienteParaEditar && (
					<EditModel
						onUpdated={getNewClient}
						cliente={clienteParaEditar}
						onClose={closeEditModel}
					/>
				)}
			</div>

			<h1 className="text-3xl font-bold text-white text-center mb-10">
				Lista de Clientes
			</h1>
			<div className="flex flex-col md:flex-row w-[80%] items-center justify-between bg-white p-4 gap-6 mb-6 rounded-2xl shadow">
				{/* Filtros básicos (lado esquerdo) */}
				<div className="flex items-center gap-2 w-full md:w-auto">
					<label
						className="text-sm font-medium text-gray-600"
						htmlFor="optionsDd"
					>
						Filtrar por:
					</label>
					<select
						className="px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
						name="optionsDd"
						id="optionsDd"
					>
						<option value="recente">Mais Recente</option>
						<option value="antigo">Mais Antigo</option>
						<option value="nome">Nome</option>
						<option value="cidade">Cidade</option>
						<option value="estado">Estado</option>
						<option value="email">E-mail</option>
						<option value="telefone">Telefone</option>
						<option value="status">Status</option>
					</select>
				</div>

				{/* Barra de pesquisa (centralizado) */}
				<div className="flex-1 flex justify-center w-full md:w-auto">
					<div className="relative w-full sm:w-2/3 md:w-96">
						<input
							className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
							type="text"
							placeholder="Pesquisar cliente..."
						/>
						<span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
					</div>
				</div>

				<div className="flex gap-2 items-center w-full md:w-auto justify-center md:justify-end">
					<label className="text-sm font-medium text-gray-600">Data:</label>
					<input
						type="date"
						className="px-2 py-1 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
					/>
					<span className="text-gray-500">até</span>
					<input
						type="date"
						className="px-2 py-1 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
					/>
				</div>
			</div>

			{/* Grid de clientes */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
				{clientes.map((cliente) => (
					<div
						key={cliente.id}
						className="bg-white p-6 flex flex-col items-center rounded-2xl shadow-md hover:shadow-xl transition min-h-[220px]"
					>
						<h2 className="text-xl font-semibold text-blue-600 mb-2 text-center">
							{cliente.nome}
						</h2>
						<p className="text-gray-500 text-sm">{cliente.email}</p>
						<p className="text-gray-500 text-sm">
							{cliente.cidade} - {cliente.estado}
						</p>
						<p className="text-gray-500 font-medium mt-2">{cliente.datanasc}</p>
						{console.log(cliente)}
						<p className="text-gray-700 font-medium mt-2">{cliente.telefone}</p>

						<div className="flex gap-3 mt-6 w-full">
							<button
								onClick={() => handleEdit(cliente)}
								className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition"
							>
								Editar
							</button>
							<button
								onClick={() => handleDelete(cliente.id)}
								className="flex-1 bg-red-500 text-white px-4 py-2 rounded-xl shadow hover:bg-red-600 transition"
							>
								Excluir
							</button>
							{/*Exibicao condicional do modal de confirmação de exclusao de usuario*/}
							{excluirCliente && (
								<Confirm onConfirm={deleteCliente} onCancel={closeModel} />
							)}
						</div>
					</div>
				))}
			</div>
			{showSuccess && <SuccessModel onClose={closeModel} />}
		</div>
	);
}

export default ListaClientes;
