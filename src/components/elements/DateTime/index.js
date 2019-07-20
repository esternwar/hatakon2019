import React, { Component } from "react";
import DateTimePicker from "react-datetime-picker";

class DateTime extends Component {
  handleChange = date => {
    const { value, onChange } = this.props;
    onChange(date);
  };

  render() {
    const { label, value } = this.props;
    return (
      <div>
        <span>{label}</span>
        <div>
          <DateTimePicker onChange={this.handleChange} value={value} />
        </div>
      </div>
    );
  }
}

export default DateTime;
