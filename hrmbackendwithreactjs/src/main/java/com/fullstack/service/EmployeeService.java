package com.fullstack.service;

import com.fullstack.exception.RecordNotFoundException;
import com.fullstack.model.Employee;
import com.fullstack.repository.EmployeeRepository;
import com.fullstack.service.IEmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EmployeeService implements  IEmployeeService {

    private final EmployeeRepository employeeRepository;

    @Override
    public Employee save(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public Optional<Employee> findById(long empId) {
        return Optional.ofNullable(employeeRepository.findById(empId).orElseThrow(() -> new RecordNotFoundException("Employee #ID Does Not Exist.")));
    }

    @Override
    public List<Employee> findAll() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee update(long empId, Employee employee) {

        Employee employee1 = findById(empId).get();

        employee1.setEmpName(employee.getEmpName());
        employee1.setEmpAddress(employee.getEmpAddress());
        employee1.setEmpSalary(employee.getEmpSalary());
        employee1.setEmpDOB(employee.getEmpDOB());
        employee1.setEmpEmailId(employee.getEmpEmailId());
        employee1.setEmpPassword(employee.getEmpPassword());
        return employeeRepository.save(employee1);
    }

    @Override
    public void deleteById(long empId) {
        employeeRepository.deleteById(empId);
    }
}
