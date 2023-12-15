if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready1)
    
    document.addEventListener('DOMContentLoaded', gettotalprice)
} else {
    ready1()
    gettotalprice();
}
var totalQuantity;
var iconCartSpan = document.querySelector('.icon-cart0 span');
var totalquantitycart;
var quantityInputs
var totalall
function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
        // button.addEventListener('click', uplocalstoragecart)/////////////
        // button.addEventListener('click', uplocaltotalquantity)//////////////


    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        // input.addEventListener('change', inputchanged)///////////////

    }


    gettotalprice();

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}


function removeCartItem(event) {
    var buttonClicked = event.target
    

    cart.splice(buttonClicked.value, 1)



    buttonClicked.parentElement.parentElement.remove()






    localStorage.setItem('cart', JSON.stringify(cart))
    buttonClicked.parentElement.parentElement.remove()

    {
        ccart = localStorage.getItem('cart')
        cart = JSON.parse(ccart)
        totalquantity = 0;
        for (let w = 0; w < cart.length; w++) {

            totalquantity += cart[w].quantity;
        }

        let cartspann = { totquan: totalquantity }
        localStorage.setItem('quant', JSON.stringify(cartspann))

        quantt = localStorage.getItem('quant')
        qqq = JSON.parse(quantt)
        iconCartSpan.innerText = qqq.totquan;
    }



    gettotalprice()
    location.reload();
    
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    // updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    // var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    // var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    // var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
}
// var quantity;
function ready1() {
    ccart = localStorage.getItem('cart')
    cart = JSON.parse(ccart)

    quantt = localStorage.getItem('quant')
    qqq = JSON.parse(quantt)
    iconCartSpan.innerText = qqq.totquan;

    for (let g = 0; g < cart.length; g++) {
        var cartRow = document.createElement('div')
        cartRow.classList.add('cart-row')
        var cartItems = document.getElementsByClassName('cart-items')[0]
        var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
        cartRow.innerHTML = `
<div class="cart-item cart-column">
    <img class="cart-item-image" src="${cart[g].imgsrc}" width="100" height="100">
    <span class="cart-item-title">${cart[g].title}</span>
</div>
<span class="cart-price cart-column">${cart[g].price}</span>
<div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value=${cart[g].quantity} readonly>
    <button class="btn btn-danger" type="button" value='${g}'>REMOVE</button>
</div>`

        cartItems.append(cartRow)
        cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
        cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)

    }








}

// function updateCartTotal() {
//     var cartItemContainer = document.getElementsByClassName('cart-items')[0]
//     var cartRows = cartItemContainer.getElementsByClassName('cart-row')
//     var total = 0
//     var totalQuantity = 0

//     for (var i = 0; i < cartRows.length; i++) {
//         var cartRow = cartRows[i]
//         var priceElement = cartRow.getElementsByClassName('cart-price')[0]
//         var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
//         var price = parseFloat(priceElement.innerText.replace('$', ''))
//         var quantity = quantityElement.value
//         total = total + (price * quantity)
//         totalQuantity = totalQuantity + cart.quantity
//     }
//     total = Math.round(total * 100) / 100
//     document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total

// }
// function quantityChanged() {
//         totalquantitycart=0;
//     for (let w = 0; w < cart.length; w++) {
//         totalquantitycart+=cart[w].quantity;

// console.log(quant.totquan); 
//        }

// }


function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    localStorage.clear('cart')
    localStorage.clear('quant')
    iconCartSpan.innerText = 0
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + parseInt(0)

}
function gettotalprice() {
    totalall = 0
    for (let index = 0; index < cart.length; index++) {
        let suptotal = cart[index].price * cart[index].quantity
        console.log(suptotal);
        totalall += suptotal
        console.log(totalall);


    }
    if (cart.length == 0) {
        document.getElementsByClassName('cart-total-price')[0].innerText = '$' + parseInt(0)
    } else {
        document.getElementsByClassName('cart-total-price')[0].innerText = '$' + totalall
    }

}
