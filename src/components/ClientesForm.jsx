import { useState } from "react";
import { validarCliente } from "../utils/validators";
import { addClientes } from "../api/clientes";
import BtnGoBack from "./BtnGoBack";
import InputField from "./InputField";
import SuccessModel from "./SuccessModel";

function ClientesForm() {
	const [showSuccess, setShowSuccess] = useState(false);
	const [nome, setNome] = useState("");
	const [email, setEmail] = useState("");
	const [dataNasc, setDataNasc] = useState("");
	const [cidade, setCidade] = useState("");
	const [estado, setEstado] = useState("");
	const [telefone, setTelefone] = useState("");
	const [errors, setErrors] = useState("");

	// const exibirErro = (campo) =>
	// 	errors[campo] ? (
	// 		<p className="flex gap-1.5 items-center">
	// 			<i className="text-red-500">
	// 				<FiAlertCircle />
	// 			</i>
	// 			{errors[campo]}
	// 		</p>
	// 	) : null;
	//troquei essa funcao pelo componente InputField que ja trata o erro exibindo o input e mensagem em vermelho

	const handleSubmit = async (e) => {
		e.preventDefault();

		const validationErrors = validarCliente({
			nome,
			email,
			dataNasc,
			cidade,
			estado,
			telefone,
		});

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		try {
			const resp = await addClientes({
				nome,
				email,
				dataNasc,
				cidade,
				estado,
				telefone,
			});
			console.log("Cliente adicionado: ", resp);
			// limpa os campos
			setNome("");
			setEmail("");
			setDataNasc("");
			setCidade("");
			setEstado("");
			setTelefone("");
			setShowSuccess(true);
		} catch (err) {
			console.error("Erro ao cadastrar cliente: ", err);
			alert("Erro no cadastro");
		}
		window.dispatchEvent(new Event("clientesAtualizados"));
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
				<InputField
					placeholder="Nome"
					value={nome}
					onChange={(e) => setNome(e.target.value)}
					error={errors.nome}
				/>
				<InputField
					placeholder="Data de Nascimento"
					value={dataNasc}
					onChange={(e) => setDataNasc(e.target.value)}
					error={errors.dataNasc}
				/>
				<InputField
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					error={errors.email}
				/>
				<InputField
					placeholder="Cidade"
					value={cidade}
					onChange={(e) => setCidade(e.target.value)}
					error={errors.cidade}
				/>
				<InputField
					placeholder="Estado"
					value={estado}
					onChange={(e) => setEstado(e.target.value)}
					error={errors.estado}
				/>
				<InputField
					placeholder="Telefone"
					value={telefone}
					onChange={(e) => setTelefone(e.target.value)}
					error={errors.telefone}
				/>

				<button
					type="submit"
					className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
				>
					Cadastrar
				</button>
			</form>
			{showSuccess && <SuccessModel onClose={() => setShowSuccess(false)} />};
		</div>
	);
}

export default ClientesForm;
