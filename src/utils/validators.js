export function validarEmail(email) {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return regex.test(email);
}
export function validarTelefone(tel) {
	// Aceita formatos (99) 99999-9999 ou 99999999999
	const regex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
	return regex.test(tel);
}
// export function validarNome(nome) {
// 	const regex = /\D+/;
// 	return regex.test(nome);
// }
// utils/validators.js
export function validarCliente({ nome, email, cidade, estado, telefone }) {
	const errors = {};

	if (!nome.trim()) errors.nome = "Nome é obrigatório";
	if (!email.trim() || !validarEmail(email)) errors.email = "E-mail inválido";
	if (!cidade.trim()) errors.cidade = "Cidade é obrigatória";
	if (!estado.trim()) errors.estado = "Estado é obrigatório";
	if (!telefone.trim() || !validarTelefone(telefone))
		errors.telefone = "Telefone inválido";

	return errors;
}
