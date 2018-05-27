// Web3 stuff

var request = new XMLHttpRequest();
request.open("GET", "./build/NFT.json", false);
request.send(null)
var NFT = JSON.parse(request.responseText);

request.open("GET", "./build/NFTStore.json", false);
request.send(null)
var NFTStore = JSON.parse(request.responseText);

request.open("GET", "./build/zos.local.json", false);
request.send(null)
var zos = JSON.parse(request.responseText);

console.log(NFT)


// Init web3
var Web3 = require('web3');

var injectedWeb3 = false;
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
  console.log("injected web3")
  var injectedWeb3 = true;
} else {
  //set the provider to Rinkeby/Infura, will only work for view functions
  web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/kak6M2Qgf7oHycGaCI2E"));
  console.log("infura")
}

NFTContract = web3.eth.contract(NFT.abi).at("0xdbee2884ec55d52ce37c9f95904e02465c46292c");
NFTStoreContract = web3.eth.contract(NFTStore.abi).at("0x378e7bb2f08d4f79710afd03daaab56b4621711f");

function upload() {
  const reader = new FileReader();
  reader.onloadend = function () {
    const ipfs = window.IpfsApi('ipfs.infura.io', 5001, {
      protocol: 'https'
    }) // Connect to IPFS using Infura
    const buf = buffer.Buffer(reader.result) // Convert data into buffer
    ipfs.files.add(buf, (err, result) => { // Upload buffer to IPFS
      if (err) {
        console.error(err)
        return
      }
      let url = 'https://ipfs.io/ipfs/' + result[0].hash //pic url
      let ERC721Metadata = JSON.stringify({
        "name": document.getElementById("name").value,
        "description": document.getElementById("description").value,
        "image": url,
      })
      const jsonBuffer = buffer.Buffer(ERC721Metadata)
      ipfs.add(jsonBuffer, (err, result) => {
        if (err) {
          console.error(err)
          return
        }
        mint('https://ipfs.io/ipfs/' + result[0].hash)
      });
    })
  }
  const photo = document.getElementById("photo");
  reader.readAsArrayBuffer(photo.files[0]); // Read Provided File
}

function mint(ipfsUri) {
  console.log(ipfsUri)

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

  var hash = web3.sha3(document.getElementById("password").value)
  var qtty = document.getElementById("quantity").value

  NFTStoreContract.addCollectible.sendTransaction(hash, ipfsUri, qtty, transactionObject, (error, transaction) => {
    console.log(transaction)
  })

}

function redeem() {
  var password = document.getElementById("password").value
  var myAddress = web3.eth.coinbase

  if (!myAddress) {
    alert("Please use a browser compatible with Ethereum");
  }

  var transactionObject = {
    from: myAddress,
    gas: 900000,
    gasPrice: 3000000000
  };

  NFTStoreContract.claimCollectible.sendTransaction(myAddress, password, transactionObject, (error, transaction) => {
    if (error) console.log(error)
    else console.log(transaction)
  })

}
