import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/esm/Table';
import SvgIcons from './SvgIcons';

export default function TableFunction(props) {
  return (
    <div className="tableFixHead">
      <Table className="table" size="sm" variant="dark">
        <thead className="tableRow">
          {props.headingData.map((heading) => (
              <th key={heading}>{heading}</th>
          ))}
        </thead>
        <tbody>
          {props.student.map((st) => (
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
                  onClick={(e) => props.onAddorUpdateClick(st)}
                >
                  <SvgIcons icon="update"></SvgIcons>
                </Button>
                <Button
                  className="ml-3"
                  variant="danger"
                  name="Delete"
                  onClick={(e) => props.onDeleteClick(st)}
                >
                  <SvgIcons icon="delete"></SvgIcons>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {props.student.length === 0 ? home() : ""}
    </div>
  );
}

const home = () => {
  return <h3 style={{ color: "#bcbebf" }}>No Data to be displayed</h3>;
};
