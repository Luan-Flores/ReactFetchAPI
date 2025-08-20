import { useState } from "react";
import { validarEmail, validarTelefone } from "../utils/validators";
import { addClientes } from "../api/clientes";
import BtnGoBack from "./BtnGoBack";

function ClientesForm() {
	const [nome, setNome] = useState("");
	const [email, setEmail] = useState("");
	const [cidade, setCidade] = useState("");
	const [estado, setEstado] = useState("");
	const [telefone, setTelefone] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!nome || !email || !cidade || !estado || !telefone) {
			alert("Preencha os campos obrigatórios.");
			return;
		}
		if (!validarEmail(email) || !validarTelefone(telefone)) {
			alert("Preencha os campos corretamente.");
			return;
		}
		try {
			const resp = await addClientes({ nome, email, cidade, estado, telefone });
			console.log("Cliente adicionado: ", resp);
			alert("Cliente cadastrado com sucesso!");
			// limpa os campos
			setNome("");
			setEmail("");
			setCidade("");
			setEstado("");
			setTelefone("");
		} catch (err) {
			console.error("Erro ao cadastrar cliente: ", err);
			alert("Erro no cadastro");
		}
	};

	return (
		<div className="min-h-screen w-full bg-gradient-to-br from-blue-400 to-blue-700 p-8">
			<BtnGoBack />

			<h1 className="text-3xl font-bold text-white text-center mb-10">
				Cadastro de Cliente
			</h1>

			<form
				onSubmit={handleSubmit}
				className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl mx-auto space-y-6"
			>
				<input
					type="text"
					placeholder="Nome"
					value={nome}
					onChange={(e) => setNome(e.target.value)}
					className="border border-blue-300 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>

				<input
					type="text"
					placeholder="E-mail"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="border border-blue-300 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>

				<input
					type="text"
					placeholder="Cidade"
					value={cidade}
					onChange={(e) => setCidade(e.target.value)}
					className="border border-blue-300 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>

				<input
					type="text"
					placeholder="Estado"
					value={estado}
					onChange={(e) => setEstado(e.target.value)}
					className="border border-blue-300 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>

				<input
					type="text"
					placeholder="Telefone"
					value={telefone}
					onChange={(e) => setTelefone(e.target.value)}
					className="border border-blue-300 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>

				<button
					type="submit"
					className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
				>
					Cadastrar
				</button>
			</form>
		</div>
	);
}

export default ClientesForm;
