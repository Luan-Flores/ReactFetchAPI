const API_URL = "https://api-rest-php-j9ir.onrender.com/clientes";
export async function getClientes() {
	const response = await fetch(`${API_URL}/listar`);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	return await response.json();
}

export async function addClientes(dados) {
	const response = await fetch(`${API_URL}/adicionar`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(dados),
	});

	// pega o texto cru (mesmo que não seja JSON válido)
	const text = await response.text();
	console.log("DEBUG addClientes - status:", response.status, "body:", text);

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status} - ${text}`);
	}

	// tenta transformar em JSON (pode lançar)
	try {
		return JSON.parse(text);
	} catch (err) {
		throw new Error(
			`Resposta não é JSON válido: ${err.message} -- corpo: ${text}`
		);
	}
}
