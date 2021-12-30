const {Router} = require('express');
const router = Router();
var osu = require('node-os-utils')
var mem = osu.mem


router.get('/memoria', (req, res) => {
    
    mem.info()
       .then(info => {
        console.log(info)
        res.json(info);
    })

    
})



module.exports = router;