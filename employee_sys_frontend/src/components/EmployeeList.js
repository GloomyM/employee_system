import React, { useEffect, useState } from 'react'

import {useNavigate} from "react-router-dom";
import EmployeeService from '../services/EmployeeService';
import Employee from './Employee';
export default function EmployeeList() {
    
    // useNavigate is a hook function which is used to navigate among different routes
    const navigate = useNavigate();
    const [employees, setEmployees] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchData = async() => {
            setLoading(true);
            try {
                const response = await EmployeeService.getEmployees();
                setEmployees(response.data);
            } catch(error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    function deleteEmployee(e, id) {
        e.preventDefault();
        EmployeeService.deleteEmployee(id).then((res) => {
            if (employees) {
                setEmployees((prevElement) => {
                    return prevElement.filter((employee) => employee.id !== id);
                });
            }
        });
    };
    return (
        <div className="container mx-auto my-8">
            <div className="h-12">
                <button onClick={()=>navigate("/addEmployee")} className="rounded bg-slate-600 text-white px-6 py-2">
                    Add Employee
                </button>
            </div>

            <div className="flex shadow border-b">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wider
                             px-6 py-3">
                                First Name
                            </th>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wider
                             px-6 py-3">Last Name</th>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wider
                             px-6 py-3">Email</th>
                            <th className="text-right font-medium text-gray-500 uppercase tracking-wider
                             px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    {!loading && (
                    <tbody className="bg-white">
                        {employees.map((employee) => (
                            <Employee deleteEmployee={deleteEmployee} employee={employee} key={employee.id}/>
                        ))}
                    </tbody>
                    )}
                </table>
            </div>
        </div>            
    )
    
};
