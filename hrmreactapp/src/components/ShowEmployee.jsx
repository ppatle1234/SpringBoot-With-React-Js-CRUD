import api from '../api/axiosConfig'
import { React, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export const ShowEmployee = () => {

    const [employees, setEmployees] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem("token")){
           navigate("/signin");
        }
        loadEmployees();
    }, []);


    const loadEmployees = async() => {

        const result = await api.get("/employees/findall");

        setEmployees(result.data);
        
    };

    const deleteEmployees = async(empId) => {

        await api.delete(`/employees/deletebyid/${empId}`);

        loadEmployees()
    };
   
     // 🔹 Sign Out Function
    const handleSignOut = () => {
   
        if (window.confirm("Are you sure you want to sign out?")) {
        localStorage.removeItem("token");           // remove JWT
        navigate("/");                              // redirect to signup
       }

    };

    return(
    
        <div className='container' >
            <tr> <button onClick={handleSignOut} className='btn btn-warning'>Sign Out</button></tr>
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
                                    <td>{"*".repeat(emp.empPassword.length)}</td>

                                    <td>
                                        <Link to={`/edit/${emp.empId}`} className='btn btn-success'>Edit</Link>&nbsp; &nbsp; 
     
                                           <button className='btn btn-danger' onClick={()=> deleteEmployees(emp.empId)}>Delete</button>                                              // redirect to signup                                        
                                      
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