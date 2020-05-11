// let fakeData = {
//     "matchID": 1,
//     "greenTeamRoundWins": 12,
//     "redTeamRoundWins": 13,
//     "map": "Bind",
//     "rounds": [
//         {
//             "roundId": "asdf123-UID",
//             "roundNum": 1,
//             "roundVictory": "green",
//             "resultCondition": "Elimination",
//             "greenEcon": 700,
//             "redEcon":1000,
//             "players": [
//                 {
//                     "playerID": 1112,
//                     "score": 52,
//                     "kills": 1,
//                     "assists": 1,
//                     "econBank": 700,
//                     "econLoadout": 100,
//                     "dmg": 0,
//                     "equip": {
//                         "gun": "Classic",
//                         "shield": "Light Shields"
//                     }
//                 }
//             ],
//             "events": []
//         },
//         {
//             "roundId": "asdf123-UID",
//             "roundNum": 2,
//             "roundVictory": "green",
//             "resultCondition": "Elimination",
//             "greenEcon": 2000,
//             "redEcon": 7000,
//             "players": [
//                 {
//                     "playerID": 1112,
//                     "score": 52,
//                     "kills": 1,
//                     "assists": 1,
//                     "econBank": 700,
//                     "econLoadout": 100,
//                     "dmg": 0,
//                     "equip": {
//                         "gun": "Classic",
//                         "shield": "Light Shields"
//                     }
//                 }
//             ],
//             "events": []
//         }
//     ]
// }

// export default fakeData;



function createFakeMatch(){
    let match = {};
    match.greenTeamRoundWins = 0;
    match.redTeamRoundWins = 0;
    match.rounds = [];
    for (let i = 0; i < 26; i++){
        if (match.greenTeamRoundWins === 13 || match.redTeamRoundWins === 13) break;
        let round = {};
        round.roundNum = i+1;
        Math.floor(Math.random() * 2 ) === 1 ? round.roundVictory = "green" : round.roundVictory = 'red';
        round.roundVictory === 'green' ? match.greenTeamRoundWins++ : match.redTeamRoundWins++;
        round.resultCondition = ['Elimination', 'Defuse', 'Spike', 'Time'][Math.floor(Math.random() * 4)]
        round.players = [];
        for (let j = 1; j < 11; j++){
            let player = {};
            player.playerID = j;
            player.agent = "Sova"
            player.playerName = "player"+j
            player.score = Math.floor(Math.random() * 100)
            player.kills = Math.floor(Math.random() * 2)
            player.assists = Math.floor(Math.random() * 2)
            player.econBank = Math.floor((Math.random() * 12000) / 100) * 100;
            player.econLoadout = Math.floor((Math.random() * 6000) / 100) * 100;
            player.equip = {
                "gun": "Classic",
                "shield": "Light Shields"
            }
            round.players.push(player)
        }
        round.greenEcon = round.players.reduce((total, player) => {
            if (player.playerID < 6 ){
                total+= player.econLoadout
            }
            return total;
        },0)
        round.redEcon = round.players.reduce((total, player) => {
            if (player.playerID >= 6 ){
                total+= player.econLoadout
            }
            return total;
        },0)
        round.events = [];
        match.rounds.push(round)
    }
    return match;
}

let fakeData = createFakeMatch();
export default fakeData;