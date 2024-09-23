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
  const firstDonateTitle = document.getElementById("donate-title-1").innerText

  const historyItem = document.createElement("div");
  historyItem.className = "bg-white p-4 rounded-lg border-2 "
  historyItem.innerHTML=  `
  <p class="text-black text-xl font-bold text-left">${firstDonateInput.toFixed(2)} Taka is ${firstDonateTitle} </p>
  <p class="text-gray-400 font-semibold"> Date: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} GMT +0600(Bangladesh Standard Time) </p>
  `
const historySection = document.getElementById("history-section");

historySection.insertBefore(historyItem,historySection.firstChild) 

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
  const secondDonateTitle = document.getElementById("donate-title-2").innerText

  const historyItem = document.createElement("div");
  historyItem.className = "bg-white p-6 rounded-lg border-2  "
  historyItem.innerHTML=  `
  <p class="text-black text-xl font-bold text-left">${secondDonateInput.toFixed(2)} Taka is ${secondDonateTitle} </p>
  <p class="text-gray-400 font-semibold"> Date: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} GMT +0600(Bangladesh Standard Time) </p>
  `
const historySection = document.getElementById("history-section");

historySection.insertBefore(historyItem,historySection.firstChild) 






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

// history-tab-features
const historyTab = document.getElementById("History-tab");
const donationTab = document.getElementById("Donation-tab");
historyTab.addEventListener('click', function(){
    historyTab.classList.add('bg-[#B4F461]','text-black','text-lg','font-semibold')
    historyTab.classList.remove('text-gray-600')
    donationTab.classList.remove('bg-[#B4F461]','text-black','text-lg','font-semibold')
    donationTab.classList.add('border-gray-200','text-gray-600')

    document.getElementById("donation-fund").classList.add('hidden')
    document.getElementById("history-section").classList.remove('hidden')

})

