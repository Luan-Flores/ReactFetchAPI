export async function getClientes() {
	const response = await fetch("http://localhost/api/clientes/listar");
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	return await response.json();
}
