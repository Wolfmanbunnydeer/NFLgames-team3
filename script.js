//Following codes are for Games

document.getElementById("addGameButton").addEventListener("click", myFunction);

function myFunction() {
  let myGames = document.getElementById("games").value;

  // var NFL = document.createElement('NFL').value
  var NFL = document.createElement("addGamesButton");
  NFL.innerHTML = [
    {
      City: "Arizona",
      Name: "Arizona Cardinal",
      Date: "March 7",
      AwayTeam: "Falcon",
      Hometeam: "Cardinals",
      Homepoint: "78",
      AwayPoint: "45",

      City: "Atlanta",
      Name: "Falcons",
      Date: "March 7",
      AwayTeam: "Minnesota Vikings",
      Hometeam: "Falcons",
      Homepoint: "23",
      AwayPoint: "8",

      City: "N/S Carolinas",
      Name: "Carolina Panther",
      Date: "March 7",
      AwayTeam: "Minnesota Vikings",
      Hometeam: "Panther",
      Homepoint: "45",
      AwayPoint: "8",

      City: "Chicago",
      Name: "Chicago Bears",
      Date: "March 7",
      AwayTeam: "Dallas Cowboys",
      Hometeam: "Chicago Bears",
      Homepoint: "78",
      AwayPoint: "8",

      City: "Dallas",
      Name: "Dallas Cowboys",
      Date: "March 7",
      AwayTeam: "Chicago Bears",
      Hometeam: "Dallas Cowboys",
      Homepoint: "90",
      AwayPoint: "87",

      City: "Detroits",
      Name: "Detroit Lions",
      Date: "March 7",
      AwayTeam: "Chicago Bears",
      Hometeam: "Detroit Lions",
      Homepoint: "90",
      AwayPoint: "87",

      City: "Jacksonville",
      Name: "Jacksonville Jaguars",
      Date: "March 7",
      AwayTeam: "Chicago Bears",
      Hometeam: "Jacksonville Jaguars",
      Homepoint: "90",
      AwayPoint: "87",

      City: "GreenBay",
      Name: "Green Bay Packers",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "Green Bay Packers",
      Homepoint: "90",
      AwayPoint: "87",

      City: " Los Angeles",
      Name: " Los Angeles Rams",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: " Los Angeles Rams",
      Homepoint: "90",
      AwayPoint: "87",

      City: " Los Angeles",
      Name: " Los Angeles Rams",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: " Los Angeles Rams",
      Homepoint: "90",
      AwayPoint: "87",
      imgurl: "https://i.postimg.cc/v4b42jMh/TEN.jpg",

      City: "Minnesota",
      Name: "Minnesota Vikings",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "Minnesota",
      Homepoint: "90",
      AwayPoint: "87",

      City: "New Orleans",
      Name: "New Orleans Saints",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "New Orleans Saints",
      Homepoint: "90",
      AwayPoint: "87",
      imgurl: "https://i.postimg.cc/v4b42jMh/TEN.jpg",

      City: "New York",
      Name: "New York Giants",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "New York Giants",
      Homepoint: "90",
      AwayPoint: "87",

      City: "Denver",
      Name: "Denver Broncos",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "Denver Broncos",
      Homepoint: "90",
      AwayPoint: "87",
      imgurl: "https://i.postimg.cc/v4b42jMh/TEN.jpg",

      City: "Houston ",
      Name: "Houston Texan",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "Houston Texan",
      Homepoint: "90",
      AwayPoint: "87",
      imgurl: "https://i.postimg.cc/v4b42jMh/TEN.jpg",

      City: "Miami ",
      Name: " Miami Dolphins ",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: " Miami Dolphins ",
      Homepoint: "90",
      AwayPoint: "87",

      City: "Tennessee",
      Name: " Tennessee Titans",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: " Tennessee Titans",
      Homepoint: "90",
      AwayPoint: "87",
      imgurl: "https://i.postimg.cc/v4b42jMh/TEN.jpg",

      City: "Buffalo",
      Name: " Buffalo Bills",
      Date: "March 7",
      AwayTeam: "Miami Dolphins",
      Hometeam: "Buffalo Bills",
      Homepoint: "90",
      AwayPoint: "87",
      imgurl: "https://i.postimg.cc/3drD1NhN/BUF.jpg"
    }
  ];
  let txt = "";
  document.getElementById("demo").innerHTML = txt;
  let text = "<div>flex container";
  for (let i = 20; i < NFL.length; i++) {
    text += NFL[i] + "<br>";
  }
  myGames = myGames + "";
  NFL.Name = NFL.Name + "";
  NFL.Date = NFL.Date + "";
  NFL.City = NFL.City + "";
  NFL.Hometeam = NFL.Hometeam + "";
  NFL.HomeAway = NFL.HomeAway + "";
  NFL.Awayteam = NFL.Awayteam + "";
  NFL.AwayPoint = NFL.AwayPoint + "";

  //Insert data for create Element fopr flexbox.
  document.getElementById("gamesOutput").innerHTML =
    "<br>myGames" +
    myGames +
    "" +
    "<br>Name: " +
    NFL.Name +
    " " +
    "<br>City: " +
    NFL.City +
    " " +
    "<br>Date: " +
    NFL.Hometeam +
    " " +
    "<br>Hometeam:" +
    NFL.Homepoint +
    " " +
    "<br>Homepoint:" +
    NFL.Awayteam +
    " " +
    "<br>Awayteam:" +
    " " +
    NFL.AwayPoint +
    "<br>AwayPoint:" +
    "  " +
    ".";
}
