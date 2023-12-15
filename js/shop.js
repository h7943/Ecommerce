
let arrayofproduct=[];
var totalquantity;
var iconCartSpan = document.getElementById('cartspan');
var cart;
var ccart;
var quantt;
var qqq;
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', getcartspan)
} else {
  getcartspan()
}
function clickedd(event) {
  totalquantity=0;
  let element1 = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
  let idd = element1.getElementsByTagName('var')[0].innerHTML;
  let element2 = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
  let imgsrcc = element2.getElementsByTagName('var')[1].innerHTML;
  let element3 = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
  let titlee = element3.getElementsByTagName('var')[2].innerHTML;
  let element4 = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
  let pricee = element4.getElementsByTagName('var')[3].innerHTML;

  
  let productCart =  {id:idd,quantity:1,imgsrc:imgsrcc,title:titlee,price:pricee}
   
    
    quantt=localStorage.getItem('quant')
    let foundObject = arrayofproduct.findIndex(productCart => productCart.id === idd);
    if (foundObject!==-1) {

      arrayofproduct[foundObject].quantity++;
    }else{
      arrayofproduct.push(productCart);
      
    }
    localStorage.setItem('cart',JSON.stringify(arrayofproduct))
   
    ccart=localStorage.getItem('cart')
    cart=JSON.parse(ccart)
  for (let w = 0; w < cart.length; w++) {
    
    totalquantity+=cart[w].quantity;
   }
   
 let cartspann={totquan:totalquantity}
 localStorage.setItem('quant',JSON.stringify(cartspann) )

  quantt=localStorage.getItem('quant')
 qqq=JSON.parse(quantt)
 iconCartSpan.innerText = qqq.totquan;

 
}  

async function clickeddfromproduct(products) {
  totalquantity=0;
  const productId = new URLSearchParams(window.location.search).get("id");
  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  const data = await response.json();
  // console.log(data);
  // console.log(productId);
  displayProduct(data);
  let idd =`${data.id}` ;

  let imgsrcc = data.thumbnail;
  let titlee = data.title;
  let pricee = data.price;

  
  let productCart =  {id:idd,quantity:1,imgsrc:imgsrcc,title:titlee,price:pricee}
   
    
    quantt=localStorage.getItem('quant')
    let foundObject = arrayofproduct.findIndex(productCart => productCart.id === idd);
    if (foundObject!==-1) {
      console.log('hello');

      arrayofproduct[foundObject].quantity++;
    }else{
      arrayofproduct.push(productCart);
      
    }
    localStorage.setItem('cart',JSON.stringify(arrayofproduct))
   
    ccart=localStorage.getItem('cart')
    cart=JSON.parse(ccart)
  for (let w = 0; w < cart.length; w++) {
    
    totalquantity+=JSON.parse(localStorage.getItem('cart'))[w].quantity;
   }
   
 let cartspann={totquan:totalquantity}
 localStorage.setItem('quant',JSON.stringify(cartspann) )

  quantt=localStorage.getItem('quant')
 qqq=JSON.parse(quantt)
 iconCartSpan.innerText = qqq.totquan;

 
}  







 
function getcartspan() {
  
  ccart=localStorage.getItem('cart')
  cart=JSON.parse(ccart)
  if (localStorage.getItem('cart')!==null) {
      arrayofproduct=JSON.parse(localStorage.getItem('cart'))

  }
  quantt=localStorage.getItem('quant')
  qqq=JSON.parse(quantt)
  iconCartSpan.innerHTML = qqq.totquan;
  
}
