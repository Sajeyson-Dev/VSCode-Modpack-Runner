import fs from 'fs';
import path from 'path';
import process from 'child_process';

import config from './config.json' assert { type: 'json' };

const instanceCfg = 'instance.cfg';
const mmcPack = 'mmc-pack.json';

const multiMc = config.mmcPath;
const instance = path.basename(path.resolve('./'));
const mods = path.resolve('./.minecraft/mods');

const instanceName = config.instanceName;
const mcVersion = config.mcVersion;
const forgeVerion = config.forgeVersion;
const curseForge = config.curseForgeFolder;
const modpackData = config.modpackFolders;

var json = {
    components: [
        {
            'important': true,
            'uid': 'net.minecraft',
            'version': mcVersion
        },
        {
            'cachedName': 'Forge',
            'cachedRequires': [
                {
                    'equals': mcVersion,
                    'uid': 'net.minecraft'
                }
            ],
            'cachedVersion': forgeVerion,
            'uid': 'net.minecraftforge',
            'version': forgeVerion
        }
    ],
    'formatVersion': 1
}

export function makeInstance() {
    console.log('Writing data...');
    fs.writeFileSync(instanceCfg, `name=${instanceName} \nInstanceType=OneSix`);
    fs.writeFileSync(mmcPack, JSON.stringify(json, null, 4));
    if (!fs.existsSync(path.resolve('./.minecraft'))) fs.mkdirSync('./.minecraft');
    console.log('Done!');
}

export function startInstance() {
    if (multiMc != '') {
        process.exec(multiMc + ' -l=' + `"${instance}"`);
        console.log('Starting instance: ' + instance);
    } else console.log('Unable to find MultiMC executable.');
}

export function linkMods() {
    if (curseForge != '') {
        fs.rmdirSync(mods);
        fs.symlinkSync(path.resolve(curseForge + '/Instances/' + instance + '/mods'), mods);
    } else console.log('Unable to find CurseForge folder.');
}

export function pullModpackData() {
    if (curseForge != '' && modpackData != '') {
        modpackData.forEach(folder => {
            var input = path.resolve('./.minecraft/' + folder);
            var out = path.resolve(curseForge + '/Instances/' + instance + '/' + folder);
            if (fs.existsSync(out)) fs.rmdirSync(out);
            if (fs.existsSync(out)) fs.unlinkSync(out);
            if (fs.existsSync(input)) fs.symlinkSync(input, out);
        });
    } else console.log('Missing config values!');
}
