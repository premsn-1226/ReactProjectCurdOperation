import "./App.css";
import HomePage from "./Components/HomePage";
import "bootstrap/dist/css/bootstrap.css";

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
    <div className="App">
      <HomePage headingData={headingData} />
    </div>
  );
}

export default App;
