import * as Discord from "discord.js";
import {DiscordConfig} from "./config/DiscordConfig";
import {FortuneTeller} from "../fortuneteller/FortuneTeller";


export class Bot {

    private client: Discord.Client;
    private teller: FortuneTeller;

    constructor(private config: DiscordConfig) {
        this.teller = new FortuneTeller();
        this.client = new Discord.Client();

        this.client.on("ready", () => {
            console.log(`Logged in as ${this.client.user.tag}`);
        });

        this.client.on("message", message => {
            if (message.content === "!ping") {
                message.reply("pong");
            } else if (message.content === "!kame") {
                const result = this.teller.forcast(2);
                message.reply(`\nerangel: [ ${result.erangel[0].name} ] / [ ${result.erangel[1].name} ] \nmiramar: [ ${result.miramar[0].name} ] / [ ${result.miramar[1].name} ]`);
            }
        });

        this.client.login(this.config.token).then((mes) => {
        }).catch((err) => {
            console.log(err);
        });
    }

}