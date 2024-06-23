// Get a reference to the #add-employees-btn element
//Christian Yanez
// Collect employee data
//For some reason the button preemptively presses itself when the page loads
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

const test = collectEmployees();
console.log(test);//testing the values are being properly stored

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;

  for (employee of employeesArray) {
    totalSalary += employee.salary;
  }
  const averageSalary = totalSalary / employeesArray.length;
  console.log('The average salary is', averageSalary); // Testing the average finding function
  
}
console.log(displayAverageSalary(test));//for some reason this line is needed for the above 
//console.log to display the averageSalary even though this is indefined

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  let randomIndexNumber = randomNumber(0, employeesArray.length - 1);
  console.log(employeesArray[randomIndexNumber]);
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
