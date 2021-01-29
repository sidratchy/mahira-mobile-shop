
//iphone event handler........
// document.getElementById('iphonePlus').addEventListener('click',function(){
   
//    plusMinus('iphoneInput',true,900,'iphonePrice');
// })
plusMinus('iphonePlus','iphoneInput',true,900,'iphonePrice');

plusMinus('iphoneMinus','iphoneInput',false,900,'iphonePrice');

plusMinus('sumsungPlus','samsungInput',true,800,'samsungPrice');

plusMinus('samsungMinus','samsungInput',false,800,'samsungPrice');
// document.getElementById('iphoneMinus').addEventListener('click',function(){
   
//     plusMinus('iphoneInput',false,900,'iphonePrice');
   
// })

//sumsung event handler......

// document.getElementById('sumsungPlus').addEventListener('click',function(){
   
//     plusMinus('samsungInput',true,800,'samsungPrice');
//  })
 
//  document.getElementById('samsungMinus').addEventListener('click',function(){
    
//      plusMinus('samsungInput',false,800,'samsungPrice');
    
//  })




// 

function plusMinus(handler,input, isAdd,phonePrice,priceDisplay){
   document.getElementById(handler).addEventListener('click',function(){
    let phoneInput = document.getElementById(input).value;
    let phoneCount = parseInt(phoneInput);
    let counter = 0;
    
    if(isAdd == true){
         counter = phoneCount + 1; 

     }
     else if(isAdd == false && phoneCount > 0){
         counter = phoneCount - 1; 
     }
     let price = counter * phonePrice;
    document.getElementById(input).value = counter;
    document.getElementById(priceDisplay).innerText = '$'+price;

    phoneTotalPrice()
   })
}
function phoneTotalPrice(){
  let iphoneCount = document.getElementById('iphoneInput');
  let totalIPhone = parseInt(iphoneCount.value);

  let samsungCount = document.getElementById('samsungInput');
  let totalSamsung = parseInt(samsungCount.value);

  let total = totalIPhone * 900 + totalSamsung * 800;
  let tax = (total * 10)/100;

  let grandtotal = total + tax;
  document.getElementById('subtotal').innerText ='$'+total;

  document.getElementById('tax').innerText ='$'+ tax;

  document.getElementById('grandTotal').innerText ='$'+ grandtotal;
}


function checkOut(){
    document.getElementById('phone-section').style.display='none';
    document.getElementById('confirm').style.display='block';
}