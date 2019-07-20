import React, { Component } from "react";
import "./styles.css";

class StyledTextField extends Component {
  handleChange = event => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(event.target.value);
    }
  };

  render() {
    const { value, label, onKeyPress } = this.props;
    return (
      <div className="form-item">
        <label>{label}</label>
        <input value={value} onChange={this.handleChange} />
      </div>
    );
  }
}

export default StyledTextField;
