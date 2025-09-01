import { useState } from "react";
import { validarEmail, validarTelefone } from "../utils/validators";
import { editClientes } from "../api/clientes";

function EditModel({ cliente, onClose }) {
	const [nome, setNome] = useState(cliente.nome || "");
	const [email, setEmail] = useState(cliente.email || "");
	const [cidade, setCidade] = useState(cliente.cidade || "");
	const [estado, setEstado] = useState(cliente.estado || "");
	const [telefone, setTelefone] = useState(cliente.telefone || "");

	const handleSubmit = (e) => {
		e.preventDefault();
		const resp = editClientes({ nome, email, cidade, estado, telefone });
		console.log(resp);
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
			<div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6">
				<h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
					Editar Cliente
				</h2>

				<form onSubmit={handleSubmit} className="flex flex-col gap-6">
					{/* Nome */}
					<div className="relative w-full">
						<label
							htmlFor="nome"
							className="absolute -top-2 left-3 bg-white px-1 text-sm italic text-gray-700"
						>
							Nome
						</label>
						<input
							id="nome"
							type="text"
							defaultValue={nome}
							onChange={(e) => setNome(e.target.value)}
							className="w-full rounded-xl border-2 border-gray-300 px-3 pt-4 pb-2 text-base focus:outline-none focus:border-blue-500"
						/>
					</div>

					{/* Email */}
					<div className="relative w-full">
						<label
							htmlFor="email"
							className="absolute -top-2 left-3 bg-white px-1 text-sm italic text-gray-700"
						>
							Email
						</label>
						<input
							id="email"
							type="email"
							defaultValue={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full rounded-xl border-2 border-gray-300 px-3 pt-4 pb-2 text-base focus:outline-none focus:border-blue-500"
						/>
					</div>

					{/* Cidade */}
					<div className="relative w-full">
						<label
							htmlFor="cidade"
							className="absolute -top-2 left-3 bg-white px-1 text-sm italic text-gray-700"
						>
							Cidade
						</label>
						<input
							id="cidade"
							type="text"
							onChange={(e) => setCidade(e.target.value)}
							defaultValue={cidade}
							className="w-full rounded-xl border-2 border-gray-300 px-3 pt-4 pb-2 text-base focus:outline-none focus:border-blue-500"
						/>
					</div>
					<div className="relative w-full">
						<label
							htmlFor="estado"
							className="absolute -top-2 left-3 bg-white px-1 text-sm italic text-gray-700"
						>
							Estado
						</label>
						<input
							id="estado"
							type="text"
							onChange={(e) => setEstado(e.target.value)}
							defaultValue={estado}
							className="w-full rounded-xl border-2 border-gray-300 px-3 pt-4 pb-2 text-base focus:outline-none focus:border-blue-500"
						/>
					</div>
					<div className="relative w-full">
						<label
							htmlFor="telefone"
							className="absolute -top-2 left-3 bg-white px-1 text-sm italic text-gray-700"
						>
							Telefone
						</label>
						<input
							id="telefone"
							type="text"
							onChange={(e) => setTelefone(e.target.value)}
							defaultValue={telefone}
							className="w-full rounded-xl border-2 border-gray-300 px-3 pt-4 pb-2 text-base focus:outline-none focus:border-blue-500"
						/>
					</div>

					{/* Ações */}
					<div className="flex justify-end gap-3 mt-4">
						<button
							type="button"
							onClick={onClose}
							className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
						>
							Cancelar
						</button>
						<button
							type="submit"
							className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
						>
							Salvar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default EditModel;
