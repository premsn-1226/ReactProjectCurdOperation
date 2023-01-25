import React from "react";

export default function FirstComponent(props) {
  return <div>{Greetings(props.Name)}</div>;
}

const Greetings = (userName) => {
  if (userName) {
    return "Hello " + userName;
  }
  return "Hello Stranger";
};
