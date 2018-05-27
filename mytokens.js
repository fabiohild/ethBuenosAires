

var myAddress = web3.eth.coinbase
  let tokens = []
  let table = '  <div id="mementos" class="row"></div>'//  <h2>user mementos</h2><p><table ><tbody id="mementos"><tr><th>Icon</th><th>name</th> <th>description</th></tr></tbody></table>'
  $('#mementos').html("");
  $('#mementos').append(table);
  NFTContract.balanceOf.call(myAddress,(error, result) => {
    if (error) console.log(error)
    else {
      console.log("Total amount of collectibles:",result.valueOf())
      for (i = 0; i < result; i++) {
        NFTContract.tokenOfOwnerByIndex.call(myAddress,i, (error, idx) => {
          if (error) console.log(error)
          else {
            NFTContract.tokenURI.call(idx, (error, uri) => {
              if (error) console.log(error)
              else {
              console.log(uri)
              tokens.push(uri)
              $.getJSON( uri, function(json) { 
                let card = '<div class="one-third column" style="margin-top: 0%">\
                    <img class="u-max-full-width" src="'+json['image']+'">\
                    <h4>'+json['name']+'</h4>\
                    <p>'+json['description']+'</p>\
                    </div>'   
                    var deck = document.getElementById("mementos"); 
                    deck.insertAdjacentHTML( 'beforeend', card );
                });
            }
            });
          }
        })
      }
    }
  });
  





