import React, { useState } from "react";

import AddMember from "./AddMember";

const Member = props => {
  const [editing, setEditing] = useState(false);

  const updateMember = member => {
    setEditing(false);
    props.update({
      ...member,
      id: props.info.id
    })
  }

  return editing ? (
    <div className="member">
      <AddMember add={updateMember} default={props.info} />
    </div>
  ) : (
    <div className="member">
      <h3>{props.info.name}</h3>
      <p>{props.info.email}</p>
      <p>{props.info.role}</p>
      <div className="controls">
        <button onClick={() => setEditing(true)}>Edit</button>
        <button onClick={() => props.delete(props.info.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Member;
