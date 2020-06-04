import React from "react";
import Button from "react-bootstrap/Button";
const ButtonGroup = () => {
  return (
    <>
      <button className="">Primary</button>{" "}
      <button className="bg-fuchsia white">Secondary</button>{" "}
      <button className="bg-green white">Success</button>{" "}
      <button className="bg-yellow white">Warning</button>{" "}
      <button className="bg-red white">Danger</button>{" "}
      <button className="bg-blue white">Info</button>{" "}
      <button className="bg-silver black">Light</button>{" "}
      <button className="bg-black white">Dark</button>
    </>
  );
};

export default ButtonGroup;
