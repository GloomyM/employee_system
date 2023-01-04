package com.employee.repository;

import com.employee.bean.Employee;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface EmployeeRepository {

    @Insert("insert into employee(first_name, last_name, email) values(" +
            "#{employee.firstName},#{employee.lastName},#{employee.email})")
    int createNewEmployee(@Param("employee") Employee employee);

    @Select("select* from employee")
    List<Employee> findAll();


    @Delete("delete from employee where id=#{id}")
    int deleteEmployee(int id);

    @Select("select* from employee where id=#{id}")
    List<Employee> getEmployeeById(int id);

    @Update("update employee set first_name=#{employee.firstName}," +
            "last_name=#{employee.lastName},email=#{employee.email} where id=#{id}")
    void updateEmployee(@Param("employee") Employee employee, @Param("id") int id);
}
