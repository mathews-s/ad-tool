const Result = ({ result }) => {
	const { cssClassName, markUpId, device, unit } = result;

	const dataAttribute = {
		device,
		unit,
	};

	const markup =
		Object.keys(result).length > 0
			? `<div class="${cssClassName}" id="${markUpId}" data-value="${JSON.stringify(
					dataAttribute
			  ).replaceAll(/"/gi, '&quot;')}"></div>`
			: 'Not Available';

	const isSuccess = markup != 'Not Available' ? 'textarea is-success' : 'textarea';

	return (
		<div className="column">
			<label className="label">Markup Result</label>
			<div className="field">
				<div className="control">
					<textarea className={isSuccess} rows="5" cols="30" value={markup} readOnly></textarea>
				</div>
			</div>
		</div>
	);
};

export default Result;
