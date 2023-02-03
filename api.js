$("document").ready(function(){
    let apikey = "63dc79a23bc6b255ed0c45c5";
    let limit = 1;
    getListings();
    function getListings(){
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://interactivedev-92f2.restdb.io/rest/shop",
            "method": "GET",
            "headers": {
              "content-type": "application/json",
              "x-apikey": apikey,
              "cache-control": "no-cache"
            }
          }
          
          $.ajax(settings).done(function (response) {
            console.log(response);
            let content = "";
            for (var i=0;i<response.length;i++){
                console.log(response[i])
                content = `${content}<div class="product-card" id="${response[i]._id}">
                <div class="product-name">${response[i].name}</div>
                <div class = "img-and-info">
                <img src="${response[i].image}" class="Product1">
                <div class = "product-info">${response[i].description}</div>
                </div>
                <div class="product-price">$25.00</div>
                <button class="add-to-cart-btn">Add to Cart</button>
            </div>`
            console.log(content);
            };
            console.log(content);
            $("#main").html(content);
          });
    }
})