package com.employee.service;

import com.employee.bean.Employee;
import org.w3c.dom.ls.LSException;

import java.util.List;

public interface EmployeeService {

    public int createNewEmployee(Employee employee);

    public List<Employee> listAll();

    public int deleteEmployee(int id);

    public Employee getEmployeeByID(int id);

    public void updateEmployee(Employee employee, int id);
}
