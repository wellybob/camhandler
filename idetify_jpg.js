//works
var im = require ('simple-imagemagick');
  im.identify(['/kamkam/snap/MDAlarm_20151012-133451.jpg'], function(err, data){
    if (err) return console.log(err);
      return console.log(data);});