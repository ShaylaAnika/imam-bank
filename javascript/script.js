 // login button event handler

 var logiinBtn = document.getElementById('login');
 logiinBtn.addEventListener('click',function(){
     var loginArea = document.getElementById('login-area');
     loginArea.style.display = 'none';
     var transactionArea = document.getElementById('transaction-area');
     transactionArea.style.display = "block";
 })


 // deposit button event handler

  var depositButton = document.getElementById('addDeposit');
  depositButton.addEventListener('click', function(){

    

    var depositNmuber = getInputNumber('depositAmount');

    // var currentDeposit = document.getElementById('currentDeposit').innerHTML;

    // var currentDepositNumber = parseFloat(currentDeposit);

    // var totalDeposit = currentDepositNumber + depositNmuber


    // document.getElementById("currentDeposit").innerText = totalDeposit;
    // var balanceAmount = document.getElementById('currentBalance').innerText;
    // var currentBalanceNumber = parseFloat(balanceAmount);

    // var totalBalance = depositNmuber + currentBalanceNumber;

    // document.getElementById('balanceAmount').innerText = totalBalance;

    // document.getElementById('depositAmount').value= "";
    
 updateSpanText('currentDeposit' ,depositNmuber);
 updateSpanText('currentBalance', depositNmuber);
    


  })

  function updateSpanText(id , depositNmuber){

    var current = document.getElementById(id).innerText;
    var currentNumber = parseFloat(current);

    var totalAmount = depositNmuber + currentNumber;

    document.getElementById(id).innerText = totalAmount;

    document.getElementById('depositAmount').value= "";

  }

 // withdraw  button event handler

 const withdrawBtn = document.getElementById("addWithdraw");
 
 withdrawBtn.addEventListener('click', function(){
     const withdrawNumber = getInputNumber('withdrawAmount');



})

 

function getInputNumber(id){

    const Amount = document.getElementById(id).value;

    const Number = parseFloat(Amount);

    return Number;

 }


 function updateSpanText(id , depositNmuber){

    var current = document.getElementById(id).innerText;
    var currentNumber = parseFloat(current);

    var totalAmount = depositNmuber + currentNumber;

    document.getElementById(id).innerText = totalAmount;

    document.getElementById('depositAmount').value= "";

  }

