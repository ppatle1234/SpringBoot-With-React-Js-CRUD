import { React, useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/axiosConfig';

export const EditEmployee = () => {

    const {empId} = useParams() 

    let navigate = useNavigate()

    const [employee, setEmployee] = useState({
        empName:"",
        empAddress:"",
        empSalary:"",
        empDOB:"",
        empEmailId:"",
        empPassword:""
    })

    const {empName, empAddress, empSalary, empDOB, empEmailId, empPassword} = employee;

    
    useEffect(() => {
        loadEmployee();
    },[empId])


    const onInputChange = (e) => {
        setEmployee({...employee, [e.target.name]: e.target.value})
    }

    const onSubmit = async(e) => {
        e.preventDefault();

      try {
      await api.put(`/employees/update/${empId}`, employee);
      alert("Employee updated successfully!");
      navigate("/employees");
    } catch (err) {
      console.error(err);
      alert("Failed to update employee!");
    }
    }

    const loadEmployee = async () => {
      try {
        const result = await api.get(`/employees/findbyid/${empId}`);
        setEmployee(result.data);
      } catch (err) {
        console.error(err);
        alert("Failed to fetch employee data!");
      }
    };

   

    return(

        <div className='container'>
        <div className='row'>
            <div className='col-md-9 offset-md-3 border rounded p-4 mt-2 shadow'>
                <form onSubmit={(e) => onSubmit(e)}> 
                   <div className='mb-3'>
                      Name<input type='text' name='empName' value={empName} onChange={(e) => onInputChange(e)}/>
                   </div>

                   <div className='mb-3'>
                      Address<input type='text' name='empAddress' value={empAddress} onChange={(e) => onInputChange(e)}/>
                   </div>

                   <div className='mb-3'>
                      Salary<input type='text' name='empSalary' value={empSalary} onChange={(e) => onInputChange(e)}/>
                   </div>

                   <div className='mb-3'>
                      DOB<input type='text' name='empDOB' value={empDOB} onChange={(e) => onInputChange(e)}/>
                   </div>

                   <div className='mb-3'>
                      EmailId<input type='text' name='empEmailId' value={empEmailId} onChange={(e) => onInputChange(e)}/>
                   </div>

                   <div className='mb-3'>
                      Password<input type='text' name='empPassword' value={empPassword} onChange={(e) => onInputChange(e)}/>
                   </div>

                   <button type='submit' className='btn btn-success'>Edit Employee</button>
                </form>
            </div>
        </div>
     </div>
    )
}