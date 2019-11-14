import React from 'react';
import Form from '../../components/Form';

class SampleForm extends React.Component {
	handleChange = event => {
		// this.set
		console.log('handleChange', event.target.name, ',', event.target.value);
	};
	
	handleSubmit = data => {
		console.log('form submit', data);
	};

	handleFileUpload = event => {
		// debugger;
	}
	fields = [
		{
			type: 'text',
			placeholder: 'Enter Name',
			name: 'name',
			label: 'Name:',
			_handleChange: this.handleChange
		},
		{
			type: 'upload',
			name: 'file',
			label: 'Upload file:',
			_handleChange: this.handleFileUpload
		},
		{
			type: 'checkbox',
			name: 'rememberMe',
			label: 'Check something',
			options: [
				{
					label: 'One',
					value: 'one',
					checked: false,
				},
				{
					label: 'Two',
					value: 'two',
					checked: true,
				}
			],
			_handleChange: this.handleChange
		},
		{
			type: 'radio',
			name: 'Something',
			label: 'Radio something',
			options: [
				{
					label: 'One',
					value: 'one',
					checked: false,
				},
				{
					label: 'Two',
					value: 'two',
					checked: true,
				}
			],
			_handleChange: this.handleChange
		},
	];
	
	render () {
		return (
			<div style={{ border: '#000 solid 1px', borderRadius: 20, margin: 50, backgroundColor: '#fff', padding: 10}}>
				<Form
					fields={this.fields}
					handleSubmit={this.handleSubmit}
				/>
			</div>
		);
	}
}

export default SampleForm;