import React, { PureComponent } from "react";

class StyledCheckbox extends PureComponent {
  handleChange = event => {
    let { onChange, checked } = this.props;

    if (onChange) {
      onChange(!checked, event.ctrlKey);
    }
  };

  render() {
    const { checked, label } = this.props;
    return (
      <div className={"fgfg"} onClick={this.handleChange}>
        <div className={"fg"}>
          <span>{label}</span> <input type={"checkbox"} value={checked} />
        </div>
      </div>
    );
  }
}

export default StyledCheckbox;
