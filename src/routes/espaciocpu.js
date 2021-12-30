const {Router} = require('express');
const router = Router();
var osu = require('node-os-utils')
var drive = osu.drive


// no funka
router.get('/espaciocpu', (req, res) => {
    
    drive.free()
        .then(info => {
        console.log(info)
        
    })

    
})

module.exports = router;