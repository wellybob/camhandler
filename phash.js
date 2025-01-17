var pHash = require('phash');//throw hash value of .jpg file
var localStorage = require('localStorage');

function pHashDistance () {
pHash.imageHash(arg1, function (err, hash1)
    {
      if (err)
	{throw err;
	}
	//if stored pic hash: create the second hash
	if (localStorage.getItem("hash1"))
	  {
	localStorage.setItem("hash2", hash1);
	console.log('hash value of pic 2 arrived:   '+ hash1);
	  }
	else
	  {localStorage.setItem("hash1", hash1);
	console.log('hash value of pic 1 arrived:   ' + hash1);
	  }
	  //if hash exists: compare distance
	    if (localStorage.getItem("hash2"))
	    {
	      var hashOne = localStorage.getItem("hash1");
	      var hash2 = localStorage.getItem("hash2");
	      var dist = pHash.hammingDistance(hashOne,hash2);
	      console.log('hamming distance:   ' + dist);
	      localStorage.setItem("hash1", hash2);
	      localStorage.removeItem("hash2");
	    } ;
    });
}
module.exports = pHashDistance;