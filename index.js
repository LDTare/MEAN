var express = require('express'),
app = express();
port = process.nextTick.port || 3800,
mongoose = require('mongoose'),
bodyParser = require('body-parser')
cors = require('cors');

app.use(cors());
require('dotenv').config()

mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGO_URI
).then(()=>{
    console.log('stable connection');
})
.catch(err => console.log(err));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require("./routes/AutosRoute")(app);
require("./routes/PropietarioRoute")(app);

app.listen(port)

console.log('Servidor para Rest iniciada en: ' + port);