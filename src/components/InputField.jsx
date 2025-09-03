function InputField({ value, onChange, error, placeholder, type = "text" }) {
	return (
		<div className="input-box">
			<input
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				className={`border rounded-xl p-3 w-full focus:ring-2 focus:outline-none ${
					error
						? "border-red-500 focus:ring-red-500"
						: "border-blue-300 focus:ring-blue-500"
				}`}
			/>
			{error && <p className="text-red-500 text-sm mt-1">{error}</p>}
		</div>
	);
}
export default InputField;
