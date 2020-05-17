const team = {
    _players: [{
      firsname: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    },
      {
      firsname: 'Lisa',
      lastName: 'Leslie',
      age: 44
      },
      {
      firsname: 'Bugs',
      lastName: 'Bunny',
      age: 76
      },
    ],
    _games: [{
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Wolves',
      teamPoints: 23,
      opponentPoints: 20
    },
    {
      opponent: 'Lions',
      teamPoints: 15,
      opponentPoints: 18
    },
    ],
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
  
      this.players.push(player)
    },
    addGame(oppName, points, oppPoints) {
      let games = {
        oppName: oppName,
        points: points,
        oppPoints: oppPoints
      };
      this.games.push(games);
    }
  }
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  // console.log(team.players);
  
  team.addGame('Titans', 100, 98);
  team.addGame('Wolvesss', 30, 50);
  team.addGame('Tiger', 56, 90);
  
  console.log(team.games);
  