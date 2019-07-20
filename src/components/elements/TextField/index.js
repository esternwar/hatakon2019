import React, { Component } from "react";
import { TextField } from "@material-ui/core";

class StyledTextField extends Component {
  handleChange = event => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(event.value);
    }
  };

  render() {
    const { value, label, onKeyPress } = this.props;
    return (
      <TextField
        value={value}
        onChange={this.handleChange}
        label={label}
        className={""}
        onKeyPress={onKeyPress}
      />
    );
  }
}

export default StyledTextField;
