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
                    <p class="text-center">' + json['description'] + '</p><button id="' + idx + '" class="btn btn-block btn-primary transfer-btn">Transfer</button><br><br>\
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


$(document).on('click', '.transfer-btn', function () {
  console.log(this.id);

  var myAddress = web3.eth.coinbase

  if (!myAddress) {
    alert("Please use a browser compatible with Ethereum");
    return;
  }

  var transactionObject = {
    from: myAddress,
    gas: 900000,
    gasPrice: 3000000000
  };

  var to = prompt("Please enter destination address", "0x");
  if (!to) return;

  NFTContract.transferFrom.sendTransaction(myAddress, to, this.id, transactionObject, (error, transaction) => {
    console.log(transaction)
  })
});
