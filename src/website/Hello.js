import React from "react";
import { useHistory } from "react-router-dom";

const Hello = () => {
  const history = useHistory();
  const handleSubmit = () => {
    history.push("/admin");
  };
  const handleClick2 = () => {
    history.push("/admin/page1");
  };
  return (
    <div>
      <ul>
        <li>
          <a onClick={() => handleSubmit()}>Admin</a>
        </li>{" "}
        <li>
          <a onClick={() => handleClick2()}>Page2</a>
        </li>
      </ul>
      <h1>Hello dfgdfhdfgh fgdfgdrf</h1>
    </div>
  );
};

export default Hello;
