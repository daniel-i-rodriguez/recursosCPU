const express = require('express');
const app = express();
const morgan = require(`morgan`)

//
app.set(`port`, process.env.PORT || 3000);
app.set('json spaces', 2);


// MIDDLEWARES
app.use(morgan(`combined`));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
/*
app.get('/', (req, res) => {
    res.json({"Title": "Hello World"});
})
*/
app.use(require('./routes/routes'));
app.use(require('./routes/nodeUtils'));
app.use(require('./routes/promedioCPU'));
app.use(require('./routes/espaciocpu'));
app.use(require('./routes/memoria'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server en puerto: ${app.get(`port`)}`);
})
