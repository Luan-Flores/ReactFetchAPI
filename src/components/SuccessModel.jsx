function SuccessModel({ onClose }) {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm w-full text-center">
				<h1 className="text-xl font-semibold text-green-600">
					✅ Operação realizada com sucesso!
				</h1>
				<p className="text-gray-600 mt-2">
					Sua ação foi concluída corretamente.
				</p>
				<button
					onClick={onClose}
					className="mt-4 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
				>
					Fechar
				</button>
			</div>
		</div>
	);
}
export default SuccessModel;
