import React, { Component } from "react";
import { connect } from "react-redux";
import ReactList from "react-list";

import LazyLoading from "react-list-lazy-load";
import Item from "../../elements/Item";
import ListHeader from "../../elements/ListHeader";

import * as selector from "../../../store/mainLayout/reducer";
import * as types from "../../../store/mainLayout/globalTypes";

import testEmploees from "./testEmploees";

class List extends Component {
  onRequestPage = (page, cb) => {
    //cb();
  };

  handleDoubleClick = event => {
    console.log(event);
    this.props.toggleModal(10);
  };

  render() {
    const { employees } = this.props;
    return (
      <div>
        <ListHeader />
        {testEmploees.length && (
          <LazyLoading
            length={7}
            items={testEmploees}
            onRequestPage={this.onRequestPage}
            className={"main-list"}
            pageSize={7}
            renderRow={() => <div>ss</div>}
          >
            <ReactList
              type="uniform"
              length={7}
              itemRenderer={(index, key) => (
                <div key={key}>
                  {index}
                  <strong>{testEmploees.fullName}</strong>
                </div>
              )}
            />
          </LazyLoading>
        )}
      </div>
    );
  }
}

/*{testEmploees.map(item => (
              <Item
                key={item.id}
                data={item}
                onDoubleClick={this.handleDoubleClick}
              />
            ))}*/

const mapStateToProps = state => ({
  employees: selector.getEmployees(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleModal: id => {
    console.log("ggg");
    dispatch({ type: types.TOOGLE_MODAL, value: true, setCreate: false });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
