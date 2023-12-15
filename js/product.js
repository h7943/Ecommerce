var product = document.getElementById("product-container");
var breadcrumbs = document.getElementById("breadcrumbs");
async function singleProduct() {
  const productId = new URLSearchParams(window.location.search).get("id");
  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  const data = await response.json();
  console.log(data);
  console.log(productId);
  displayProduct(data);
}

function displayProduct(products) {
  breadcrumbs.innerHTML = `
    <h2 class="breadcrumb-title">${products.title}</h2>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="shop.html">Shop</a></li>
          <li>${products.title}</li>
        </ul>

    `;

  product.innerHTML = `

                  <div class="row">
                        <div class="col-lg-6"> 
                        <div class="product-img">
                            <img src="${products.images[0]}" alt="">
                        </div>
                            <div class="product-thumb">
                                <img src="${products.images[1]}" onclick="img('${products.images[1]}')">
                                <img src="${ products.images[2]}" onclick="img('${products.images[2]}')">
                                <img src="${ products.images[3]}" onclick="img('${products.images[3]}')">
                                <img src="${products.images[4]}" onclick="img('${products.images[4]}')">
                            </div>
                        </div>
                        <div class="col-lg-6"> 
                        <div class="product-details">
                                        <h4 class="category-link">${
                                          products.category
                                        }</h4>
                                        <h1>${products.title}</h1>
                                        <div class="star-rating">
                                        <span class="fa fa-star" id="starOne"></span>
                                        <span class="fa fa-star" id="starTwo"></span>
                                        <span class="fa fa-star" id="starThree"></span>
                                        <span class="fa fa-star" id="starFour"></span>
                                        <span class="fa fa-star" id="starFive"></span>
                                    </div>
                                    <h2 class="price sec-color">${
                                      products.price + " " + "EG"
                                    }</h2>
                                    <p>${products.description}</p>
                                    <ul class="product-details-ul">
                                    <li><b>Brand</b> <span>${
                                      products.brand
                                    }</span></li>
                                    <li><b>Availability On Stock</b> <span>${
                                      products.stock
                                    }</span> Items </li>
                                    <li><b>Shipping</b> <span> 5 work days shipping</span></li>
                                    <li><b>Weight</b> <span>0.5 kg</span></li>
                                   
                                </ul>
                                       
                                <a  onclick="clickeddfromproduct(event)" id="addd" class="btn">ADD TO CARD</a>
                                  
                                    
                                    </div>
                        </div>
                    </div>

                  `;
  rate(products.rating);
  var allImages = Array.from(document.querySelectorAll(".product-thumb img"));
  console.log(allImages);
  for (var i = 0; i < allImages.length; i++) {
    allImages[i].addEventListener("click", function () {
      document.querySelector(".product-img img").src = this.getAttribute("src");
    });
  }
}

function img(anything) {
  document.querySelector(".image").src = anything;
}

singleProduct();

function rate(rating) {
  let starOne = document.querySelector("#starOne");
  let starTwo = document.querySelector("#starTwo");
  let starThree = document.querySelector("#starThree");
  let starFour = document.querySelector("#starFour");
  let starFive = document.querySelector("#starFive");

  console.log(rating);

  if (rating == 5 || rating > 4 || rating < 5) {
    console.log(rating);

    starOne.style.color = "gold";
    starTwo.style.color = "gold";
    starThree.style.color = "gold";
    starFour.style.color = "gold";
    starFive.style.color = "gold";
  } else if (rating == 4 || rating > 3 || rating < 4) {
    starOne.style.color = "gold";
    starTwo.style.color = "gold";
    starThree.style.color = "gold";
    starFour.style.color = "gold";
  } else if (rating == 3 || rating > 2 || rating < 3) {
    starOne.style.color = "gold";
    starTwo.style.color = "gold";
    starThree.style.color = "gold";
  } else if (rating == 2 || rating > 1 || rating < 2) {
    starOne.style.color = "gold";
    starTwo.style.color = "gold";
  } else {
    starOne.style.color = "gold";
  }
}
async function displayComment() {
  const response = await fetch("https://dummyjson.com/comments");
  const comments = await response.json();
  const userComment = comments.comments;
  console.log(userComment);
  var commentsContainer = ``;

  for (let i = 0; i < 5; i++) {
    commentsContainer += `
        <div class="comment-card">
            <div class="user">
                    ${userComment[i].user.username.charAt(0)}
                    </div>
                    <div class="comment-info">
                        <small>
                           <strong>${userComment[i].user.username}</strong> 
                        </small>
                        <p>
                            ${userComment[i].body}
                        </p>
                    </div>
        </div>
        `;
  }
  document.querySelector(".commentsContainer").innerHTML = commentsContainer;
}

displayComment();
