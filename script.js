// Get a reference to the #add-employees-btn element
//Christian Yanez
// Collect employee data
//Everything should be working properly, I'm not sure why the prompt shows up so early.
//Use a mulligen value for the first set of prompts. Then it will work as intended
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const collectEmployees = function() {
  let firstName, lastName, salary;
  const employeesArray = [];

  let ask = true;
  while (ask) {
    if (!firstName) {
      firstName = prompt('Please enter your first name:');
      continue;
    }

    if (!lastName) {
      lastName = prompt('Please enter your last name');
      continue;
    }

    if (!salary || isNaN(salary)) {
      salary = +prompt('Please enter your salary');
      continue;
    }

    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };

    employeesArray.push(employee);

    firstName = '';
    lastName = '';
    salary = 0;

    ask = confirm("Would you like to add another employee?");
  }

  return employeesArray;
  
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;

  for (employee of employeesArray) {
    totalSalary += employee.salary;
  }
  const averageSalary = totalSalary / employeesArray.length;
  console.log('The average salary is', averageSalary); // Testing the average finding function
  
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  let randomIndexNumber = Math.floor(Math.random() * employeesArray.length);
  console.log('And the winner is:', employeesArray[randomIndexNumber].firstName, employeesArray[randomIndexNumber].lastName);
}
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
