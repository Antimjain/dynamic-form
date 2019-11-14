import React from 'react';

export default ({label, name, _handleChange, options, value}) => {
	return (
		<div>
			<span>{label}</span>
			{options && options.map((option, index) => {
				return (
					<label key={index}>
						<input
							type="checkbox"
							name={name}
							checked={value.includes(option.value)}
							onChange={_handleChange}
							value={option.value}
						/>
						<span>{option.label}</span>
					</label>
				);
			})}			
		</div>
	);
};