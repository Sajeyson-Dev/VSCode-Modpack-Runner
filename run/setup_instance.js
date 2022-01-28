const fs = require('fs')
const path = require('path')

var settings = path.resolve('./settings')
var files = ['mmc-pack.json', 'instance.cfg']

function copy(src, dest) {
    fs.copyFile(src, dest, (error)=> {
        if (error) throw error
    })
}

if (!fs.existsSync(settings)) {
    fs.mkdir(settings, function(error) {
        if (error) throw error
    })
}

if (fs.existsSync(settings)) {
    for (let file in files) {
        if(fs.existsSync(`${settings}/${files[file]}`)) {
            copy(`${settings}/${files[file]}`, `./${files[file]}`)
        }
    }
}
