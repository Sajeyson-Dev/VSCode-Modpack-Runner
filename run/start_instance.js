const exec = require('child_process').exec
const path = require('path')
const fs = require('fs')
const config = require('./config.json')

var instanceName = path.basename(path.resolve('./'))

function startInstance(mmc, instance) {
    exec(mmc + " -l=" + `"${instance}"`)
    console.log('Starting instance: ' + instance)
}

startInstance(config.mmcPath, instanceName)

if (config.logType != null) {
    var folderType1 = path.resolve(`minecraft/logs/${config.log_type}.log`)
    var folderType2 = path.resolve(`.minecraft/logs/${config.log_type}.log`)

    if (fs.existsSync(folderType1)) {
        exec("code -r " + folderType1)
    }

    if (fs.existsSync(folderType2)) {
        exec("code -r " + folderType2)
    }

    if (!fs.existsSync(folderType1, folderType2)) {
        console.log(`Unable to find log file: ${config.log_type}.log`)
    }
}
