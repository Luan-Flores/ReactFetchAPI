import { useState } from "react";
import InputField from "../components/InputField";
import { validarCliente } from "../utils/validators";
import { editClientes } from "../api/clientes";
import SuccessModel from "./SuccessModel";

function EditModel({ cliente, onClose, onUpdated }) {
	const [nome, setNome] = useState(cliente.nome || "");
	const [email, setEmail] = useState(cliente.email || "");
	const [cidade, setCidade] = useState(cliente.cidade || "");
	const [estado, setEstado] = useState(cliente.estado || "");
	const [telefone, setTelefone] = useState(cliente.telefone || "");
	const [errors, setErrors] = useState({});
	const [showSuccess, setShowSuccess] = useState(false);

	const originalCliente = cliente;

	const getDiff = (cliOriginal, cliEditado) => {
		const diff = {};
		for (const key in cliEditado) {
			if (cliEditado[key] !== cliOriginal[key]) {
				diff[key] = cliEditado[key];
			}
		}
		return diff;
	};

	function closeModel() {
		setShowSuccess(false); //fechar modal de sucesso
		onClose(); //fechar modal de edicao
		onUpdated(); //emite um sinal de alteraçao para o componente pai
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validarCliente({
			nome,
			email,
			cidade,
			estado,
			telefone,
		});

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}
		setErrors({});
		const editadoCliente = { nome, email, cidade, estado, telefone };
		const diff = getDiff(originalCliente, editadoCliente);
		if (Object.keys(diff).length > 0) {
			const resp = editClientes(originalCliente.id, diff);
			setShowSuccess(true);
			console.log("Resposta da API:", resp);
		} else console.log("Nenhuma alteração detectada");
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
						<InputField
							id="nome"
							label="Nome"
							value={nome}
							onChange={(e) => setNome(e.target.value)}
							error={errors.nome}
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
						<InputField
							id="email"
							label="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							error={errors.email}
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
						<InputField
							id="cidade"
							label="cidade"
							value={cidade}
							onChange={(e) => setCidade(e.target.value)}
							error={errors.cidade}
						/>
					</div>
					<div className="relative w-full">
						<label
							htmlFor="estado"
							className="absolute -top-2 left-3 bg-white px-1 text-sm italic text-gray-700"
						>
							Estado
						</label>
						<InputField
							id="estado"
							label="estado"
							value={estado}
							onChange={(e) => setEstado(e.target.value)}
							error={errors.estado}
						/>
					</div>
					<div className="relative w-full">
						<label
							htmlFor="telefone"
							className="absolute -top-2 left-3 bg-white px-1 text-sm italic text-gray-700"
						>
							Telefone
						</label>
						<InputField
							id="telefone"
							label="telefone"
							value={telefone}
							onChange={(e) => setTelefone(e.target.value)}
							error={errors.telefone}
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
			{showSuccess && <SuccessModel onClose={closeModel} />}
		</div>
	);
}

export default EditModel;
