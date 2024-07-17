/* 
    step-1: add event listner
    step-2: get deposit amount from deposit field
    step-3: clear field
    step-4: get previous deposit total
    step-5: calculate new deposit total abd set the value to the deposite total
    step-6: get current balance
    step-7: calculate the new balance and set it to thebalance total element

 */
    document.getElementById("btn-deposit").addEventListener("click", function () {
    // Step 2: Get deposit amount from input field
    const depositField = document.getElementById("deposit-field");
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // Step 3: Clear the input field
    depositField.value = "";

    // Step 4: Get current total deposit
    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // Step 5: Calculate new total deposit
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    // Step 6: Get current balance
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // Step 7: Calculate new balance
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;
});
