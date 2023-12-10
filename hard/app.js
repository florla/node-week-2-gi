// import required modules
// express library for creating web servers
const express = require('express');
// file System module for reading and writing files
const fs = require('fs'); 
// employees JSON data
const employeeData = require('./employees.json'); 

// instance of express
const app = express();

// port number for the server to listen on
const PORT = process.env.PORT || 4000; 

// route for handling GET requests to /employees
app.get('/employees', (req, res) => {
  res.json(employeeData.Employees); 
});

// route for handling GET requests to /employees/:employeeID
app.get('/employees/:employeeID', (req, res) => {
  const employee = employeeData.Employees.find(e => e.employeeID === parseInt(req.params.employeeID));

  // if employee is found send the employee data as a JSON response- otherwise send error
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ error: 'Employee not found' });
  }
});

// start the server and listen on port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});