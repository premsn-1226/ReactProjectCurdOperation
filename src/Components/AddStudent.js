import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import "bootstrap/dist/css/bootstrap.css";
import ApiService from "./ApiService";

export default function AddStudent(props) {
  const [type, setType] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  
  const text = {
    addStudent: "ADD STUDENT",
    updateStudent: "UPDATE STUDENT",
    name: "name",
    email: "email",
    department: "department",
    age: "age",
    mobileNo: "mobileNo",
    add : "ADD",
    update : "UPDATE"
  };

  const [student, setStudent] = useState({
    name: "",
    email: "",
    department: "",
    age: "",
    mobileNo: "",
  });

  useEffect(() => {
    console.log(student);
    setType(location.state.type);
    console.log(location.state.data);
    if (location.state.type === "Update") {
      setStudent(location.state.data);
    } else {
      setStudent({
        name: "",
        email: "",
        department: "",
        age: "",
        mobileNo: "",
      });
    }
  }, [location.state.data, location.state.type]);
  
  const handleChange = (e) => {
    const val = e.target.value;
    setStudent({ ...student, [e.target.name]: val });
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    const st = await ApiService.addStudent(
      student.name,
      student.email,
      student.department,
      student.mobileNo,
      student.age
    );
    console.log(st);
    navigate("/");
  };

  
  return (
    <div>
      <HomePage headingData={props.headingData} />
      <div className="container-fluid">
        <div className="panel panel-primary">
          <div className="panel-heading formHeading">
            <center>
              {type === "add" ? (
                <h2 className="panel-title">{text.addStudent}</h2>
              ) : (
                <h2 className="panel-title">{text.updateStudent}</h2>
              )}
            </center>
          </div>
          <div className="panel-body form">
            <form
              className="form-horizontal"
              method="post"
              onSubmit={(e) => handleAddStudent(e)}
            >
              <div className="form-group">
                <div className="col-lg-6 col-sm-12 col-md-12">
                  <div className="col-sm-12 col-lg-2">
                    <label className="control-label">{text.name} : </label>
                  </div>

                  <div className="col-sm-12 col-lg-10">
                    <input
                      name={text.name}
                      value={student.name}
                      onChange={(e) => handleChange(e)}
                      type="text"
                      required="required"
                      className="inputAdd"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 col-md-12">
                  <div className="col-sm-12 col-lg-3">
                    <label className="control-label">{type === "Update" ? `${text.email} (read Only)` : text.email} :  </label>
                  </div>

                  <div className="col-sm-12 col-lg-9">
                    <input
                      name={text.email}
                      value={student.email}
                      onChange={(e) => handleChange(e)}
                      type="text"
                      required="required"
                      readOnly={type === "Update" ? true : false}
                      className="inputAdd"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="col-lg-4 col-sm-12 col-md-12">
                  <div className="col-sm-12 col-lg-5">
                    <label className="control-label">
                      {text.department} :{" "}
                    </label>
                  </div>

                  <div className="col-sm-12 col-lg-7">
                    <input
                      name={text.department}
                      type="text"
                      value={student.department}
                      onChange={(e) => handleChange(e)}
                      required="required"
                      className="inputAdd"
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-12">
                  <div className="col-sm-12 col-lg-4">
                    <label className="control-label">{text.age} : </label>
                  </div>

                  <div className="col-sm-12 col-lg-8">
                    <input
                      name={text.age}
                      type="text"
                      value={student.age}
                      onChange={(e) => handleChange(e)}
                      required="required"
                      className="inputAdd"
                    />
                  </div>
                </div>
                <div className="col-lg-5 col-sm-12 col-md-12">
                  <div className="col-sm-12 col-lg-5">
                    <label className="control-label">{text.mobileNo} : </label>
                  </div>

                  <div className="col-sm-12 col-lg-7">
                    <input
                      name={text.mobileNo}
                      type="text"
                      value={student.mobileNo}
                      onChange={(e) => handleChange(e)}
                      required="required"
                      className="inputAdd"
                    />
                  </div>
                </div>
              </div>
              <div className="buttonAdd">
                <center>
                  <input
                    type="submit"
                    value={type === "Update" ? text.update : text.add}
                    name={type === "Update" ? text.update : text.add}
                    className="buttonAddSubmit btn btn-md btn-success"
                  />
                  <Link to="/">
                    <button className="buttonAddSubmit btn btn-md btn-danger">
                      CANCEL
                    </button>
                  </Link>
                </center>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
