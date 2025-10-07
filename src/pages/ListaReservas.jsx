import { useState, useEffect } from "react";
import { getReservas } from "../api/reservas";

function ListaReservas() {
	const [data, setData] = useState("");
	// const [idCliente, setIdCliente] = useState(null);
	// const [idServico, setIdServico] = useState(null);
	// const [dataHora, setDataHora] = useState("");
	// const [mensagem, setMensagem] = useState("");
	// const [status, setStatus] = useState("");
	// const [dataCriado, setDataCriado] = useState("");
	// const [dataAtualizado, setDataAtualizado] = useState("");

	const getNewReservas = async () => {
		getReservas().then((result) => {
			setData(result);
			console.log(data);
		});
	};
	useEffect(() => {
		getNewReservas();
	}, []);
	return (
		<div className="min-h-screen flex flex-col items-center w-full bg-gradient-to-br from-blue-400 to-blue-700 p-8">
			<section className="bg-white w-full min-h-screen gap-6 mb-4 rounded-2xl shadow flex flex-col p-4 ">
				<nav className="bg-slate-400 flex w-auto justify-between h-auto">
					<div>Clientes</div>
					<div>Reservas</div>
					<div>Serviços</div>
				</nav>
				<div className="flex min-h-screen bg-slate-200 p-6">
					<div className="flex w-full gap-4">
						<ul className="flex-col items-center bg-yellow-400 rounded-2xl p-4 w-full">
							<li className="flex flex-col gap-2">
								<div className="flex flex-col items-center w-full bg-slate-500">
									<h1>Serviço1</h1>
									<h2>Nome</h2>
									<h2>Serviço</h2>
									<h2>Horas</h2>
								</div>
								<div className="flex flex-col items-center w-full bg-slate-500">
									<h1>Serviço1</h1>
									<h2>Nome</h2>
									<h2>Serviço</h2>
									<h2>Horas</h2>
								</div>
							</li>
						</ul>
						<ul className="flex-col w-full rounded-2xl bg-green-500 p-4">
							<li>
								<h1>Testes</h1>
								<h1>Testes</h1>
								<h1>Testes</h1>
								<h1>Testes</h1>
							</li>
						</ul>
						<ul className="flex-col w-full rounded-2xl bg-blue-500 p-4">
							<li>
								<h1>Testes</h1>
								<h1>Testes</h1>
								<h1>Testes</h1>
								<h1>Testes</h1>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
}

export default ListaReservas;
