import React from 'react';
import Input from '../Input';
import Upload from '../Upload';
import CheckBox from '../CheckBox';
import Radio from '../Radio';

class Form extends React.Component {
	constructor(props) {
		super(props);
		let state = {};
		props.fields.forEach(field => {
				if ( field.type === 'checkbox' ) {
					state[field.name] = field.options.filter(option => option.checked).map(option => option.value);
				} else if ( field.type === 'radio' ) {
					state[field.name] = field.options.find(option => option.checked).value;
				} else {
					state[field.name] = field.value;
				}
		});
		this.state = state;
	}

	handleFieldChange = event => {
		const field = event.target;
		if(field.type === 'checkbox') {
			let currentVal = this.state[field.name];
			if(field.checked) {
				currentVal.push(field.value);
			} else {
				currentVal = currentVal.filter(val => val !== field.value);
			}
			this.setState({[event.target.name]: currentVal});
		} else if(field.type === 'file') {
			this.setState({[event.target.name]: event.target.files && event.target.files[0]});
		} else {
			this.setState({[event.target.name]: event.target.value});
		}
	};

	handleFormSubmit = event => {
		event.preventDefault();
		console.log('submit', event);
		typeof this.props.handleSubmit === 'function' && this.props.handleSubmit(this.state);
	}

	render () {
		const { fields } = this.props;
		return (
			<div style={{border: '#ccc soled 1px', padding: 100}}>
				<form onSubmit={this.handleFormSubmit}>
					<h1>Form title</h1>
					{ fields && fields.map((field, index) => {
						if (field.type === 'text') {
							return (
								<div style={{margin: 10}}>
									<Input
										key={index}
										name={field.name}
										placeholder={field.placeholder}
										label={field.label}
										_handleChange={(e) => {this.handleFieldChange(e);field._handleChange(e)}}
									/>
								</div>
							);
						}
						if (field.type === 'upload') {
							return (
								<div style={{margin: 10}}>
									<Upload
										key={index}
										name={field.name}
										label={field.label}
										_handleChange={(e) => {this.handleFieldChange(e);field._handleChange(e)}}
									/>
								</div>
							);
						}
						if (field.type === 'checkbox') {
							return (
								<div style={{margin: 10}}>
									<CheckBox
										key={index}
										name={field.name}
										label={field.label}
										options={field.options}
										value={this.state[field.name]}
										_handleChange={(e) => {this.handleFieldChange(e);field._handleChange(e)}}
									/>
								</div>
							);
						}
						if (field.type === 'radio') {
							return (
								<div style={{margin: 10}}>
									<Radio
										key={index}
										name={field.name}
										label={field.label}
										options={field.options}
										value={this.state[field.name]}
										_handleChange={(e) => {this.handleFieldChange(e);field._handleChange(e)}}
									/>
								</div>
							);
						}
					})}
					<button>Submit</button>
				</form>
			</div>
		);
	}
}

export default Form;