  const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
  const team = players;

  console.log(players, team);

  // team[3] = "Lux";

  const team2 = players.slice();

  const team3 = [].concat(players);
  const team5 = Array.from(players);

  const wes = {
    name: "Wes Bos",
    age: 80,
    social: {
      twitter: "@wesbos",
      facebook: "wesbos.developer"
    }
  };

  const cap2 = Object.assign({}, wes, {number:99, age: 12});
  console.log(cap2);
