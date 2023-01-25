import React from "react";

export default function Image(props) {
  return (
    <>
      <img src={props.logo} className={props.className} alt={props.alt} />
      <a
        className={props.classNameForLink}
        href={props.link}
        target={props.target}
        rel={props.rel}
      >
        Learn React
      </a>
    </>
  );
}
