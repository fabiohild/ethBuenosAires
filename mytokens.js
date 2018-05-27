  function test(){

var myAddress = web3.eth.coinbase
// var transactionObject = {
//     from: myAddress,
//     gas: 900000,
///     gasPrice: 3000000000
  // };
  let tokens = []
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






