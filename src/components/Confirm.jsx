function Confirm({ onConfirm, onCancel }) {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div className="bg-white p-6 rounded-2xl shadow-xl w-80 max-w-full text-center">
				<p className="text-lg font-medium mb-4">Confirma a exclusão?</p>
				<div className="flex justify-center gap-4">
					<button
						onClick={onConfirm}
						className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
					>
						Confirmar
					</button>
					<button
						onClick={onCancel}
						className="bg-gray-300 text-gray-800 px-4 py-2 rounded-xl hover:bg-gray-400 transition"
					>
						Cancelar
					</button>
				</div>
			</div>
		</div>
	);
}
export default Confirm;
