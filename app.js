const express = require('express'),
    app = express(),
    dotenv = require("dotenv"),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    compression = require('compression'),
    session = require('express-session'),
    path = require('path');

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
}))


// ESSENTIAL DEPENDENCIES
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, "client/build")));
dotenv.config()

// MONGOOSE CONFIG
// mongoose.connect("mongodb://localhost/aj",
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }
// );

// app.use(passport.initialize())
// app.use(passport.session())

app.get('/getdirections', (req, res) => {
    let { pickup, dest } = req.query

    if (pickup.length > 0 && dest.length > 0) {
        axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${pickup}&destination=${dest}&key=${process.env.MAPS_API_KEY}`)
            .then(response => {
                console.log({ distance: response.data.routes[0].legs[0].distance.value })
                res.send({ distance: response.data.routes[0].legs[0].distance.value })
            })
    }


    // .then(data => res.send(data))
})

const port = process.env.PORT

app.listen(port, () => {
    console.log(`The server is listening on ${port}`);
    console.log(process.env.NODE_ENV);
})