import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import "bootstrap/dist/css/bootstrap.css";
import ApiService from "./ApiService";

export default function AddStudent(props) {
  const [add, setAdd] = useState(false);
  const [student, setStudent] = useState({
    id: "",
    name: "",
    email: "",
    department: "",
    age: "",
    mobileNo: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const val = e.target.value;
    setStudent({ ...student, [e.target.name]: val });
  };
  const handleSubmit = async (e) => {
    // const st = await ApiService.getStudent();
    // setStudent(st);
    e.preventDefault();
    const st = await ApiService.addStudent(
      student.name,
      student.email,
      student.department,
      student.mobileNo,
      student.age
    );
    console.log(st);
    // setStudent(st);
    navigate("/");
  };

  useEffect(() => {
    console.log(student);
  }, [add]);
  return (
    <div>
      <HomePage headingData={props.headingData}></HomePage>
      <div className="container-fluid">
        <div className="panel panel-primary">
          <div className="panel-heading formHeading">
            <center>
              <h2 className="panel-title">ADD STUDENT</h2>
            </center>
          </div>
          <div className="panel-body form">
            <form
              className="form-horizontal"
              method="post"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="form-group">
                <div className="col-lg-6 col-sm-12 col-md-12">
                  <div className="col-sm-12 col-lg-2">
                    <label for="inputEmail3" className="control-label">
                      NAME :{" "}
                    </label>
                  </div>

                  <div className="col-sm-12 col-lg-10">
                    <input
                      name="name"
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
                    <label for="inputEmail3" className="control-label">
                      EMAIL-ID :{" "}
                    </label>
                  </div>

                  <div className="col-sm-12 col-lg-9">
                    <input
                      name="email"
                      value={student.email}
                      onChange={(e) => handleChange(e)}
                      type="text"
                      required="required"
                      className="inputAdd"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="col-lg-4 col-sm-12 col-md-12">
                  <div className="col-sm-12 col-lg-5">
                    <label for="inputEmail3" className="control-label">
                      DEPARTMENT :{" "}
                    </label>
                  </div>

                  <div className="col-sm-12 col-lg-7">
                    <input
                      name="department"
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
                    <label for="inputEmail3" className="control-label">
                      AGE :{" "}
                    </label>
                  </div>

                  <div className="col-sm-12 col-lg-8">
                    <input
                      name="age"
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
                    <label for="inputEmail3" className="control-label">
                      MOBILE NUMBER :{" "}
                    </label>
                  </div>

                  <div className="col-sm-12 col-lg-7">
                    <input
                      name="mobileNo"
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
                    value="ADD"
                    name="add"
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
