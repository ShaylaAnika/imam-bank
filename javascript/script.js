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
    
     updateSpanText('currentDeposit' ,depositNmuber);
     updateSpanText('currentBalance', depositNmuber);
    
    })

 // withdraw  button event handler

 const withdrawBtn = document.getElementById("addWithdraw");
 
 withdrawBtn.addEventListener('click', function(){
      const withdrawNumber = getInputNumber('withdrawAmount');

      updateSpanText("currentWithdraw", withdrawNumber);

      updateSpanText("currentBalance", -1 * withdrawNumber);



      document.getElementById('withdrawAmount').value = "";

   })

 

function getInputNumber(id){

    const Amount = document.getElementById(id).value;

    const Number = parseFloat(Amount);

    return Number;

 }


 function updateSpanText(id , addedNmuber){

    var current = document.getElementById(id).innerText;
    var currentNumber = parseFloat(current);

    var totalAmount = addedNmuber + currentNumber;

    document.getElementById(id).innerText = totalAmount;

    document.getElementById('depositAmount').value= "";

  }

