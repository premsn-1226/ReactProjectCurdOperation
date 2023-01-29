import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import ApiService from "./ApiService";
import AddAndUpdateDialog from "./AddAndUpdateDialog";
import DeleteDialog from "./DeleteDialog";
import ShowStatus from "./ShowStatus";
import SvgIcons from "./SvgIcons";
import TableFunction from "./Table";
export default function HomePage(props) {
  const [student, setStudent] = useState([]);
  const [isLoading, setLoad] = useState(true);
  const [data, setData] = useState();
  const [status, setStatus] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [type, setType] = useState();
  const text = ["STUDENT DETAILS", "ADD", "Update", "Delete"];

  useEffect(() => {
    fetchData();
  }, [isLoading, modalShow, deleteModalShow]);

  const fetchData = async () => {
    const st = await ApiService.getStudent();
    setLoad(false);
    setStudent(st);
  };

  return (
    <div>
      <ShowStatus status={status} changeStatus={(e) => setStatus(e)} />
      <h2 style={heading}>
        {text[0]}
        <Button
          variant="success"
          name="add"
          style={{ marginLeft: "20px", height: "35px", marginBottom: "10px" }}
          onClick={(e) => {
            setModalShow(true);
            setType("add");
          }}
        >
          <SvgIcons icon="add"></SvgIcons>
        </Button>
      </h2>
      <AddAndUpdateDialog
        show={modalShow}
        onHide={() => setModalShow(false)}
        onChangeStatus={(st) => setStatus(st)}
        type={type}
        data={data}
      />
      <DeleteDialog
        show={deleteModalShow}
        onHide={() => setDeleteModalShow(false)}
        onChangeStatus={(st) => setStatus(st)}
        id={data}
      />
      <TableFunction
        student={student}
        headingData={props.headingData}
        onAddorUpdateClick={(st) => {
          setModalShow(true);
          setType("Update");
          setData(st);
        }}
        onDeleteClick={(st) => {
          setData(st.id);
          setDeleteModalShow(true);
        }}
      />
    </div>
  );
}

const heading = {
  textAlign: "center",
  color: "orange",
  paddingTop: "15px",
};
