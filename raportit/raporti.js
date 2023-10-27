import {kokonaistunnit} from "../data/kokonaistunnit.js";


const tuntisummat = []
for (let i of kokonaistunnit){
    if (i.nimi in tuntisummat) {
        tuntisummat[i.nimi] += i.tunteja
    }
    else{
        tuntisummat[i.nimi] = i.tunteja
    }

}

for (let nimi in tuntisummat) {
    let tunnit = tuntisummat[nimi]
}



