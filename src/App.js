import { render } from 'react-dom';
import Form from './components/Form';

const App = () => {
	return (
		<div>
			<Form />
		</div>
	);
};

render(<App />, document.getElementById('root'));
