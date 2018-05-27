
  function test(){

var myAddress = web3.eth.coinbase
  let tokens = []
  let table = '<h2>user mementos</h2><p><table ><tbody id="mementos"><tr><th>Icon</th><th>name</th> <th>description</th></tr></tbody></table>'
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
              //request({url:uri},function (error, response, body) {
              $.getJSON( uri, function(json) { // console.log(result) })
                //     console.log('error:', error); 
                //     console.log('statusCode:', response && response.statusCode); 
                //     console.log("le body:", body);
                    console.log(json)
                    var row = document.createElement('tr');
                    var col = document.createElement('td');
                    var col2 = document.createElement('td');
                    var col3 = document.createElement('td');
                    row.appendChild(col); 
                    row.appendChild(col2);
                    row.appendChild(col3);
                    console.log('Using the following image');
                    console.log(json['image']);
                    col.innerHTML = '<div><img class="u-max-full-width" src="'+json['image']+'" alt=""></img></div>'
                    col2.innerHTML = json['name'];
                    col3.innerHTML = json['description']; 
                    var table = document.getElementById("mementos"); 
                    table.appendChild(row);
                });
            }
            });
          }
        })
      }
    }
  });
  // NFTContract.totalSupply.call( (error, result) => {console.log(result)
  //  })
  }

  test();






