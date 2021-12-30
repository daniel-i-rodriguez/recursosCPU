var osu = require('node-os-utils')
var cpu = osu.cpu
const {Router} = require('express');
const router = Router();





router.get('/promcpu', (req, res) => {
    
    var info = cpu.average()

    res.json(info);
})



module.exports = router;