import { render } from 'react-dom';
import Form from './components/Form';

const App = () => {
	return (
		<div>
			<div className="title">My Markup Generator</div>
			<Form />
		</div>
	);
};

render(<App />, document.getElementById('root'));
