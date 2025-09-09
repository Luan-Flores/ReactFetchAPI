const API_URL = "https://api-rest-php-j9ir.onrender.com/reservas";
export async function getReservas() {
	const response = await fetch(`${API_URL}/listar`);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	return await response.json();
}
