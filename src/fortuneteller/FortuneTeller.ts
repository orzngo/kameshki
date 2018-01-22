import {SpotList} from "./models/spot/SpotList";
import {BuiltInList} from "./models/spot/SpotList";
import {Spot} from "./models/spot/Spot";

export class FortuneTeller {
    list: SpotList = BuiltInList;

    forcast(spotPerIsland: number = 2): SpotList {
        let result: SpotList = {erangel: [], miramar: []};

        const erangelLength = this.list.erangel.length;
        for (let i = 0; i < spotPerIsland; i++) {
            const spot = this.list.erangel[this.getRandomInt(erangelLength)];
            result.erangel.unshift(spot);
        }

        const miramarLength = this.list.miramar.length;
        for (let i = 0; i < spotPerIsland; i++) {
            const spot = this.list.miramar[this.getRandomInt(miramarLength)];
            result.miramar.unshift(spot);
        }

        return result;
    }

    getRandomInt(max: number) {
        return Math.floor(Math.random() * (max + 1));
    }
}