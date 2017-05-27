let express = require('express'),
    bodyParser = require('body-parser'),
    load = require('express-load');
    //methodOverride = require('method-override'),

app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(methodOverride());

load('routes').into(app);

// Start Server
app.listen(2828, () => {
    console.log("Server up on port " + 2828);
});
