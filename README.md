# VSCode-Modpack-Runner

***Make sure you have NodeJS installed before using this.***

| Task              | Description                                                                                                                   |
| ------------------|------------------------------------------------------------------------------------------------------------------------------ |
| Start Instance    | Runs your modpack.                                                                                                            |
| Setup Instance    | Setups the instance.cfg and mmc-pack.json files with given values in the config file to make MultiMC recognize your instance. |
| Link Mods         | Links mods from CurseForge instance that has the same name.                                                                   |
| Pull Modpack Data | Links modpack folders to CurseForge profile for exporting.                                                                    |

| Config values    | Description                                                                                         | Task              |
| -----------------|---------------------------------------------------------------------------------------------------- | ----------------- |
| mmcPath          | Path/to/your/multimc/executable                                                                     | Start Instance    |
| instanceName     | Display name of the instance.                                                                       | Setup Instance    |
| mcVersion        | Minecraft version of the instance.                                                                  | Setup Instance    |
| forgeVersion     | Forge version of the instance.                                                                      | Setup Instance    |
| curseForgeFolder | Path/to/your/curseforge/folder                                                                      | Link Mods         | 
| modpackFolders   | List of folders for Pull Modpack Data task.                                                         | Pull Modpack Data |
