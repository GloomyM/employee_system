import axios from "axios"

const BASE_URL = "http://localhost:8081/api/v1/"


class EmployeeService {
    saveEmployee(employee) {
        return axios.post(BASE_URL + "saveEmployee", employee);
    }

    getEmployees() {
        return axios.get(BASE_URL + "employees");
    }


    deleteEmployee(id) {
        return axios.delete(BASE_URL + "deleteEmployee/" + id);
    }

    getEmployeeById(id) {
        return axios.get(BASE_URL + "getEmployee/" + id);
    }

    updateEmployee(employee, id) {
        return axios.put(BASE_URL + "updateEmployee/" + id, employee);
    }
}

export default new EmployeeService();