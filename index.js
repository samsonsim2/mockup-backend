const cors = require('cors')
const express = require('express')
require('dotenv').config();

// const { auth } = require('express-oauth2-jwt-bearer');

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
// const checkJwt = auth({
//   audience: 'https://carousell/api',
//   issuerBaseURL: `https://dev-ar0l70p2.us.auth0.com/`,
// });


// importing Routers
const authRouter = require('./routers/authRouter')
const mockupRouter =  require('./routers/mockupRouter')
// // importing Controllers
// const ListingsController = require('./controllers/listingsController')


// importing DB
// const db = require('./db/models/index')
// const { listing, user } = db;

// initializing Controllers -> note the lowercase for the first word
// const listingsController = new ListingsController(listing, user)

// inittializing Routers
// const listingsRouter = new ListingsRouter(listingsController).routes()


const PORT = process.env.PORT;
const app = express();
// app.use(checkJwt)
// Enable CORS access to this server
app.use(cors());
 

// Enable reading JSON request bodies
app.use(express.json()); 
app.use("/auth", authRouter)
app.use("/mockup",mockupRouter)
app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
