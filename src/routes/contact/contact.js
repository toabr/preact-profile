import { h, Component } from 'preact';

import FormField from 'preact-material-components/FormField';
import 'preact-material-components/FormField/style.css';

import TextField from 'preact-material-components/TextField';
import 'preact-material-components/TextField/style.css';

import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';
import 'preact-material-components/Theme/style.css';

import style from './contact.scss';

export default class Contact extends Component {
	state = {
		name: ''
	};
	render() {
		return (
			<div class={`${style.contact} page`}>
				<h1>Contact</h1>
				<FormField>
					<TextField
						label="Name"
						value={this.state.name}
						onInput={e => this.setState({ name: e.target.value })}
					/>
					<TextField
						label="Subject"
						value={this.state.name}
						onInput={e => this.setState({ name: e.target.value })}
					/>
				</FormField>
				<TextField textarea={true} label="Message" />
				<Button ripple raised className="mdc-theme--primary-bg">
					Submit
        		</Button>
			</div>
		);
	}
}
