//deleteoriginalfile
var fs = require('fs');
var path = require('path');
function Deleteoriginalfile (arg1){
  //dlt file arrived from IP camera to ftp server dir;
  //waits 5 sec;
  //!!! MUST BE SUDO node -> dlt right !!!

setTimeout(function(){
  fs.unlink(arg1);
  console.log(arg1 + ' was deleted in ftp dir');}, 15000);
  };

module.exports = Deleteoriginalfile;
  