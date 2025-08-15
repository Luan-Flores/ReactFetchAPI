function BtnOption(props) {
	return (
		<button
			{...props}
			className="w-full flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow transition-all duration-200"
		>
			{/* {props.children} permite passar elementos ou componentes como filho direto */}
		</button>
	);
}
export default BtnOption;
