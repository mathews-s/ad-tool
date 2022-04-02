import { useEffect, useState } from 'react';

const Clock = () => {
	const [time, setTime] = useState('');

	const printTime = setInterval(() => {
		setTime(new Date().toLocaleString());
	}, 1000);

	useEffect(() => {
		printTime;
	});

	return (
		<div>
			<p className="subtitle">{time}</p>
		</div>
	);
};

export default Clock;
