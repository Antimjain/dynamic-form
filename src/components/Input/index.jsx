import React from 'react';

export default ({name, label, placeholder, _handleChange}) => {
	return (
		<div>
			<label>
				<span>{label}</span>
				<input
					type="text"
					name={name}
					placeholder={placeholder}
					onChange={_handleChange}
				/>
			</label>
		</div>
	);
};