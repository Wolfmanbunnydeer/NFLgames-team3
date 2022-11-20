

var tempdate = document.querySelector("date");
  var hometeam = document.querySelector("Hometeam");
  var awayteam = document.querySelector("awayteam");
  var homepoint = document.querySelector("homepoint");
  var awaypoint = document.querySelector(".awaypoint");

  var NFL = document.createElement("game").innerHTML = [
    {     
      thisDate: tempdate,
      AwayTeam: awayteam,
      Hometeam: hometeam,
      Homepoint: homepoint,
      AwayPoint: awaypoint
      }
    ]
    
    
 let el;
    let userInput;
    let input = document.getElementById("date");
 let list = document.getElementById("list");
    let id = 0;
    let nums = [];

    function AddGame() {
      id++;
      el = document.createElement("li");
      el.style.listStyle = "none";
      el.id = id;
      list.appendChild(el);
      el.innerHTML = input.value;
      nums.push(id);
      console.log(nums);
      console.log(el);
      input.value = "";
      input.focus();
    }

    let link;
    let flex;
document.getElementById("Game");
    let mylist = document.getElementById("list");
    let theid = 0;
    let thenums = [];

    function AddGame() {
      id++;
      el = document.createElement("li");
      el.style.listStyle = "none";
      el.id = id;
      list.append(el);
      el.innerHTML = input.value;
     
      nums.push(id);
      console.log(nums);
      console.log(el);
      input.value = "";
      input.focus();
    }
    
    //try another way to add starting with an existing li
    //then create other li dynamically
    // function addEl() {
    //   let dest = document.querySelector("li");
    // }

    function deleteItem() {
      el.remove();
      console.log("Element:" + el + " removed")
      input.focus();
    }
function AddGame()() {
  window.location.assign("https://wolfmanbunnydeer.github.io/NFLgameteam/")
}
 
