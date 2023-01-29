import React from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import ApiService from "./ApiService";
export default function DeleteDialog(props) {
  const handleDelete = async (e, id) => {
    const st = await ApiService.deleteStudent(id);
    console.log(st);
    props.onChangeStatus(st);
    props.onHide();
  };
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      show={props.show}
    >
      <Modal.Header closeButton style={{ backgroundColor: "red" }}>
        <Modal.Title style={{ color: "white" }} className="control-label">Delete Student</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ color: "red", fontSize: "20px" }}>
        Are you sure!! do you want to delete this id : {props.id}
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={(e) => handleDelete(e, props.id)}
          variant="danger"
          className="control-label"
        >
          DELETE
        </Button>
        <Button variant="dark" className="control-label" onClick={props.onHide}>
          CANCEL
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
