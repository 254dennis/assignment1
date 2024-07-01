function calculateNetSalary() {
  
  let basicSalary = parseFloat(document.getElementById("basic-salary").value);
  let benefits = parseFloat(document.getElementById("benefits").value);

  let payee = Math.floor((basicSalary + benefits) * 0.25);

  let NHIFDeductions = Math.floor(basicSalary * 0.02);

  let NSSFDeductions = Math.floor(basicSalary * 0.12);


  let grossSalary = Math.floor(basicSalary + benefits);


  let netSalary = grossSalary - payee - NHIFDeductions - NSSFDeductions;

  let resultElement = document.getElementById("result");
  resultElement.innerHTML = `
    
}

