# VScode-Modpack-Runner

***Make sure you have node.js installed before using this.***

| Task           | Description                                                                                                                   |
| ---------------|------------------------------------------------------------------------------------------------------------------------------ |
| Start Instance | Runs your modpack.                                                                                                            |
| Setup Instance | Setups the instance.cfg and mmc-pack.json files with given values in the config file to make MultiMC recognize your instance. |
| Clear Instance | Deletes specified folders in config file.                                                                                     |

| Config values     | Description                                                                                         | Task           |
| ------------------|---------------------------------------------------------------------------------------------------- | -------------- |
| mmc_path          | Path/to/your/multimc/executable                                                                     | Start Instance |
| instance_name     | Display name of the instance.                                                                       | Setup Instance |
| mc_version        | Minecraft version of the instance.                                                                  | Setup Instance |
| forge_version     | Forge version of the instance.                                                                      | Setup Instance |
| log_type          | Name of the log file to open during startup. Example: **"latest", "debug"** or **null** to disable. | Start Instance |
| folders_to_remove | A list of folder for **'clear_instance'** task.                                                     | Clear Instance |
