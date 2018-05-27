var myAddress = web3.eth.coinbase
//  <h2>user mementos</h2><p><table ><tbody id="mementos"><tr><th>Icon</th><th>name</th> <th>description</th></tr></tbody></table>'
NFTContract.balanceOf.call(myAddress, (error, result) => {
  if (error) console.log(error)
  else {
    console.log("Total amount of collectibles:", result.valueOf())
    for (i = 0; i < result; i++) {
      NFTContract.tokenOfOwnerByIndex.call(myAddress, i, (error, idx) => {
        if (error) console.log(error)
        else {
          NFTContract.tokenURI.call(idx, (error, uri) => {
            if (error) console.log(error)
            else {
              $.getJSON(uri, function (json) {
                let card = '<div class="col-sm-4" style="margin-top: 0%">\
                    <img class="img-fluid img-thumbnail rounded" src="' + json['image'] + '">\
                    <br><br><h3 class="text-center">' + json['name'] + '</h3>\
                    <p class="text-center">' + json['description'] + '</p><br>\
                    </div>'
                var deck = document.getElementById("mementos");
                deck.insertAdjacentHTML('beforeend', card);
              });
            }
          });
        }
      })
    }
  }
});
