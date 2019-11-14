import React from 'react';

export default ({label, name, _handleChange, options, value}) => {
	return (
		<div>
			<span>{label}</span>
			{options && options.map((option, index) => {
				return (
					<label key={index}>
						<input
							type="radio"
							name={name}
							checked={option.value === value}
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