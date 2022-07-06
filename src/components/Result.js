import { useState, useEffect } from 'react';
import { SIZES } from '../fixtures/sizes';
import '../styles/togglebutton.css';

const Result = ({ result }) => {
	const { cssClassName, unit, property, section, pageType } = result;
	const [isParsed, setIsParsed] = useState(false);
	const [dataDesktop, setDataDesktop] = useState('{}');
	const [dataTablet, setDataTablet] = useState('{}');
	const [dataMobile, setDataMobile] = useState('{}');

	const DEVICES = ['desktop', 'mobile', 'tablet'];

	const dataAttribute = {
		parentAdUnit: property,
		unitType: unit,
		section,
		pageType,
	};

	useEffect(() => {
		setDataDesktop(
			JSON.stringify({
				networkCode: '4654',
				adChannel: 'na',
				adUnit1: dataAttribute.parentAdUnit + '_dweb',
				adUnit2: dataAttribute.unitType,
				adUnit3: dataAttribute.section,
				adUnit4: dataAttribute.pageType,
				adUnit5: 'na',
				device: 'desktop',
				prgads: 'False',
				noad: 'False',
				sizes: SIZES['desktop'][dataAttribute.unitType],
			})
		);
		setDataTablet(
			JSON.stringify({
				networkCode: '4654',
				adChannel: 'na',
				adUnit1: dataAttribute.parentAdUnit + '_mweb',
				adUnit2: dataAttribute.unitType,
				adUnit3: dataAttribute.section,
				adUnit4: dataAttribute.pageType,
				adUnit5: 'na',
				device: 'tablet',
				prgads: 'False',
				noad: 'False',
				sizes: SIZES['tablet'][dataAttribute.unitType],
			})
		);
		setDataMobile(
			JSON.stringify({
				networkCode: '4654',
				adChannel: 'na',
				adUnit1: dataAttribute.parentAdUnit + '_mweb',
				adUnit2: dataAttribute.unitType,
				adUnit3: dataAttribute.section,
				adUnit4: dataAttribute.pageType,
				adUnit5: 'na',
				device: 'mobile',
				prgads: 'False',
				noad: 'False',
				sizes: SIZES['mobile'][dataAttribute.unitType],
			})
		);
	}, [cssClassName, unit, property, section, pageType]);

	const parser = dataString => {
		if (!isParsed) {
			return dataString.replaceAll(/"/gi, '&quot;');
		} else {
			return dataString.replaceAll('&quot;', '"');
		}
	};

	const toggleParse = () => {
		setIsParsed(!isParsed);
		setDataDesktop(parser(dataDesktop));
		setDataTablet(parser(dataTablet));
		setDataMobile(parser(dataMobile));
	};

	const createId = ({ device, unit }) => {
		return `ad-${device}-${unit}-1`;
	};

	const createMarkup = (unit, section, cssClassName, { dataDesktop, dataMobile, dataTablet }) => {
		let markupString = '';

		DEVICES.map(device => {
			let data;

			if (device == 'desktop') {
				data = dataDesktop;
			} else if (device == 'tablet') {
				data = dataTablet;
			} else {
				data = dataMobile;
			}

			markupString += `\n<!-- ${device} / ${unit} / ${section} --> \n <div class="${cssClassName}" id="${createId(
				{
					device,
					unit,
				}
			)}" data-js-options="${data}"></div>\n`;
		});

		return markupString;
	};

	const markup =
		Object.keys(result).length > 0
			? createMarkup(unit, section, cssClassName, { dataDesktop, dataMobile, dataTablet })
			: 'Not Available';

	const isSuccess = markup != 'Not Available' ? 'textarea is-success' : 'textarea';

	return (
		<div className="column">
			<label className="label">Markup Result</label>
			<div className="field">
				<div className="control">
					<label className="mx-2">Parse js-options</label>
					<label className="switch">
						<input type="checkbox" onChange={toggleParse} />
						<span className="slider round"></span>
					</label>
				</div>
			</div>
			<div className="field">
				<div className="control">
					<textarea className={isSuccess} rows="15" cols="60" value={markup} readOnly></textarea>
				</div>
			</div>
		</div>
	);
};

export default Result;
