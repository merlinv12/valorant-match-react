function createFakeMatch() {
  let match = {};
  match.greenTeamRoundWins = 0;
  match.redTeamRoundWins = 0;
  match.rounds = [];
  for (let i = 0; i < 26; i++) {
    if (match.greenTeamRoundWins === 13 || match.redTeamRoundWins === 13) break;
    let round = {};
    round.roundNum = i + 1;
    generateRandom(2) === 1
      ? (round.roundVictory = "green")
      : (round.roundVictory = "red");
    round.roundVictory === "green"
      ? match.greenTeamRoundWins++
      : match.redTeamRoundWins++;
    round.resultCondition = ["Elimination", "Defuse", "Spike", "Time"][
      generateRandom(4)
    ];
    round.players = [];
    for (let j = 1; j < 11; j++) {
      let player = {};
      player.playerID = j;
      player.agent = ["Sova", "Raze", "Sage", "Breach", "Jett"][
        generateRandom(5)
      ];
      player.playerName = "player" + j;
      player.score = generateRandom(100);
      player.kills = generateRandom(2);
      player.assists = generateRandom(2);
      player.econBank = Math.floor(generateRandom(9000) / 100) * 100;
      player.econLoadout = Math.floor(generateRandom(6000) / 100) * 100;
      player.equip = {
        gun: ["Classic", "Ghost", "Phantom", "Vandal"][generateRandom(4)],
        shield: ["Light Shields", "Heavy Shields"][generateRandom(2)],
      };
      round.players.push(player);
    }
    round.greenEcon = round.players.reduce((total, player) => {
      if (player.playerID < 6) {
        total += player.econLoadout;
      }
      return total;
    }, 0);
    round.redEcon = round.players.reduce((total, player) => {
      if (player.playerID >= 6) {
        total += player.econLoadout;
      }
      return total;
    }, 0);
    round.events = [];
    match.rounds.push(round);
  }
  return match;
}

function generateRandom(max) {
  return Math.floor(Math.random() * max);
}

let fakeData = createFakeMatch();
export default fakeData;
