import { useState } from "react";

function ServicosForm() {
	const [nome, setNome] = useState("");
	const [duracao, setDuracao] = useState("");
	const [preco, setPreco] = useState(""); // tipo decimal, no JSON vem como STRING
	const [ativo, setAtivo] = useState(true);

	return (
		<div>
			<h1>Serviços cadastro</h1>
		</div>
	);
}
export default ServicosForm;
