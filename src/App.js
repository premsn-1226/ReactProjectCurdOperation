import "./App.css";
import FirstComponent from "./Components/FirstComponent";
import HomePage from "./Components/HomePage";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddStudent from "./Components/AddStudent";
const user = {
  firstName: "Prem",
  lastName: "S N",
};

const formatName = (user) => {
  return user.firstName + " " + user.lastName;
};
function App() {
  const headingData = [
    "Id",
    "Name",
    "Age",
    "Phone",
    "Email",
    "Department",
    "Action",
  ];
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <FirstComponent user={user} Name={formatName(user)} />
        </header>
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage headingData={headingData} />}
          ></Route>
          <Route
            exact
            path="/addStudent"
            element={<AddStudent headingData={headingData} type="add" />}
          ></Route>
          <Route
            exact
            path="/updateStudent"
            element={<AddStudent headingData={headingData} type="update" />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
  
}

export default App;
