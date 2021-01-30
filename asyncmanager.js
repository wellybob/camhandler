//
var async = require ('async');
var Watchdir = require('/home/pi/Documents/NODEJSDEV/camhandler/watchdir');
var Copyfile = require('/home/pi/Documents/NODEJSDEV/camhandler/copyfile');
var Deleteoriginalfile = require('/home/pi/Documents/NODEJSDEV/camhandler/deleteoriginalfile');

function Asyncmanager (){async.waterfall([
Watchdir
,
Copyfile
,
Deleteoriginalfile
]);
}

module.exports = Asyncmanager;