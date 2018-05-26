// Web3 stuff
//contractAddress = "0x1554e84ddcd54146fc4764f9f2a016e806035b17"

// Init web3
var Web3 = require('web3');

var injectedWeb3 = false;
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
  console.log("injected web3")
  var injectedWeb3 = true;
} else {
  //set the provider to Rinkeby/Infura, will only work for view functions
  web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/kak6M2Qgf7oHycGaCI2E"));
  console.log("infura")
}

//certificateContract = web3.eth.contract(contractAbi).at(contractAddress);


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
}
