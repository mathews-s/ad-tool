import { render } from 'react-dom';
import Form from './components/Form';
import Clock from './components/Clock';

const App = () => {
	return (
		<div className="container">
			<section className="section hero is-primary ">
				<div className="hero-body">
					<p className="title">My Markup Generator</p>
					<Clock />
				</div>
			</section>
			<section className="section">
				<Form />
			</section>
		</div>
	);
};

render(<App />, document.getElementById('root'));
