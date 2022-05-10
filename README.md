# VScode-Modpack-Runner

***Make sure you have NodeJS installed before using this.***

| Task           | Description                                                                                                                   |
| ---------------|------------------------------------------------------------------------------------------------------------------------------ |
| Start Instance | Runs your modpack.                                                                                                            |
| Setup Instance | Setups the instance.cfg and mmc-pack.json files with given values in the config file to make MultiMC recognize your instance. |
| Clear Instance | Deletes specified folders in config file.                                                                                     |

| Config values    | Description                                                                                         | Task           |
| -----------------|---------------------------------------------------------------------------------------------------- | -------------- |
| mmcPath          | Path/to/your/multimc/executable                                                                     | Start Instance |
| instanceName     | Display name of the instance.                                                                       | Setup Instance |
| mcVersion        | Minecraft version of the instance.                                                                  | Setup Instance |
| forgeVersion     | Forge version of the instance.                                                                      | Setup Instance |
| logType          | Name of the log file to open during startup. Example: **"latest", "debug"** or **null** to disable. | Start Instance |
| foldersToRemove  | A list of folders for the **Clear Instance** task.                                                  | Clear Instance |
