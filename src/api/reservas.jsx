const API_URL = "http://localhost/codigos/Api-Reservas/php-reservas/reservas";
export async function getReservas() {
	const response = await fetch(`${API_URL}/listar`);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	return await response.json();
}
