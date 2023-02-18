import React from "react";
import TickIcon from './TickIcon'
// import ProgressBar from './ProgressBar'

function ListItem({ task }) {
  return (
    <li className="list-item">
      <div className="info-container">
        <TickIcon/>
        <p>{task.title}</p>
        {/* <ProgressBar /> */}
      </div>
      <div className="button-container">
        <button className="edit">Edit</button>
        <button className="delete">Delete</button>
      </div>
    </li>
  );
}

export default ListItem;
