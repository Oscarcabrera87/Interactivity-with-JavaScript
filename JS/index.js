function billingFunction(){
  
    let testTheBox = document.getElementById('same');
    let shipN = document.getElementById('shippingName');
    let shipZ = document.getElementById('shippingZip');
    let billN = document.getElementById('billingName');
    let billZ = document.getElementById('billingZip');
    
    if(testTheBox.checked){
      billN.value = shipN.value;
      billZ.value = shipZ.value;
      
      billN.setAttribute("required", true);
      billZ.setAttribute("required", true)
    }else{
      billN.value = "";
      billZ.value = "";
      billN.removeAttribute("required");
      billZ.removeAttribute("required");
    }
    
    console.log(testTheBox.value)
    console.log(shipN.value)
    console.log(shipZ.value)
    console.log(billN.value)
    console.log(billZ.value)
    
    
  }
      
  
   
  
   