import React from "react";
import connect from "react-redux";

import LazyLoading from "react-list-lazy-load";
import Item from "../../elements/Item";
import ListHeader from "../../elements/ListHeader";

import * as selector from "../../../store/mainLayout/reducer";

class List extends Component {
  onRequestPage = data => {
    console.log(data);
  };

  render() {
    const { employees } = this.props;
    return (
      <div>
        <ListHeader />
        <LazyLoading
          length={employees.length}
          items={employees}
          onRequestPage={this.onRequestPage}
          className={"main-list"}
        >
          {employees.map(item => (
            <Item data={item} />
          ))}
        </LazyLoading>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employees: selector.getEmployees(state)
});

export default connect(mapStateToProps)(List);
