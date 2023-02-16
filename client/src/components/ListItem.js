import React from "react";
import TickIcon from './TickIcon'
import ProgressBar from './ProgressBar'

function ListItem({ task }) {
  return (
    <div className="list-item">
      <div className="info-container">
        <TickIcon/>
        <p>{task.title}</p>
        <ProgressBar />
      </div>
      <div className="button-container">
        <button className="edit">EDIT</button>
        <button className="delete">DELETE</button>
      </div>
    </div>
  );
}

export default ListItem;
