
var homeData;
var homeCatsList ;

// all Cats
function getHomeCatList()
{
    var http = new XMLHttpRequest(); 

    http.open("GET" , `https://dummyjson.com/products/categories`);

    http.send();

    http.addEventListener("readystatechange" , function(){

        if(  http.readyState == 4 && http.status == 200 )
        {
            homeCatsList  = JSON.parse(http.response); 

            console.log(homeCatsList);

            var homeCats =""
            for (let index = 3; index < 7 ; index++) 
            {
                
                homeCats +=`
               <button onclick="getProducts('${homeCatsList[index]}')">
               ${homeCatsList[index]}</button>`
        
            }
            console.log(homeCats);

            document.querySelector(".products #tabs").innerHTML = homeCats
        }
    })
}

getHomeCatList()

function getProducts(selectCat)
{
    var http = new XMLHttpRequest(); 

    http.open("GET" , `https://dummyjson.com/products/category/${selectCat}`);

    http.send();

    http.addEventListener("readystatechange" , function(){

        if(  http.readyState == 4 && http.status == 200 )
        {
            homeData  = JSON.parse(http.response).products; 
            console.log(homeData );

            displayhomeData()
        }
    })
}

function displayhomeData()
{

    var productCard = ``;

    for (let i = 0; i < 4; i++) {
       
        productCard += `<div class="col-lg-3 col-6">
        <div class="product-item">
        <var hidden id="idd">${homeData[i].id}</var>
        <var hidden id="imgsrc">${homeData[i].thumbnail}</var>
        <var hidden id="titlee">${homeData[i].title}</var>
        <var hidden id="pricee">${homeData[i].price}</var>
                    <figure class="product-item-img">
            <img src="${homeData[i].thumbnail}">
            <figcaption>
                    <ul class="product-hover">
                    <li><a ><i onclick="clickedd(event)" id="addd" class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                </figcaption>
            </figure>
            <div class="product-item-text">
                <h4><a href="product-details.html?id=${homeData[i].id}">${homeData[i].title}</a></h4>
                <h5 >${homeData[i].price}EG</h5>
            </div>
        </div>
    </div>` 
    }

    document.querySelector(".products .tab-content .row").innerHTML = productCard;

}

getProducts("skincare")
