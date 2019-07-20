import React, { Component } from "react";
import { connect } from "react-redux";

import Select from "../../elements/Select";
import Item from "../../elements/Item";

class FilterPanel extends Component {
  render() {
    const { departments, status, secureLevels, changeFilrer } = this.props;
    return (
      <div>
        <input
          type="text"
          name=""
          id=""
          placeholder="ФИО"
          onChange={changeFilrer}
        />
        <Select name="" id="" options={departments} onChange={changeFilrer} />
        <Select name="" id="" options={status} onChange={changeFilrer} />
        <Select name="" id="" options={secureLevels} onChange={changeFilrer} />
        <input type="date" name="" id="" onChange={changeFilrer} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  departments: getServerSideList(state, "departments"),
  status: getServerSideList(state, "status"),
  secureLevels: getServerSideList(state, "secureLevels")
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterPanel);
