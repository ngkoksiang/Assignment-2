$("document").ready(function(){
    let apikey = "63dc79a23bc6b255ed0c45c5";
    let limit = 1;
    let user = {};
  
    // Show sign up form
    $("#signup-form").show();
    
    // Handle sign up button click
    $("#signup-btn").click(function(){
      user.email = $("#email").val();
      user.password = $("#password").val();
  
      // Call the API to sign up the user
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://interactivedev-92f2.restdb.io/rest/users",
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "x-apikey": apikey,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(user)
      }
  
      $.ajax(settings).done(function (response) {
        console.log(response);
        // Redirect to login page
        window.location.href = "login.html";
      });
    });
  });
  