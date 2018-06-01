import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from './ui-components/app';
import '../styles/index.scss';
import getCarts from './actions/get-carts-action';
import getArticles from "./actions/get-articles-action";
import getCategories from "./actions/get-categories-action";
import 'bootstrap/dist/css/bootstrap.min.css';


render(<AppContainer><App/></AppContainer>, document.querySelector("#app"));

getCarts()
getArticles();
getCategories();

if (module && module.hot) {
	module.hot.accept('./ui-components/app.jsx', () => {
		const App = require('./ui-components/app.jsx').default;
		render(
			<AppContainer>
				<App/>
			</AppContainer>,
			document.querySelector("#app")
		);
	});
}
