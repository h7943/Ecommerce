 class User {
    constructor() {
        this.apiUrl = "https://dummyjson.com/";
    }

    getAccountInfo(user) {
        console.log();
        var myImage = document.getElementById('myImage');

        // Set the src attribute with the new image URL
        myImage.src = user.image;
        document.getElementById("username").value = user.username;
        document.getElementById("fname").value = user.firstName;
        document.getElementById("lname").value = user.lastName;
        document.getElementById("phone").value = user.phone;
        document.getElementById("email").value = user.email;
        document.getElementById("address").value = user.address.address;
        document.getElementById("city").value = user.address.city;
        document.getElementById("zip").value = user.address.postalCode;
    }
    // {"id":9,"firstName":"Demetrius","lastName":"Corkery","maidenName":"Gleason","age":22,"gender":"male","email":"nloiterton8@aol.com","phone":"+86 356 590 9727","username":"nloiterton8","password":"HTQxxXV9Bq4","birthDate":"1971-03-11","image":"https://robohash.org/excepturiiuremolestiae.png","bloodGroup":"A+","height":170,"weight":97.1,"eyeColor":"Green","hair":{"color":"Brown","type":"Strands"},"domain":"goodreads.com","ip":"78.170.185.120","address":{"address":"5403 Illinois Avenue","city":"Nashville","coordinates":{"lat":36.157077,"lng":-86.853827},"postalCode":"37209","state":"TN"},"macAddress":"98:EE:94:A2:91:C4","university":"Nanjing University of Economics","bank":{"cardExpire":"02/24","cardNumber":"5372664789004621","cardType":"mastercard","currency":"Yuan Renminbi","iban":"BR68 9829 0581 3669 5088 5533 025N V"},"company":{"address":{"address":"12245 West 71st Place","city":"Arvada","coordinates":{"lat":39.8267078,"lng":-105.1366798},"postalCode":"80004","state":"CO"},"department":"Human Resources","name":"Gorczany Group","title":"Community Outreach Specialist"},"ein":"14-1066382","ssn":"717-26-3759","userAgent":"Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_4_11; de) AppleWebKit/528.4+ (KHTML, like Gecko) Version/4.0dp1 Safari/526.11.2"}
    async doLogin(username, password) {

        localStorage.clear();
        try {
            const response = await fetch(this.apiUrl + "users");

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }



            const usersdata = await response.json();
            const data=usersdata.users;
            console.log(data);

            for (const user of data) {
                if (user.username === username && user.password === password) {
                    localStorage.setItem("user", JSON.stringify(user));
                }
            }

            if (localStorage.getItem("user") !== null) {
                window.location.href = "index.html";
            } else {
                document.querySelector(".loginMsg").innerHTML =
                    '<div class="alert alert-danger" role="alert">Your password or username is incorrect. Please try again.</div>';
            }

        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

};

var userdata = JSON.parse(localStorage.getItem("user"));
var breadcrumbs = document.getElementById("breadcrumbs");

document.addEventListener('DOMContentLoaded', function () {
    displayProduct(userdata);
  }); 

  if (localStorage.getItem("user") !== null) {
    function displayProduct(userdata) {
        // console.log(userdata);
        breadcrumbs.innerHTML = `
          <h2 class="breadcrumb-title">${userdata.firstName}</h2>
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="pprofile.html">Profile</a></li>
                <li>${userdata.firstName}</li>
              </ul>
      
          `};
} 
