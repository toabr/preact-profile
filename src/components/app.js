import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home/home';
import Contact from '../routes/contact/contact';
import WorkPage from './work/work_page';
import NotFound from '../routes/404';
import Portfolio from '../routes/portfolio/portfolio';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.setState({
			currentUrl: e.url
		});
	};

	render() {
		return (
			<div id="app">
				<Header selectedRoute={this.state.currentUrl} />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<WorkPage path="/work/:nid" />
					<Portfolio path="/portfolio" />
					<Contact path="/contact" />
					<NotFound default />
				</Router>
			</div>
		);
	}
}