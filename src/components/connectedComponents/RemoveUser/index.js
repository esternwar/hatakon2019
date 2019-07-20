import React from "react";
import { connect } from "react-redux";

import ConfirmationModal from "../../elements/ConfirmationModal";
import * as selector from "store/mainLayout/reducer";

const RemoveUser = ({ removeUser, rejectModal, name }) => (
  <ConfirmationModal
    header={`Вы действительно хотите удалить пользователя ${name}?`}
    onApply={removeUser}
    onReject={rejectModal}
    text={"Удалить"}
  />
);

export default RemoveUser;
