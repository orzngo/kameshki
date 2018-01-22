import {Bot} from "./bot/Bot";
import * as dotenv from "dotenv";
import * as Config from "config";

dotenv.config();

const bot = new Bot({token: <string>process.env.TOKEN});
