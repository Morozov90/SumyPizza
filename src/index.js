import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './redux/store';
import './scss/app.scss';

// todo delete
store.dispatch({
	type: 'SET_SORT_BY',
	payload: 'price'
});


ReactDOM.render(
	// <React.StrictMode>
	<Router >
		<Provider store={store}>
			<App />
		</Provider>
	</Router >,
	// </React.StrictMode>
	document.getElementById('root')
);

