import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import UpdateEmployee from './components/UpdateEmployee';
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route index element={<EmployeeList/>}/>
          <Route path="/" element={<EmployeeList/>}/>
          <Route path="/employeeList" element={<EmployeeList/>}/>
          <Route path="/addEmployee" element={<AddEmployee/>}/>
          <Route path="/editEmployee/:id" element={<UpdateEmployee/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;