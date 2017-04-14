var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send(RHP(req.get("User-Agent"),req.header('x-forwarded-for'),req.headers['accept-language']));
});

app.listen(8080);

function RHP (ua,ip,lan){
    var bracket1=false;
    var soft="";
    for (var i=0; i<ua.length;i++){
        if (bracket1){
            soft+=ua[i];
        }
        if(ua[i]=='('){
            bracket1=true;
        }
        if (ua[i+1]==")"){
            bracket1=false;
            break;
        }
    }
    var jsonData={ipAdress:ip,language:lan,software:soft};
    return jsonData;
}