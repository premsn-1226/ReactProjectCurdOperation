import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApiService from "./ApiService";

export default function HomePage(props) {
  const [student, setStudent] = useState([]);
  const [isLoading, setLoad] = useState(true);
  const text = ["STUDENT DETAILS", "ADD", "Update", "Delete"];
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [isLoading]);

  const fetchData = async () => {
    const st = await ApiService.getStudent();
    setLoad(false);
    setStudent(st);
    console.log(student);
  };
  const handleUpdate = (e, data) => {
    e.preventDefault();
    console.log(e.target.name);
    navigate("/updateStudent", { state: { type: e.target.name, data: data } });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    navigate("/AddStudent", { state: { type: e.target.name } });
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    var res = window.confirm(
      "Are you sure!! do you want to delete this id : " + id
    );
    if (res === true) {
      ApiService.deleteStudent(id);
      setLoad(true);
    }
  };
  
  return (
    <div>
      <h2 style={heading}>{text[0]}</h2>
      <Link to="/addStudent" style={button}>
        <button
          className="btn btn-success btn-block"
          name="add"
          style={button}
          onClick={(e) => handleAdd(e)}
        >
          {text[1]}
        </button>
      </Link>
      <div className="tableFixHead">
        <table className="table">
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
                  <form name="Update" onSubmit={(e) => handleUpdate(e, st)}>
                    <input
                      type="submit"
                      name="updateId"
                      value={text[2]}
                      className="inputDelete btn btn-info btn-sm"
                    />
                  </form>
                  <form
                    style={{ paddingTop: "5px" }}
                    onSubmit={(e) => handleDelete(e, st.id)}
                  >
                    <input
                      type="submit"
                      id="delete"
                      value={text[3]}
                      className="inputDelete btn btn-danger btn-sm"
                    />
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {student.length === 0 ? home() : ""}
      </div>
    </div>
  );
}

const heading = {
  textAlign: "center",
  color: "orange",
};
const button = { width: "98%", margin: "0 auto", marginBottom: "5px" };

const home = () => {
  return <>No Data to be displayed</>;
};
