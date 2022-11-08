//Following codes are for Games

document.getElementById("addGameButton").addEventListener("click", myFunction);

function myFunction() {
  let myGames = document.getElementById("games").value;

  // create NFL = document.createElement('NFL').innerHTML;
  var NFL= document.createElement("addGamesButton");
  NFL.innerHTML =
  const NFL  = ([
    {
      City: "Arizona",
      Name: "Arizona Cardinal",
      Date: "March 7",
      AwayTeam: "Falcon",
      Hometeam: "Cardinals",
      Homepoint: "78",
      AwayPoint: "45",
  },
  {    
    City: "Atlanta",
      Name: "Falcons",
      Date: "March 7",
      AwayTeam: "Minnesota Vikings",
      Hometeam: "Falcons",
      Homepoint: "23",
      AwayPoint: "8",
},
  {
      City: "N/S Carolinas",
      Name: "Carolina Panther",
      Date: "March 7",
      AwayTeam: "Minnesota Vikings",
      Hometeam: "Panther",
      Homepoint: "45",
      AwayPoint: "8",
  },
  {
      City: "Chicago",
      Name: "Chicago Bears",
      Date: "March 7",
      AwayTeam: "Dallas Cowboys",
      Hometeam: "Chicago Bears",
      Homepoint: "78",
      AwayPoint: "8",
},
  {
      City: "Dallas",
      Name: "Dallas Cowboys",
      Date: "March 7",
      AwayTeam: "Chicago Bears",
      Hometeam: "Dallas Cowboys",
      Homepoint: "90",
      AwayPoint: "87",
  },
  { 
      City: "Detroits",
      Name: "Detroit Lions",
      Date: "March 7",
      AwayTeam: "Chicago Bears",
      Hometeam: "Detroit Lions",
      Homepoint: "90",
      AwayPoint: "87",
},
  { 
      City: "Jacksonville",
      Name: "Jacksonville Jaguars",
      Date: "March 7",
      AwayTeam: "Chicago Bears",
      Hometeam: "Jacksonville Jaguars",
      Homepoint: "90",
      AwayPoint: "87",
   },
  {   
        City: "GreenBay",
      Name: "Green Bay Packers",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "Green Bay Packers",
      Homepoint: "90",
      AwayPoint: "87",
},
  {
      City: " Los Angeles",
      Name: " Los Angeles Rams",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: " Los Angeles Rams",
      Homepoint: "90",
      AwayPoint: "87",
},
  {
      City: " Los Angeles",
      Name: " Los Angeles Rams",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: " Los Angeles Rams",
      Homepoint: "90",
      AwayPoint: "87",
      imgurl: "https://i.postimg.cc/v4b42jMh/TEN.jpg",
 },
  {
      City: "Minnesota",
      Name: "Minnesota Vikings",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "Minnesota",
      Homepoint: "90",
      AwayPoint: "87",
},
  {
      City: "New Orleans",
      Name: "New Orleans Saints",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "New Orleans Saints",
      Homepoint: "90",
      AwayPoint: "87",
      imgurl: "https://i.postimg.cc/v4b42jMh/TEN.jpg",
},
  {
      City: "New York",
      Name: "New York Giants",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "New York Giants",
      Homepoint: "90",
      AwayPoint: "87",
  },
  {
      City: "Denver",
      Name: "Denver Broncos",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "Denver Broncos",
      Homepoint: "90",
      AwayPoint: "87",
      imgurl: "https://i.postimg.cc/v4b42jMh/TEN.jpg",
},
  {
      City: "Houston ",
      Name: "Houston Texan",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "Houston Texan",
      Homepoint: "90",
      AwayPoint: "87",
      imgurl: "https://i.postimg.cc/v4b42jMh/TEN.jpg",
},
  {     
    City: "Miami ",
      Name: " Miami Dolphins ",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: " Miami Dolphins ",
      Homepoint: "90",
      AwayPoint: "87",
},
  {
      City: "Tennessee",
      Name: " Tennessee Titans",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: " Tennessee Titans",
      Homepoint: "90",
      AwayPoint: "87",
      imgurl: "https://i.postimg.cc/v4b42jMh/TEN.jpg",
 },
  {
      City: "Buffalo",
      Name: " Buffalo Bills",
      Date: "March 7",
      AwayTeam: "Miami Dolphins",
      Hometeam: "Buffalo Bills",
      Homepoint: "90",
      AwayPoint: "87",
      imgurl: "https://i.postimg.cc/3drD1NhN/BUF.jpg",
    },
  ]);
  
  // Populating Team Select Options
const teamSelectOptions = document.getElementById('Add game');
nflTeams.forEach((team) => {
    const teamOption = document.createElement('option');
    teamOption.textContent = team.name;
    teamOption.value = team.name;
    teamSelectOptions.appendChild(teamOption);
})

// Populating Team Cards
const container = document.getElementById("flex-container");
nflTeams.forEach((team) => {
    const teamCard = document.createElement('div');
    teamCard.id = `team-${team.name}`;
    teamCard.classList.add('nfl-team-card');

    const teamName = document.createElement('h2');
    teamName.textContent = team.name;
    teamName.style.backgroundImage = `linear-gradient(to right, ${team.cPrim} , ${team.cSecn})`;

    const teamLocation = document.createElement('p');
    teamLocation.classList.add('nfl-team-location');
    teamLocation.textContent = `LOCATION: ${team.city.toUpperCase()}`;


    const wins = document.createElement('p');
    wins.id = `Name-${team.name}`
    wins.textContent = `wins: ${team.wins}`;

    const ties = document.createElement('p');
    ties.id = `TIES-${team.name}`
    ties.textContent = `TIES: ${team.ties}`;

    const losses = document.createElement('p');
    losses.id = `LOSSES-${team.name}`
    losses.textContent = `LOSSES: ${team.losses}`;

    //Appending to stats
    statsContainer.append(Names, city, HomePoint, Hometeam, Awayteam, AwayPoint);

    //Img container
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('flex-container');
    const img = document.createElement('img');
    img.src = team.imgurl;
    imageContainer.appendChild(img);
    
    // Appending all elements to card element
    teamCard.append(
        teamName,
        teamLocation,
        imageContainer
    );

    // Appending team card to container
    container.appendChild(teamCard);
});  
  
  let txt = "";
  document.getElementById("demo").innerHTML = txt;
  let text = "<div>flex container";
  for (let i = 20; i < NFL.length; i++) {
    text += NFL[i] + "<br>";
  }
  myGames = myGames + "";
}
 Name = Name + "";
  Date = Date + "";
  City = City + "";
 Hometeam = Hometeam + "";
 HomeAway = HomeAway + "";
  Awayteam = Awayteam + "";
  AwayPoint = AwayPoint + "";

  //Insert data for create Element fopr flexbox.
  document.getElementById("gamesOutput").innerHTML =
    "myGames" +
    myGames +
    "" +
    "<br>Name: " +
    Name +
    " " +
    "<br>City: " +
    City +
    " " +
    "<br>Date: " +
    Hometeam +
    " " +
    "<br>Hometeam:" +
   Homepoint +
    " " +
    "<br>Homepoint:" +
    Awayteam +
    " " +
    "<br>Awayteam:" +
    " " +
    AwayPoint +
    "<br>AwayPoint:" +
    "  " +
    ".";
}
