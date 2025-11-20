package com.fullstack.controller;

import com.fullstack.model.Employee;
import com.fullstack.service.IEmployeeService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")

@RestController
@RequestMapping("/employees")
@RequiredArgsConstructor
@Slf4j
@SecurityRequirement(name = "Bearer Auth")
public class EmployeeController {

    private final IEmployeeService employeeService;

    @PostMapping("/save")
    public ResponseEntity<Employee> saveData(@RequestBody Employee employee){
        log.info("Saving employee: {}", employee.getEmpName());
        return new ResponseEntity<>(employeeService.save(employee), HttpStatus.CREATED);
    }

    @GetMapping("/findbyid/{empId}")
    public ResponseEntity<Optional<Employee>> getById(@PathVariable long empId){
        return new ResponseEntity<>(employeeService.findById(empId), HttpStatus.OK);

    }

    @GetMapping("/findall")
    public ResponseEntity<List<Employee>> getAll(){
        return new ResponseEntity<>(employeeService.findAll(), HttpStatus.OK);
    }

    @PutMapping("/update/{empId}")
    public ResponseEntity<Employee> updateData(@PathVariable long empId, @RequestBody Employee employee){
        return new ResponseEntity<>(employeeService.update(empId, employee), HttpStatus.CREATED);
    }

    @DeleteMapping("/deletebyid/{empId}")
    public ResponseEntity<String> deleteById(@PathVariable long empId){
        employeeService.deleteById(empId);
        return new ResponseEntity<>("Data Deleted Successfully.", HttpStatus.OK);
    }
}
