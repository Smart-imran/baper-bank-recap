/* 
    step-1: add event listner
    step-2: get deposit amount from deposit field
    step-3: clear field
    step-4: get previous deposit total
    step-5: calculate new deposit total abd set the value to the deposite total

 */
            //step-1
    document.getElementById("btn-deposit").addEventListener("click",function(){
            //step-2
       const depositField = document.getElementById("deposit-field");
       const newDepositAmountString = depositField.value;
       const newDepositAmount = parseFloat(newDepositAmountString);
            //step-3
       depositField.value ="";

            //step-4
        const depositeTotalElement = document.getElementById("deposit-total");
        const previousDepositeTotalString = depositeTotalElement.innerText;
        const previousDepositeTotal = parseFloat(previousDepositeTotalString);

            //step-4
            const newDepositeTotal = previousDepositeTotal + newDepositAmount;

            depositeTotalElement.innerText = newDepositeTotal;







    })