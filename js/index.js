function getDonateBtn(id){
    const BalanceBtn = parseFloat(document.getElementById(id).innerText);
    return BalanceBtn;

}
function getInputBtn(id){
    const DonateInput  = parseFloat(document.getElementById(id).value);
    return DonateInput ;

}

const firstDonateBtn = document.getElementById("donate-btn-1");
firstDonateBtn.addEventListener('click',function(){

//   const firstDonateInput =parseFloat(document.getElementById("donate-input-1").value);
  const firstDonateInput =getInputBtn("donate-input-1")
//   const firstBalanceBtn =parseFloat(document.getElementById("balance-btn-1").innerText);
  const firstBalanceBtn = getDonateBtn("balance-btn-1")
//   const mainBalance = parseFloat(document.getElementById("main-balance").innerText);
  const mainBalance = getDonateBtn("main-balance")
  if(isNaN(firstDonateInput) || firstDonateInput<=0){
    alert ("Invalid Amount")
    return;
  }
  else{
    const firstDonation = firstDonateInput + firstBalanceBtn;
    const remainingBalance = mainBalance - firstDonateInput
    document.getElementById("balance-btn-1").innerText = firstDonation.toFixed(2);
    document.getElementById("main-balance").innerText = remainingBalance.toFixed(2);

  }

})

const secondDonateBtn = document.getElementById("donate-btn-2");
secondDonateBtn.addEventListener('click',function(){

//   const firstDonateInput =parseFloat(document.getElementById("donate-input-1").value);
  const secondDonateInput =getInputBtn("donate-input-2")
//   const firstBalanceBtn =parseFloat(document.getElementById("balance-btn-1").innerText);
  const secondBalanceBtn = getDonateBtn("balance-btn-2")
//   const mainBalance = parseFloat(document.getElementById("main-balance").innerText);
  const mainBalance = getDonateBtn("main-balance")
  if(isNaN(secondDonateInput) || secondDonateInput<=0){
    alert ("Invalid Amount")
    return;
  }
  else{
    const secondDonation = secondDonateInput + secondBalanceBtn;
    const remainingBalance = mainBalance - secondDonateInput
    document.getElementById("balance-btn-2").innerText = secondDonation.toFixed(2);
    document.getElementById("main-balance").innerText = remainingBalance.toFixed(2);

  }

})
const thirdDonateBtn = document.getElementById("donate-btn-3");
thirdDonateBtn.addEventListener('click',function(){

//   const firstDonateInput =parseFloat(document.getElementById("donate-input-1").value);
  const thirdDonateInput =getInputBtn("donate-input-3")
//   const firstBalanceBtn =parseFloat(document.getElementById("balance-btn-1").innerText);
  const thirdBalanceBtn = getDonateBtn("balance-btn-3")
//   const mainBalance = parseFloat(document.getElementById("main-balance").innerText);
  const mainBalance = getDonateBtn("main-balance")
  if(isNaN(thirdDonateInput) || thirdDonateInput<=0){
    alert ("Invalid Amount")
    return;
  }
  else{
    const thirdDonation = thirdDonateInput + thirdBalanceBtn;
    const remainingBalance = mainBalance - thirdDonateInput
    document.getElementById("balance-btn-3").innerText = thirdDonation.toFixed(2);
    document.getElementById("main-balance").innerText = remainingBalance.toFixed(2);

  }

})


