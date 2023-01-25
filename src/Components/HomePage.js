import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiService from "./ApiService";

export default function HomePage(props) {
  const [student, setStudent] = useState([]);
  const [isLoading, setLoad] = React.useState(true);
  const fetchData = async () => {
    const st = await ApiService.getStudent();
    setLoad(false);
    setStudent(st);
    console.log(student);
  };
  useEffect(() => {
    fetchData();
  }, [isLoading]);

  return (
    <div>
      <h2 style={heading}>STUDENT DETAILS</h2>
      <Link to="/addStudent" style={button}>
        <button className="btn btn-success btn-block" style={button}>
          ADD
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
              <tr>
                <td>{st.id}</td>
                <td>{st.name}</td>
                <td>{st.age}</td>
                <td>{st.mobileNo}</td>
                <td>{st.email}</td>
                <td>{st.department}</td>
                <td>
                  <form method="get" action="/updateStudent/{st.id}">
                    <input
                      type="submit"
                      name="updateId"
                      value='update'
                      className="inputDelete btn btn-info btn-sm"
                    />
                  </form>
                  <form
                    method="get"
                    action='/deleteStudent/<%=object.getInt("id")%>'
                    style={{paddingTop: "5px"}}
                    onsubmit='return confirm_entry(<%=object.getInt("id")%>)'
                  >
                    <input
                      type="submit"
                      name="deleteId"
                      id="delete"
                      value='delete'
                      className="inputDelete btn btn-danger btn-sm"
                    />
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isLoading ? home() : ""}
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
