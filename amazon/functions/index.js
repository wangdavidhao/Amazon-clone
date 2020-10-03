const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");

const stripe = require("stripe")('sk_test_51HY7S9Gwk0WGk4IVdeZfVmyDSBy8h9os2UueRXOSN2GyII3JuuM8KPd0TvyNFn3SKaLoAxmfL8KBBSGfoxPR1FUu00J2UIN6eV')

//API

//App config
const app = express();

//Middlewares
app.use(cors({origin:true}));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('Hello world'))

app.post('/payment/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment request received', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amout:total,
        currency:"usd",
    });

    response.status(201).send({
        clientSecret : paymentIntent.client_secret,
    })
})

//Listen command
exports.api = functions.https.onRequest(app)

//http://localhost:5001/clone-a35cc/us-central1/api