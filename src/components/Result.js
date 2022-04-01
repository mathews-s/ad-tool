const Result = ({ result }) => {
	const { name, data } = result;

	const markup = result ? `<div name="${name}" data-js-options="${data}"></div>` : '';

	return (
		<div>
			<textarea rows="4" cols="50" value={markup} readOnly></textarea>
		</div>
	);
};

export default Result;
