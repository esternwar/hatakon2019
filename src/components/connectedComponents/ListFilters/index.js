import React, { Component } from "react";
import connect from "react-redux";

import Select from "../../elements/Select";

class ListFilters extends Component {
  render() {
    const { label, value } = this.props;
    return (
      <div>
        <input type="text" name="" id="" placeholder="ФИО" />
        <select name="" id="">
          <option value="-1">Любой уровень доступа</option>
          <option value="0">0 - Доступ запрещен</option>
          <option value="1">1 - Ограниченный доступ </option>
          <option value="2">2 - Доступ к лабораториям 1 уровня</option>
          <option value="3">3 - Доступ к лабораториям 2 уровня</option>
          <option value="4">4 - Доступ к лабораториям 3 уровня</option>
          <option value="5">5 - Без ограниченний</option>
        </select>
        <select name="" id="">
          <option value="-1">Любой уровень доступа</option>
          <option value="0">0 - Доступ запрещен</option>
          <option value="1">1 - Ограниченный доступ </option>
          <option value="2">2 - Доступ к лабораториям 1 уровня</option>
          <option value="3">3 - Доступ к лабораториям 2 уровня</option>
          <option value="4">4 - Доступ к лабораториям 3 уровня</option>
          <option value="5">5 - Без ограниченний</option>
        </select>
        <select name="" id="">
          <option value="-1">Любой уровень доступа</option>
          <option value="0">0 - Доступ запрещен</option>
          <option value="1">1 - Ограниченный доступ </option>
          <option value="2">2 - Доступ к лабораториям 1 уровня</option>
          <option value="3">3 - Доступ к лабораториям 2 уровня</option>
          <option value="4">4 - Доступ к лабораториям 3 уровня</option>
          <option value="5">5 - Без ограниченний</option>
        </select>
        <input type="date" name="" id="" />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListFilters);
