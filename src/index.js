const express = require('express')
const app = express()
const myRouterZero = require('./router/router_zero')
const myRouterOne = require('./router/router_one')
const port = 3000;

app.listen(port, () => 
    console.log(`Server listening at http://localhost:${port}`)
);

app.use("/r0", myRouterZero);
app.use("/r1", myRouterOne);