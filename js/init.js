// function loadScript(src, callback) {
//     var script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.src = src;
//     script.onload = callback;
//     document.head.appendChild(script);
// }

// document.addEventListener('DOMContentLoaded', function () {
//     if (localStorage.getItem('user') === null && document.querySelectorAll('.auth').length > 0) {
//         window.location.href = '/login.html';
//     }

//     // loadScript('js/categories.js', categoriesSetup);
//     // loadScript('js/products.js', productsSetup);
//     loadScript('js/user.js', userInfo);
//     // loadScript('js/cart.js', cartInfo);
//     // loadScript('js/ecommerce.js', cartSetup);
// });

//init content


// import { User } from './user.js';
// Declare user globally

var user = new User();

var userInfo = function () {
    console.log("hello");
    // Event listener for the login form
    document.querySelector('form.login').addEventListener('submit', function (e) {
        e.preventDefault();

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        user.doLogin(username, password);
    });

    // No need to check for .userAccount here
};

var getInfo = function () {
    var userAccountElement = document.querySelector(".userAccount");
    if (userAccountElement !== null) {
        var userAccount = JSON.parse(localStorage.getItem("user"));

        if (userAccount) {
            // Access the globally declared user instance
            user.getAccountInfo(userAccount);
        }
    }
};



// Now, you can call userInfo() and getInfo() as needed

document.addEventListener('DOMContentLoaded', function () {
    userInfo();
}); 




document.addEventListener('DOMContentLoaded', function () {
    getInfo();
}); 











//     const fullPath = window.location.pathname;

//    const pageName = fullPath.split('/').pop();

//     console.log(`Current page name: ${pageName}`);
//     if(pageName==="account.html")
//     {
//                 var Account = JSON.parse(localStorage.getItem("user"));
//                 user.getAccountInfo(Account);

//     }
    
// };


// function loadScript(url, callback) {
// 	var head = document.head;
// 	var script = document.createElement("script");
// 	script.type = "text/javascript";
// 	script.src = url;
// 	script.onreadystatechange = callback;
// 	script.onload = callback;
// 	head.appendChild(script);
// }

// document.addEventListener('DOMContentLoaded', function () {
//     if (localStorage.getItem("user") === null) {
//       window.location.href = "login.html";
//     }
  
//     function loadScript(src, callback) {
//       var script = document.createElement('script');
//       script.type = 'text/javascript';
//       script.src = src;
//       script.onload = callback;
//       document.head.appendChild(script);
//     }
  
//     function userInfoSetup() {
//       // Add your setup logic for user.js
//       var user = new User();
      
//       document.querySelector('form.login').addEventListener('submit', function (e) {
//         e.preventDefault();
    
//         var username = document.getElementById('username').value;
//         var password = document.getElementById('password').value;
    
//         user.doLogin(username, password);
//       });
//           if (document.querySelector(".userAccount").length ) {
//         var userAccount = JSON.parse(localStorage.getItem("user"));
//         // console.log(userAccount);
//         if (userAccount) {
//             user.getAccountInfo(userAccount);
//         }
//     }
//     }
  
//     // Load user.js and execute userInfoSetup when it's loaded
//     loadScript("user.js", userInfoSetup);
//   });
  