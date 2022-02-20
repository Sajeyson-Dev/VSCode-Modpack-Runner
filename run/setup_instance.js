const fs = require('fs')
const path = require('path')
const config = require('./config.json')

var instance_cfg = 'instance.cfg'
var mmc_pack = 'mmc-pack.json'

fs.writeFile(instance_cfg, `name=${config.instance_name} \nInstanceType=OneSix`, function(error) {
    if (error) {
        console.log(error)
    }
})

var content = {
    components: [],
    "formatVersion": 1
}

content.components.push(
    {
    "important": true,
    "uid": "net.minecraft",
    "version": config.mc_version
    },
    {
        "cachedName": "Forge",
        "cachedRequires": [
            {
                "equals": config.mc_version,
                "uid": "net.minecraft"
            }
        ],
        "cachedVersion": config.forge_version,
        "uid": "net.minecraftforge",
        "version": config.forge_version
    }
)

fs.writeFile(mmc_pack, JSON.stringify(content, null, 4), function(error) {
    if (error) {
        console.log(error)
    }
})
