const {Router} = require('express');
const router = Router();


router.get('/test', (req, res) => {
    const data = {
        "name": "mocos",
        "location": "narnia",
        "Title": "Hello World"
    }

    res.json(data);
})



module.exports = router;