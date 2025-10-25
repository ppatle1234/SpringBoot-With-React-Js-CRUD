import axios from 'axios'
import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export const ShowEmployee = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        loadEmployees()
    },[])

    const loadEmployees = async() => {

        const result = await axios.get("http://localhost:8080/employees/findall")

        setEmployees(result.data)
    }

    const deleteEmployees = async(empId) => {

        await axios.delete(`http://localhost:8080/employees/deletebyid/${empId}`)

        loadEmployees()
    }


    return(

        <div className='container'>
            <div className='row'>
                
                <Link to={`/addemployee`} className='btn btn-info'>Add Employee</Link>

               <table className='table table-striped'>
                    <thead>
                       <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Address</th>
                          <th>Salary</th>
                          <th>DOB</th>
                          <th>EmailID</th>
                          <th>Password</th>
                          <th>Action</th>
                       </tr>
                    </thead>

                    <tbody>
                        {
                            employees.map((emp) => (
                                <tr>
                                    <td>{emp.empId}</td>
                                    <td>{emp.empName}</td>
                                    <td>{emp.empAddress}</td>
                                    <td>{emp.empSalary}</td>
                                    <td>{emp.empDOB}</td>
                                    <td>{emp.empEmailId}</td>
                                    <td>{emp.empPassword}</td>

                                    <td>
                                        <Link to={`/edit/${emp.empId}`} className='btn btn-success'>Edit</Link>&nbsp; &nbsp; 
                                        <button className='btn btn-danger' onClick={()=> deleteEmployees(emp.empId)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
               </table>
            </div>
        </div>
    )
}