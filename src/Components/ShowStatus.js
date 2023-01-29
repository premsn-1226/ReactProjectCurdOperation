import React, { useEffect } from "react";

export default function ShowStatus(props) {
  useEffect(() => {
    setTimeout(() => {
      hide();
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.status]);

  function hide() {
    props.changeStatus(false);
  }
  return (
    <>
      {props.status ? (
        <div
          className={`bg-${
            props.status.error != null
              ? (props.status.statusType = "danger")
              : props.status.statusType
          } text-${
            props.status.statusType === "danger" ||
            props.status.statusType === "success"
              ? "white"
              : "black"
          }`}
          id="box"
          style={{
            textAlign: "center",
            fontSize: "20px",
            width: `${props.status.error != null ? "50%" : "25%"}`,
            marginLeft: `${props.status.error != null ? "25%" : "37%"}`,
            zIndex: "1 !important",
          }}
        >
          {props.status.error != null
            ? "Unable to add or update data provided. please re-enter the correct data"
            : props.status.message + props.status.id}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => hide()}
            style={{
              float: "right",
              marginRight: "10px",
              marginTop: "7px",
              cursor: "pointer",
            }}
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
          </svg>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
