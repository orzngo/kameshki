import * as Discord from "discord.js";
import {DiscordConfig} from "./config/DiscordConfig";


export class Bot {

    private client: Discord.Client;

    constructor(private config: DiscordConfig) {
        this.client = new Discord.Client();

        this.client.on("ready", () => {
            console.log(`Logged in as ${this.client.user.tag}`);
        });

        this.client.on("message", message => {
            if (message.content === "ping") {
                message.reply("ping");
            }

            console.log(message);
        });

        this.client.login(this.config.token).then((mes) => {
            console.log(mes);
        }).catch((err) => {
            console.log(err);
        });
    }

}