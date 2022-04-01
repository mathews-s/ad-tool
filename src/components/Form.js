import { useState } from 'react';
import Result from './Result';

const Form = () => {
	const [name, setName] = useState('');
	const [data, setData] = useState('');
	const [result, setResult] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		setResult({ name, data });
		resetForm();
	};

	const resetForm = () => {
		setName('');
		setData('');
	};

	return (
		<div>
			<div>
				<form onSubmit={handleSubmit}>
					<label>
						<input
							placeholder="classname"
							id="classInput"
							type="text"
							value={name}
							onChange={e => setName(e.target.value)}
						/>
						<input
							placeholder="jsOptions"
							id="dataInput"
							type="text"
							value={data}
							onChange={e => setData(e.target.value)}
						/>
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
			<Result result={result} />
		</div>
	);
};

export default Form;
