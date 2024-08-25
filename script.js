var button = document.querySelector("button");


    salaryCalc =()=>{
            var dailySalary = prompt ("Your daily salary is: ");                     //insert the values
            var workDays = prompt ("How many days per month do you work;;");
            var extraWorkHours=prompt("Your extra work hours per month: ");


          if(isNaN(dailySalary)||isNaN(workDays)||isNaN(extraWorkHours)||dailySalary<=0||workDays<=0||extraWorkHours<=0){          //insert only numbers
                alert("Sorry try again!!");
            }
            else{

            document.getElementById("dailySalary").innerHTML= dailySalary + " ₹";    //take element from DOM 
            document.getElementById("workDaysPerMonth").innerHTML= workDays + " days."; 
            document.getElementById("extraWorkHoursPerMonth").innerHTML= extraWorkHours + " hours."

             /*MONTHLY SALARY CALCULATOR */

        
            var grossIncome = dailySalary * workDays;
            var taxes = (grossIncome * 20 /100)+( grossIncome * 5 / 100);    //20% tax from gross income + 5% other tax
            var extraWorkHoursMonthlyWage = ( dailySalary * (15/100)) * extraWorkHours;  //15% of the daily wage * the extra hours that you worked
            var netIncome = grossIncome + extraWorkHoursMonthlyWage - taxes;
                
                grossIncome = grossIncome.toFixed(2); //display the numbers with only two decimals
                taxes= taxes.toFixed(2);
                netIncome = netIncome.toFixed(2);


            document.getElementById("monthlyGrossIncome").innerHTML= grossIncome + " ₹"; //take element from DOM
            document.getElementById("taxes").innerHTML= taxes + " ₹";
            document.getElementById("netIncome").innerHTML= netIncome + " ₹";


            /* ANNUAL SALARY CALCULATOR */


            var annualGrossIncome= grossIncome * 12;
            var annualTaxes= taxes * 12;
            var annualNetIncome= netIncome *12;
            
                annualGrossIncome=annualGrossIncome.toFixed(2);  //display the number with only two decimals
                annualTaxes=annualTaxes.toFixed(2);
                annualNetIncome = annualNetIncome.toFixed(2);  


            document.getElementById("annualGrossIncome").innerHTML= annualGrossIncome + " ₹";
            document.getElementById("annualTaxes").innerHTML= annualTaxes + " ₹";
            document.getElementById("annualNetIncome").innerHTML= annualNetIncome + " ₹";
            }
        }

    button.addEventListener("click",salaryCalc);  //push button to run the function