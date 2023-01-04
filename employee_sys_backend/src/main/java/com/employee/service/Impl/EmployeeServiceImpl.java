package com.employee.service.Impl;

import com.employee.bean.Employee;
import com.employee.repository.EmployeeRepository;
import com.employee.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;


    @Override
    public int createNewEmployee(Employee employee) {
        return employeeRepository.createNewEmployee(employee);
    }

    @Override
    public List<Employee> listAll() {
        return employeeRepository.findAll();
    }

    @Override
    public int deleteEmployee(int id) {
        return employeeRepository.deleteEmployee(id);
    }

    @Override
    public Employee getEmployeeByID(int id) {
        return employeeRepository.getEmployeeById(id).get(0);
    }

    @Override
    public void updateEmployee(Employee employee, int id) {
        employeeRepository.updateEmployee(employee, id);
    }

}
