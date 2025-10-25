import { React } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AddEmployee = () => {

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

    const onInputChange = (e) => {
        setEmployee({...employee, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/employees/save", employee)

        console.log(employee);

        navigate('/')
    }


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

                   <button type='submit' className='btn btn-success'>Add Employee</button>
                </form>
            </div>
        </div>
     </div>
    )
}