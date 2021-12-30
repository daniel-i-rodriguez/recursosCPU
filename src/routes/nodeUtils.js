var osu = require('node-os-utils')
var cpu = osu.cpu
const {Router} = require('express');
const router = Router();

router.get('/cpu', (req, res) => {
    
    var count = cpu.count() // 8

    cpu.usage()
    .then(cpuPercentage => {
        //console.log(cpuPercentage) // 10.38
        res.json(cpuPercentage);
    })

    var osCmd = osu.osCmd

    osCmd.whoami()
    .then(userName => {
        //console.log(userName) // admin
        res.json(userName)
    })

    const data = {
        //"name": userName,
        "porcentageCPU": cpuPercentage,
        "count": count
    }

    //res.json(data);
})



module.exports = router;