import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import ApiService from "./ApiService";
import ModalDialog from "./AddAndUpdateDialog";
import Table from "react-bootstrap/Table";
import AddAndUpdateDialog from "./AddAndUpdateDialog";
import DeleteDialog from "./DeleteDialog";
export default function HomePage(props) {
  const [student, setStudent] = useState([]);
  const [isLoading, setLoad] = useState(true);
  const [data, setData] = useState();
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
    console.log(student);
  };

  return (
    <div>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{marginBottom : "7px"}}
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-plus-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
          </svg>
        </Button>
      </h2>
      <AddAndUpdateDialog
        show={modalShow}
        onHide={() => setModalShow(false)}
        type={type}
        data={data}
      ></AddAndUpdateDialog>
      <DeleteDialog
        show={deleteModalShow}
        onHide={() => setDeleteModalShow(false)}
        id={data}
      ></DeleteDialog>
      <div className="tableFixHead">
        <Table className="table" size="sm" variant="dark">
          <thead className="tableRow">
            {props.headingData.map((heading) => (
              <th key={heading}>{heading}</th>
            ))}
          </thead>
          <tbody>
            {student.map((st) => (
              <tr key={st.id}>
                <td>{st.id}</td>
                <td>{st.name}</td>
                <td>{st.age}</td>
                <td>{st.mobileNo}</td>
                <td>{st.email}</td>
                <td>{st.department}</td>
                <td>
                  <Button
                    className="ml-3"
                    variant="info"
                    name="Update"
                    onClick={(e) => {
                      setModalShow(true);
                      setType("Update");
                      setData(st);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                  </Button>
                  <i class="bi bi-pencil-square"></i>
                  <Button
                    className="ml-3"
                    variant="danger"
                    name="Delete"
                    onClick={(e) => {
                      setData(st.id);
                      setDeleteModalShow(true);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash3-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                    </svg>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {student.length === 0 ? home() : ""}
      </div>
    </div>
  );
}

const heading = {
  textAlign: "center",
  color: "orange",
  paddingTop : "15px"
};
// const button = { margin: "0 auto", marginBottom: "5px" };

const home = () => {
  return <h3 style={{ color: "#bcbebf" }}>No Data to be displayed</h3>;
};
