const exec = require('child_process').exec
const path = require('path')
const fs = require('fs')
const config = require('./config.json')

var instance_name = path.basename(path.resolve('./'))
var logType = path.resolve(`./.minecraft/logs/${config.log_type}.log`)

function startInstance(args,  name) {
    exec(args + " -l=" + `"${name}"`)
    console.log("Starting instance: " + name)
}

startInstance(config.mmc_path, instance_name)

if (config.log_type != null) {
    if (fs.existsSync(path.resolve(logType))) {
        exec("code -r " + path.resolve(logType))
    }
    else {
        console.log(`Unable to find log file: ${config.log_type}.log`)
    }
}
