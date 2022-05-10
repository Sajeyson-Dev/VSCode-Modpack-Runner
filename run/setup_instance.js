const fs = require('fs')
const path = require('path')
const config = require('./config.json')

var instanceCfg = 'instance.cfg'
var mmcPack = 'mmc-pack.json'

fs.writeFile(instanceCfg, `name=${config.instanceName} \nInstanceType=OneSix`, function(error) {
    if (error) throw error
})

var content = {
    components: [],
    "formatVersion": 1
}

content.components.push(
    {
    "important": true,
    "uid": "net.minecraft",
    "version": config.mcVersion
    },
    {
        "cachedName": "Forge",
        "cachedRequires": [
            {
                "equals": config.mcVersion,
                "uid": "net.minecraft"
            }
        ],
        "cachedVersion": config.forgeVersion,
        "uid": "net.minecraftforge",
        "version": config.forgeVersion
    }
)

fs.writeFile(mmcPack, JSON.stringify(content, null, 4), function(error) {
    if (error) throw error
})
