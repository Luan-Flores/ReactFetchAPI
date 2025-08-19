import { useState } from "react";
import { validarEmail, validarTelefone } from "../utils/validators";
import { addClientes } from "../api/clientes";
function ClientesForm() {
	const [nome, setNome] = useState("");
	const [email, setEmail] = useState("");
	const [cidade, setCidade] = useState("");
	const [estado, setEstado] = useState("");
	const [telefone, setTelefone] = useState("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!nome || !email || !cidade || !estado || !telefone) {
			alert("Preencha os campos obrigatórios. ");
			return;
		}
		if (!validarEmail(email) || !validarTelefone(telefone)) {
			alert("Preencha os campos corretamente. ");
			return;
		}
		try {
			const resp = await addClientes({ nome, email, cidade, estado, telefone });
			console.log("Cliente adicionado: ", resp);
			alert("Cliente cadastrado com sucesso!");
		} catch (err) {
			console.error("Erro ao cadasrar cliente: ", err);
			alert("Erro no cadastro");
		}
	};
	return (
		<form onSubmit={handleSubmit} action="" method="post">
			<input
				type="text"
				placeholder="Nome"
				value={nome}
				onChange={(e) => setNome(e.target.value)}
				className="border rounded-2xl p-2 w-full"
			/>
			<input
				type="text"
				placeholder="E-mail"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className="border rounded-2xl p-2 w-full"
			/>
			<input
				type="text"
				placeholder="Cidade"
				value={cidade}
				onChange={(e) => setCidade(e.target.value)}
				className="border rounded-2xl p-2 w-full"
			/>
			<input
				type="text"
				placeholder="Estado"
				value={estado}
				onChange={(e) => setEstado(e.target.value)}
				className="border rounded-2xl p-2 w-full"
			/>
			<input
				type="text"
				placeholder="Telefone"
				value={telefone}
				onChange={(e) => setTelefone(e.target.value)}
				className="border rounded-2xl p-2 w-full"
			/>
			<button type="submit">Cadastrar</button>
		</form>
	);
}
export default ClientesForm;
