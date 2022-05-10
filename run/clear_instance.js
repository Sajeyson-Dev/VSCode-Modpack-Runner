const fs = require('fs')
const path = require('path')
const config = require('./config.json')

var folders = config.foldersToRemove

for (let folder in folders) {
    var to_delete = path.resolve('.minecraft/' + folders[folder])
    if (fs.existsSync(to_delete)) {
        fs.rm(to_delete, { recursive: true, force: true }, function(error) {
            if (error) throw error
        })
    }
}
