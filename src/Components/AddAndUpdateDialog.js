import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import ApiService from "./ApiService";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Alert from "react-bootstrap/Alert";

export default function AddAndUpdateDialog(props) {
  const [required, setRequired] = useState(false);
  const text = {
    addStudent: "ADD STUDENT",
    updateStudent: "UPDATE STUDENT",
    name: "name",
    email: "email",
    department: "department",
    age: "age",
    mobileNo: "mobileNo",
    add: "ADD",
    update: "UPDATE",
    close: "CLOSE",
  };

  const [student, setStudent] = useState({
    name: "",
    email: "",
    department: "",
    age: "",
    mobileNo: "",
  });

  useEffect(() => {
    setRequired(false);
    if (props.type === "Update") {
      setStudent(props.data);
    } else {
      setStudent({
        name: "",
        email: "",
        department: "",
        age: "",
        mobileNo: "",
      });
    }
  }, [props.type, props.data]);

  const handleChange = (e) => {
    const val = e.target.value;
    setRequired(false);
    setStudent({ ...student, [e.target.name]: val });
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    if (
      student.name !== "" &&
      student.email !== "" &&
      student.department !== "" &&
      student.mobileNo !== "" &&
      student.age !== ""
    ) {
      const st = await ApiService.addStudent(
        student.name,
        student.email,
        student.department,
        student.mobileNo,
        student.age
      );
      console.log(st);
      setStudent({});
      setRequired(false);
      props.onHide();
      props.onChangeStatus(st);
    } else {
      setRequired(true);
    }
  };

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Header>
        {props.type === "add" ? (
          <Modal.Title id="contained-modal-title-vcenter">
            {text.addStudent}
          </Modal.Title>
        ) : (
          <Modal.Title id="contained-modal-title-vcenter">
            {text.updateStudent}
          </Modal.Title>
        )}
        {required ? (
          <Alert variant="warning">Fill All the Required fields</Alert>
        ) : (
          ""
        )}
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => handleAddStudent(e)}>
          <FloatingLabel label={text.name} className="mb-2 control-label">
            <Form.Control
              name={text.name}
              value={student.name}
              onChange={(e) => handleChange(e)}
              type="text"
              required={true}
              placeholder={text.name}
            />
          </FloatingLabel>
          <FloatingLabel label={text.email} className="mb-2 control-label">
            <Form.Control
              name={text.email}
              value={student.email}
              onChange={(e) => handleChange(e)}
              type="email"
              required={true}
              disabled={props.type === "add" ? false : true}
              placeholder={text.email}
            />
          </FloatingLabel>
          <FloatingLabel label={text.department} className="mb-2 control-label">
            <Form.Control
              name={text.department}
              value={student.department}
              onChange={(e) => handleChange(e)}
              type="text"
              required={true}
              placeholder={text.department}
            />
          </FloatingLabel>
          <FloatingLabel label={text.age} className="mb-2 control-label">
            <Form.Control
              onChange={(e) => handleChange(e)}
              name={text.age}
              type="text"
              value={student.age}
              max={100}
              required={true}
              placeholder={text.age}
            />
          </FloatingLabel>
          <FloatingLabel label={text.mobileNo} className="mb-2 control-label">
            <Form.Control
              name={text.mobileNo}
              type="text"
              required={true}
              value={student.mobileNo}
              onChange={(e) => handleChange(e)}
              maxLength={10}
              placeholder={text.mobileNo}
            />
          </FloatingLabel>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={(e) => handleAddStudent(e)}
          variant="success"
          className="control-label"
        >
          {props.type === "Update" ? text.update : text.add}
        </Button>
        <Button
          variant="danger"
          className="control-label"
          onClick={props.onHide}
        >
          {text.close}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
