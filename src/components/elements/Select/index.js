import React, { Component } from "react";

class StyledSelect extends Component {
  handleChange = event => {
    const { onChange, value } = this.props;
    const targetValue = event.target.value;
    if (value !== targetValue) {
      onChange(targetValue);
    }
  };

  render() {
    const { label, options, value } = this.props;
    return (
      <div className={`s`}>
        <span>{label}</span>
        <select value={value}>
          {options.map(item => (
            <option>{item}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default StyledSelect;
