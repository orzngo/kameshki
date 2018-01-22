import {Bot} from "./bot/Bot";
import * as Config from "config";


const bot = new Bot(Config.get("discord"));
