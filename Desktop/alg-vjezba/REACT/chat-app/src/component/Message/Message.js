import React from "react";
import "./style.scss";

import defaultImage from "../../images/grogu.jpeg";

const Message = ({ currentUser }) => {
  return (
      <div className={`message d-flex ${currentUser ? "current-user" : ""}`}>
        <div className="message--avatar">
          <img src={defaultImage} alt="Jean" />
        </div>
        <div className="message--info">
          <h4>Jean</h4>
          <p>Hello, how are you. </p>
        </div>
      </div>
  );
};

export default Message;