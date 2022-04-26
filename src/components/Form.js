import { useState } from 'react';
import Result from './Result';

const Form = () => {
	const [cssClassName, setCssClassName] = useState('');
	const [unit, setUnit] = useState('');
	const [result, setResult] = useState('');
	const [property, setProperty] = useState('');
	const [section, setSection] = useState('');
	const [pageType, setPageType] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		const resultObject = {
			cssClassName: 'advertisement__container',
			unit,
			property,
			section,
			pageType,
		};
		setResult(resultObject);
		resetForm();
	};

	const resetForm = () => {
		setCssClassName('');
		setUnit('');
		setProperty('');
		setSection('');
		setPageType('');
	};

	/**
	 * Below could be anything
	 */
	const UNITS = ['lb1', 'outstream1', 'imu1', 'outstream2', 'imu2', 'side1'];
	const PROPERTIES = ['cna'];
	const SECTIONS = ['brand_studio'];
	const PAGES = ['landingpage', 'articlepage'];

	return (
		<div className="columns">
			<div className="column">
				<form onSubmit={handleSubmit}>
					<div className="columns">
						<div className="column is-half">
							<div className="field">
								<label className="label">Classname</label>
								<div className="control">
									<input
										className="input"
										type="text"
										placeholder="advertisement__container"
										value={cssClassName}
										onChange={e => setCssClassName(e.target.value)}
										disabled
									></input>
								</div>
							</div>
						</div>
					</div>
					<div className="columns">
						<div className="column">
							<div className="field">
								<label className="label">Site</label>
								<div className="control">
									<div className="select">
										<select
											id="propertyInput"
											value={property}
											onChange={e => {
												setProperty(e.target.value);
											}}
										>
											<option />
											{PROPERTIES.map(property => (
												<option key={property} value={property}>
													{property}
												</option>
											))}
										</select>
									</div>
								</div>
							</div>
						</div>
						<div className="column">
							<div className="field">
								<label className="label">Section</label>
								<div className="control">
									<div className="select">
										<select
											id="sectionInput"
											value={section}
											onChange={e => {
												setSection(e.target.value);
											}}
										>
											<option />
											{SECTIONS.map(section => (
												<option key={section} value={section}>
													{section}
												</option>
											))}
										</select>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="columns">
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
													{unit}
												</option>
											))}
										</select>
									</div>
								</div>
							</div>
						</div>
						<div className="column">
							<div className="field">
								<label className="label">Page Type</label>
								<div className="control">
									<div className="select">
										<select
											id="pageTypeInput"
											value={pageType}
											onChange={e => {
												setPageType(e.target.value);
											}}
										>
											<option />
											{PAGES.map(page => (
												<option key={page} value={page}>
													{page}
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
