package com.employee.controller;

import com.employee.bean.Employee;
import com.employee.service.Impl.EmployeeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    private EmployeeServiceImpl employeeService;

    @RequestMapping("/employees")
    public List<Employee> findAll() {
        return employeeService.listAll();
    }

    @PostMapping("/saveEmployee")
    public String saveEmployee(@RequestBody Employee employee) {
        employeeService.createNewEmployee(employee);
        return "success";
    }

    @DeleteMapping("/deleteEmployee/{id}")
    public String deleteEmployee(@PathVariable int id) {
        employeeService.deleteEmployee(id);
        return "success";
    }

    @GetMapping("/getEmployee/{id}")
    public Employee getEmployeeById(@PathVariable int id) {
        return employeeService.getEmployeeByID(id);
    }

    @PutMapping("/updateEmployee/{id}")
    public void updateEmployee(@PathVariable int id, @RequestBody Employee employee) {
        employeeService.updateEmployee(employee, id);
    }

}
