
document.addEventListener("DOMContentLoaded", function() {
    var loginLink = document.querySelectorAll(".home_login");
    var user_iconn = document.getElementById("user_icon");
    var inner_icon_text=document.getElementById("inner_icon_text");

    if (localStorage.getItem("user")) {




         var userdata = JSON.parse( localStorage.getItem("user"));
          var userName=userdata.firstName;

        // var userName = localStorage.getItem("user");

        // Update link content with user name and logout
        loginLink[0].innerHTML = `Logout`;
        loginLink[0].href = "logout.html";
        loginLink[1].innerHTML = `Logout`;
        loginLink[1].href = "logout.html";
        inner_icon_text.innerHTML=`<a href=pprofile.html>${userName}</a>`;
        user_iconn.href = "pprofile.html";


        // Add a click event listener for logout functionality
        loginLink.addEventListener("click", function() {
         
            window.location.href = "logout.html";
        });
      
        // Add click event listener for profile icon to go to profile.html
        user_iconn.addEventListener("click", function() {
            // Redirect to the profile page
            user_iconn.href = "pprofile.html";
        });
        // inner_icon_text.addEventListener("click", function() {
        //     // Redirect to the profile page
        //     window.location.href = "pprofile.html";
        // });
    }
    // function newDoc() {
    //     console.log("newDoc");
    //     window.location.href="logout.html";
    //         }

    
});

function logout() {
    localStorage.clear();
window.location.href = "index.html";
}

// function newDoc() {
//     window.location.href="logout.html";
//         }