import React, { Component } from 'react';

class Upload extends Component {

  render() {
		const {name, label, required, _handleChange} = this.props;
    return (
      <div className="Upload">
        <label>
					<span>{label}</span>
					<input
						type="file"
						name={name}
						required={required}
						onChange={_handleChange}
					/>
				</label>
      </div>
    );
  }
}

export default Upload;