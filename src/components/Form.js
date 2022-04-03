import { useState } from 'react';
import Result from './Result';

const Form = () => {
	const [cssClassName, setCssClassName] = useState('');
	const [markUpId, setMarkupId] = useState('');
	const [device, setDevice] = useState('');
	const [unit, setUnit] = useState('');
	const [result, setResult] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		setResult({ cssClassName, markUpId, device, unit });
		resetForm();
	};

	const resetForm = () => {
		setCssClassName('');
		setMarkupId('');
		setDevice('');
		setUnit('');
	};

	/**
	 * Below could be anything
	 */
	const DEVICES = ['desktop', 'mobile', 'tablet'];
	const UNITS = ['demo-1', 'demo-2', 'demo-3', 'demo-4'];

	return (
		<div className="columns">
			<div className="column">
				<form onSubmit={handleSubmit}>
					<div className="columns">
						<div className="column">
							<div className="field">
								<label className="label">Classname</label>
								<div className="control">
									<input
										className="input"
										type="text"
										placeholder="Define classname"
										value={cssClassName}
										onChange={e => setCssClassName(e.target.value)}
									></input>
								</div>
							</div>
						</div>
						<div className="column">
							<div className="field">
								<label className="label">ID</label>
								<div className="control">
									<input
										className="input"
										type="text"
										value={markUpId}
										placeholder="Define ID"
										onChange={e => setMarkupId(e.target.value)}
									></input>
								</div>
							</div>
						</div>
					</div>
					<div className="columns">
						<div className="column">
							<div className="field">
								<label className="label">Device</label>
								<div className="control">
									<div className="select">
										<select
											id="deviceInput"
											value={device}
											onChange={e => {
												setDevice(e.target.value);
											}}
										>
											<option />
											{DEVICES.map(device => (
												<option key={device} value={device}>
													{device}
												</option>
											))}
										</select>
									</div>
								</div>
							</div>
						</div>
						<div className="column">
							<div className="field">
								<label className="label">Unit</label>
								<div className="control">
									<div className="select">
										<select
											id="unitInput"
											value={unit}
											onChange={e => {
												setUnit(e.target.value);
											}}
										>
											<option />
											{UNITS.map(unit => (
												<option key={unit} value={unit}>
													{unit.toLocaleUpperCase()}
												</option>
											))}
										</select>
									</div>
								</div>
							</div>
						</div>
					</div>
					<input className="button is-primary" type="submit" value="Generate" />
				</form>
			</div>
			<Result result={result} />
		</div>
	);
};

export default Form;
