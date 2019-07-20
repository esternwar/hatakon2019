import React, { Component } from "react";
import { FormControl, Select, InputLabel } from "@material-ui/core";

class StyledSelect extends Component {
  handleChange = event => {
    const { onChange, value } = this.props;
    const targetValue = event.target.value;
    if (value !== targetValue) {
      onChange(targetValue);
    }
  };

  render() {
    const { label, children, value } = this.props;
    return (
      <FormControl className={`s`}>
        {label && <InputLabel className={"s"}>{label}</InputLabel>}
        <Select value={value} onChange={this.handleChange} className={"sds"}>
          {children}
        </Select>
      </FormControl>
    );
  }
}

export default StyledSelect;
