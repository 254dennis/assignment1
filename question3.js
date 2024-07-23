//kra tax bracket
const TAX_BRACKETS = [
  { min: 0, max: 24000, rate: 10 },
  { min: 24001, max: 32333, rate: 15 },
  { min: 32334, max: 40385, rate: 20 },
  { min: 40386, max: 48337, rate: 25 },
  { min: 48338, max: 56389, rate: 30 },
  { min: 56390, max: Infinity, rate: 35 }
];

// NHIF rates
const NHIF_RATES = [
  { min: 0, max: 5999, amount: 150 },
  { min: 6000, max: 7999, amount: 300 },
  { min: 8000, max: 11999, amount: 400 },
  { min: 12000, max: 14999, amount: 500 },
  { min: 15000, max: 19999, amount: 600 },
  { min: 20000, max: 24999, amount: 750 },
  { min: 25000, max: 29999, amount: 850 },
  { min: 30000, max: 34999, amount: 900 },
  { min: 35000, max: 39999, amount: 1000 },
  { min: 40000, max: 44999, amount: 1100 },
  { min: 45000, max: 49999, amount: 1200 },
  { min: 50000, max: 59999, amount: 1300 },
  { min: 60000, max: 69999, amount: 1400 },
  { min: 70000, max: 79999, amount: 1500 },
  { min: 80000, max: 89999, amount: 1600 },
  { min: 90000, max: 99999, amount: 1700 },
  { min: 100000, max: 109999, amount: 1800 },
  { min: 110000, max: 119999, amount: 1900 },
  { min: 120000, max: 129999, amount: 2000 },
  { min: 130000, max: 139999, amount: 2100 },
  { min: 140000, max: 149999, amount: 2200 },
  { min: 150000, max: Infinity, amount: 2300 }
];

const NSSF_RATE_EMPLOYEE = 6; 
const NSSF_RATE_EMPLOYER = 6; 

function calculatePAYE(salary) {
  let tax = 0;
  for (let bracket of TAX_BRACKETS) {
      if (salary > bracket.max) {
          tax += (bracket.max - bracket.min + 1) * (bracket.rate / 100);
      } else {
          tax += (salary - bracket.min + 1) * (bracket.rate / 100);
          break;
      }
  }
  return tax;
}

// NHIF deduction
function calculateNHIF(salary) {
  for (let rate of NHIF_RATES) {
      if (salary >= rate.min && salary <= rate.max) {
          return rate.amount;
      }
  }
  return 2300; 
}

//  NSSF deduction
function calculateNSSF(salary) {
  const employeeContribution = salary * (NSSF_RATE_EMPLOYEE / 100);
  const employerContribution = salary * (NSSF_RATE_EMPLOYER / 100);
  return { employee: employeeContribution, employer: employerContribution };
}

// culculating Net Salary
function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;
  const paye = calculatePAYE(grossSalary);
  const nhif = calculateNHIF(basicSalary);
  const nssf = calculateNSSF(basicSalary).employee;

  const deductions = paye + nhif + nssf;
  const netSalary = grossSalary - deductions;

  return {
      grossSalary: grossSalary,
      paye: paye,
      nhif: nhif,
      nssf: nssf,
      deductions: deductions,
      netSalary: netSalary
  };
}
// test on all the deductions 
const basicSalary = 180000; 
const benefits = 5000; 

const salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log('Salary Details:', salaryDetails);
