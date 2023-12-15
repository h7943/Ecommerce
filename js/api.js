
var Data;
var allCatsList ;

function getSelectedCategoryFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('category');
}

function getCatList() {
    var http = new XMLHttpRequest();
    http.open("GET", `https://dummyjson.com/products/categories`);
    http.send();

    http.addEventListener("readystatechange", function () {
        if (http.readyState == 4 && http.status == 200) {
            allCatsList = JSON.parse(http.response);
            console.log(allCatsList);

            var categoryList = "";
            var navCatsList = "";

            allCatsList.forEach(function (category) {
                categoryList += `<li>
                
                    <a href="#" class="category-link"><i class="fas fa-angle-double-right sec-color"></i>  ${category}</a>
                </li>`;
                navCatsList += `<li>
                    <a href="#" class="category-link">${category}</a>
                </li>`;
            });

            document.querySelector(".categories ul").innerHTML = navCatsList;
            document.querySelector(".sidebar .sidebar-item ul").innerHTML = categoryList;

            const selectedCategory = getSelectedCategoryFromURL();
                    if (selectedCategory) {
                        getDetails(selectedCategory);
                    }
                    else{
                        displayAllData();
                    }

        }
    });
}
getCatList();

function getDetails(selectCat)
{
    var http = new XMLHttpRequest(); 

    http.open("GET" , `https://dummyjson.com/products/category/${selectCat}`);

    http.send();

    http.addEventListener("readystatechange" , function(){

        if(  http.readyState == 4 && http.status == 200 )
        {
            Data  = JSON.parse(http.response).products; 
            console.log(Data );

            displayData()
        }
    })
}

function displayData()
{

    var elDesign = ``;

    for (let i = 0; i < Data.length; i++) {
       
        elDesign += `<div class="col-lg-4 col-6">
        <div class="product-item">
        <var hidden id="idd">${Data[i].id}</var>
        <var hidden id="imgsrc">${Data[i].thumbnail}</var>
        <var hidden id="titlee">${Data[i].title}</var>
        <var hidden id="pricee">${Data[i].price}</var>
                    <figure class="product-item-img">
                    <img id='imgsrc' src="${Data[i].thumbnail}">
                    <figcaption>
                    <ul class="product-hover">
                    <li><a><i onclick="clickedd(event)" id="addd" class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                </figcaption>
            </figure>
            <div class="product-item-text">
                <h4><a href="product-details.html?id=${Data[i].id}">
                ${Data[i].title}</a>
                </h4>
                <h5 >${Data[i].price}EG</h5>
            </div>
        </div>
    </div>` 
    }
    document.querySelector(".products-cards").innerHTML = elDesign;

}

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("category-link")) {
        event.preventDefault();
        var selectedCategory = event.target.textContent.trim();
        window.location.href = `shop.html?category=${selectedCategory}`;
    }
});

async function displayAllData(sortProduct){
    const response =  await fetch(`https://dummyjson.com/products`)
    const allData =  await response.json();
    const allProducts = await allData.products ;

    if (sortProduct === 'highToLow') {
        allProducts.sort((a, b) => b.price - a.price); 
    } else if (sortProduct === 'lowToHigh') {
        allProducts.sort((a, b) => a.price - b.price); 
    }

    var elDesign = ``;

    for (let i = 0; i < allProducts.length; i++) {

        elDesign += `<div class="col-lg-4 col-6">
        <div class="product-item">
        <var hidden id="idd">${allProducts[i].id}</var>
        <var hidden id="imgsrc">${allProducts[i].thumbnail}</var>
        <var hidden id="titlee">${allProducts[i].title}</var>
        <var hidden id="pricee">${allProducts[i].price}</var>
            <figure class="product-item-img">
            <img src="${allProducts[i].thumbnail}">
            <figcaption>
                    <ul class="product-hover">
                    <li><a cursor='pointer'><i onclick="clickedd(event)" id="addd" class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                </figcaption>
            </figure>
            <div class="product-item-text">
                <h4><a href="product-details.html?id=${allProducts[i].id}">
                ${allProducts[i].title}</a>
                </h4>
                <h5 >${allProducts[i].price}EG</h5>
            </div>
        </div>
    </div>` 
    }
    document.querySelector(".products-cards").innerHTML = elDesign;
}

document.getElementById('Options').addEventListener('change', function () {
    const selectedOption = this.value;
    displayAllData(selectedOption);
});
async function searchProduct(productName){
    const response =  await fetch(`https://dummyjson.com/products`)
    const allData =  await response.json();
    const allProducts = await allData.products ;

    var elDesign = ``;

    for (let i = 0; i < allProducts.length; i++) {

        if(allProducts[i].title.toLowerCase().includes(productName.toLowerCase()))
       {
            elDesign += `<div class="col-lg-4 col-6">
            <div class="product-item">
                <figure class="product-item-img">
                <img src="${allProducts[i].thumbnail}">
                <figcaption>
                        <ul class="product-hover">
                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </figcaption>
                </figure>
                <div class="product-item-text">
                    <h4><a href="product-details.html?id=${allProducts[i].id}">
                    ${allProducts[i].title}</a>
                    </h4>
                    <h5 >${allProducts[i].price}EG</h5>
                </div>
            </div>
        </div>` 
       }
    }
    document.querySelector(".products-cards").innerHTML = elDesign;

}