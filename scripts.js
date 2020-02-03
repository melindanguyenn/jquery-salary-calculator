$(document).ready(onReady);

let employeeInfo = [];
let employeeSalaryTotal = 0;

function onReady() {
    console.log("hello");
    $('#submitEmployee').on('click', createEmployee);
    $('#employeeTable').on('click', ".remove", removeEmployee);
}

function createEmployee (){
    console.log('creating employee');
    let thisEmployee = {
        firstName: $('#fName').val(),
        lastName: $('#lName').val(),
        idNumber: $('#idNumber').val(),
        title: $('#title').val(),
        salary: $('#employeeSal').val()
    }
    employeeInfo.push(thisEmployee); // pushes thisemployee into employeeinfo
    displayEmployee(); //calls function
} // adding employee

function displayEmployee(){
    console.log('display employee');
    let el = $('#employeeTable tr:last');
    // el.empty(); //empty element
    let i = employeeInfo.length - 1 
    // or let LastEmployee = employeeInfo[i];
        el.after(`<tr>
          <td>${employeeInfo[i].firstName}</td>
          <td>${employeeInfo[i].lastName}</td>
          <td>${employeeInfo[i].idNumber}</td>
          <td>${employeeInfo[i].title}</td>
          <td>$ ${employeeInfo[i].salary}</td>
          <td><button class="remove">remove</button></td>
        </tr>`); // retrieve from array
    calculateSalary(employeeInfo[i]);
} // displaying employee


function calculateSalary(employeeInfo) {
    console.log('calculate salary');
    employeeSalaryTotal = Number(employeeSalaryTotal) + Number(employeeInfo.salary) //calculate
    let elMonthlySalaryTotal = $('#monthlySalaryTotal')
    elMonthlySalaryTotal.empty();
    elMonthlySalaryTotal.append(employeeSalaryTotal);
    if (employeeSalaryTotal > 20000) {
        elMonthlySalaryTotal.css("background-color", "red"); // if salary is more than 20k, make background red
    }
} //calculating salary total

function removeEmployee() {
    console.log('remove employee');
    let elButtonRow = $(this)
    elButtonRow.closest('tr').remove() //remove closest to THIS line
} //removes employee on click
