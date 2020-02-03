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
    //let LastEmployee = employeeInfo[i];
        el.after(`<tr>
          <td>${employeeInfo[i].firstName}</td>
          <td>${employeeInfo[i].lastName}</td>
          <td>${employeeInfo[i].idNumber}</td>
          <td>${employeeInfo[i].title}</td>
          <td>$ ${employeeInfo[i].salary}</td>
          <td><button class="remove">remove</button></td>
        </tr>`);
    
    calculateSalary(employeeInfo[i]);
}


function calculateSalary(employeeInfo) {
    employeeSalaryTotal = Number(employeeSalaryTotal) + Number(employeeInfo.salary)
    
    let elMonthlySalaryTotal = $('#monthlySalaryTotal')
    elMonthlySalaryTotal.empty();
    elMonthlySalaryTotal.append(employeeSalaryTotal);

    if (employeeSalaryTotal > 20000) {
        elMonthlySalaryTotal.css("background-color", "red");
    }
    
}

function removeEmployee() {
    let elButtonRow = $(this)
    elButtonRow.closest('tr').remove()
}
