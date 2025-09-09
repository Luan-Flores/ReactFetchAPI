import { useState, useEffect } from "react";
import { getReservas } from "../api/reservas";

function ListaServicos() {
	async function pegar() {
		const data = await getReservas();
		console.log(data.dados);
	}
	pegar();
	return (
		<div>
			<h1>OK</h1>
		</div>
	);
}

export default ListaServicos;
