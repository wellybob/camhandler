//copyfile
var fs = require('fs');
var path = require('path');
var pHashDistance = require('/home/pi/Documents/NODEJSDEV/camhandler/phashdistance.js');
function Copyfile (arg1, callback){
  //set hash values to localStorage
  //waits 5 sec before copy
  //if snapshots arrive every second: watchdir module handle it and the queue is at this line of code
  //it is enough time (5sec) to finish wrinting a half Mbyte .jpg file sent by a remote IP camera
  //then multiple .jpg files are copied
  setTimeout(function(){
  pHashDistance(arg1);
fs.createReadStream(arg1).pipe(fs.createWriteStream('/media/089F-1E2E/borhazkepek/' + path.basename(arg1)));
  console.log(arg1 + ' was copied to another dir');}, 5000);

callback(null, arg1);
  };

module.exports = Copyfile;
  