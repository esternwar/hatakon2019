import React, { PureComponent } from "react";
import { Checkbox } from "@material-ui/core";

class StyledCheckbox extends PureComponent {
  handleChange = event => {
    let { onChange, disabled, checked } = this.props;

    if (disabled) {
      event.preventDefault();
      return;
    }

    if (onChange) {
      onChange(!checked, event.ctrlKey);
    }
  };

  render() {
    const { checked, label } = this.props;
    return (
      <div className={"fgfg"} onClick={this.handleChange}>
        <div className={"fg"}>
          {label && <div className={"fgf"}>{label}</div>}{" "}
          {<Checkbox checked={checked} />}
        </div>
      </div>
    );
  }
}

export default StyledCheckbox;
