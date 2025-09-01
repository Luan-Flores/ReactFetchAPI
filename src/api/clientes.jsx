const API_URL = "https://api-rest-php-j9ir.onrender.com/clientes";

export async function getClientes() {
	const response = await fetch(`${API_URL}/listar`);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	if (response.status == 204) {
		console.log("Nenhum dado encontrado. ");
		return { dados: [] };
	}

	return await response.json();
}
export function editClientes(dados) {
	return dados;
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

export async function deleteClientes(id) {
	const token =
		"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Im5ldG8gZnJlbnRlIiwiZXhwaXJlc19pbiI6MTc1NTY2MTI5NX0.6R3GF0waAUSMkGkJ_Fo8d3eFXNJhU83dUz3XDeGjN0c";

	const response = await fetch(`${API_URL}/deletar/${id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}

	return response.json();
}
