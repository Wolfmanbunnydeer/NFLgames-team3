# NFLgames-team3
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - ModuleJSWeek4Assignment9_welcomeandspaceshipcode_DDITP140_event listenerandloop_carolchang</title>
  <meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="./style.css">

</head>
<body>
<!-- partial:index.partial.html -->
<script>

<style>
header,
div {
  border: solid darkgray medium;
  padding: 2em;
}

button {
  margin: 1em;
}

button {
  padding: 1.1em;
  background-color: pink;
}
html {
    min-height: 100%; /* Look, it's not fixed anymore! */

    display: flex;
    flex-direction: column;
}

body {
    flex-grow: 1;
}

* {
  box-sizing: border-box;
}

.left {
  background-color: #2196F3;
  padding: 20px;
  float: left;
  width: 20%; /* The width is 20%, by default */
}

.main {
  background-color: #f1f1f1;
  padding: 20px;
  float: left;
  width: 60%; /* The width is 60%, by default */
}

.right {
  background-color: #04AA6D;
  padding: 20px;
  float: left;
  width: 20%; /* The width is 20%, by default */
}

/* Use a media query to add a break point at 800px: */
@media screen and (max-width: 800px) {
  .left, .main, .right {
    width: 100%; /* The width is 100%, when the viewport is 800px or smaller */
  }
}

div.example {
  background-color: lightgrey;
  padding: 20px;
}

@media screen and (min-width: 600px) {
  div.example {
    font-size: 80px;
  }
}

@media screen and (max-width: 600px) {
  div.example {
    font-size: 30px;
  }
}

* {
  box-sizing: border-box;
}

.row::after {
  content: "";
  clear: both;
  display: block;
}

[class*="col-"] {
  float: left;
  padding: 15px;
}

html {
  font-family: "Lucida Sans", sans-serif;
}

.header {
  background-color: #9933cc;
  color: #ffffff;
  padding: 15px;
}

.menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu li {
  padding: 8px;
  margin-bottom: 7px;
  background-color: #33b5e5;
  color: #ffffff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.menu li:hover {
  background-color: #0099cc;
}

.aside {
  background-color: #33b5e5;
  padding: 15px;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.footer {
  background-color: #0099cc;
  color: #ffffff;
  text-align: center;
  font-size: 12px;
  padding: 15px;
}
/* For desktop: */
.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}
@media (min-width: 30em) and (max-width: 50em) {
  /* … */
    
}
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}

.tiledbackground{
    background-image: url("https://i.postimg.cc/XNKRmsns/unicorncolor.jpg");
    background-size: 580px;
    width: 1890px;
    height: 2900px;
    border: 1px solid;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  background-color: DodgerBlue;
}
.flex-container > div {
  background-color: #f1f1f1;
  width: 200px;
  margin: 10px;
  text-align: left;
  line-height: 45px;
  font-size: 15px;
}
h2 {
    text-align: left;
    font-size: 25px;
    color: black;
}
.dropbtn {
  background-color: #3498DB;
  color: white;
  padding: 16px;
  font-size: 50px;
  border: none;
  cursor: pointer;
}

.dropbtn:hover, .dropbtn:focus {
  background-color: #2980B9;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {background-color: #ddd;}

.show {display: block;}
}
h3 {
    text-align: center;
    font-size: 55px;
    color: black;
}
</style>



<script>
<header>
  <h1>Assignment Nine</h1>
  <p></p>
</header>
<div id="welcomeDiv">
  <h2>Add Games</h2>
  <p></p>
  <form id="gamesForm">
    </p>
    <select id="Add game">
      <p>Please enter YOUR Games:
        <input type="text" id="games" data-input>
        <button type="button" id="addGameButton">Add Games </button>
        <label data-label></label>
        <li>
          <option value="City"> City</option>
        </li>
        <li>
          <option value="Name">Name</option>
        </li>
        <li>
          <option value="Date">Date
        </li>
        </option>
        <li>
          <option value="Hometeam">Hometeam
        </li>
        </option>

        </li>
        </option>
        <li>
          <option value="Homepoint">Homepoint
        </li>
        </option>
        <li>
          <option value="Awayteam">AwayTeam
        </li>
        </option>
        <li>
          <option value="AwayPoint">AwayPoints
        </li>
        </option>
    </select>
    <div id="gamesOutput"><div class="flex-container">         
    
           <h3> <p>Assignments 9 </p></h3>
   
           
   
                        <div><b>Name:</b>Arizona Cardinal
                            <p>Logo: <img src='https://i.postimg.cc/34NwJV3Y/ARI.jpg' alt='ARI' /></a>
                            </p>
                            <p> Location: Arizona </p>
                            <h2>
                                <p>Final Date : March 15</p>
                                    
                                <p>Away Team :10</p>
                                <p>Home Team: 2</p>
                                <p>Home Points: 5 </p>
                                            
                                <p>Away Points: 8</p>
                                      
                        </div>
                        </h2>

                        <div><b>Name:</b> Atlanta Falcons
                            <p>Logo:
                                <a href='https://postimg.cc/QH1dtpZ9' target='_blank'><img src='https://i.postimg.cc/QH1dtpZ9/ATL.png' border='0' alt='ATL' /></a>
                            </p>
                            <p> Location :Atlanta, GA</p>
                            <h2>
                                  <p>Date : March 15</p>
                                <p>Away Team:10</p
                                <p>Home Team: 2</p>
                                                
                                <p>Home Points: 5 </p>
                                                     
                                <p>Away Points: 8</p>
                                                                  
                        </div>
                        </h2>


                        <div><b>Name:</b> Carolina Panthers
                            <p>Logo:
                                <a href='https://postimg.cc/G9ZpdXVn' target='_blank'><img src='https://i.postimg.cc/G9ZpdXVn/CAR.png' border='0' alt='CAR' /></a>
                            </p>
                            <p>Location: N. or S. Carolinas</p>
                            <h2>
                                  <p>Date : March 15</p>
                                <p>Away Team :10</p>
                                <p>Home Team: 2</p>
                                <p>Home Points: 5 </p>
                                <p>Away Points: 8</p>
                        </div>
                        </h2>


                        <div><b>Name:</b>Chicago Bears
                            <p>Logo:
                                <a href='https://postimg.cc/WtD4BB97' target='_blank'><img src='https://i.postimg.cc/WtD4BB97/CHI.png' border='0' alt='CHI' /></a>
                            </p>
                            <p>Location: Chicago, IL</p>
                            <h2>
                                     <p> Date : March 15</p>
                                <p>Away Team :10</p>
                                <p>Home Team: 2</p>
                                <p>Home Points: 5 </p>
                                <p>Away Points: 8</p>
                        </div>
                        </h2>


                        <div><b>Name:</b>Dallas Cowboys
                            <p>Logo:
                                <a href='https://postimg.cc/8JYzF4CW' target='_blank'><img src='https://i.postimg.cc/8JYzF4CW/DAL.jpg' border='0' alt='DAL' /></a>
                            </p>
                            <p>Location: Dallas, TX</p>
                            <h2>
                                  <p>Date : March 15</p>
                                <p>Away Team:10</p>
                                <p>Home Team: 2</p>
                                <p>Home Points: 5 </p>
                                <p>Away Points: 8</p>
                        </div>
                        </h2>


                        <div><b>Name:</b>Detroit Lions
                            <p>Logo:
                                <a href="https://postimg.cc/zHRXThLQ" target="_blank"><img src="https://i.postimg.cc/zHRXThLQ/DET.jpg" alt="DET" /></a>
                            </p>
                            <p>Location: Detroit, Mi</p>
                            <h2>
                                   <p>Final Date : March 15</p>
                                <p>Away Team:10</p>
                                <p>Home Team: 2</p>
                                <p>Home Points: 5 </p>
                                <p>Away Points: 8</p>
                        </div>
                        </h2>


                        <div><b>Name:</b>Jacksonville Jaguars
                            <p>Logo:
                                <a href="https://postimg.cc/NKGvcTsw" target="_blank"><img src="https://i.postimg.cc/NKGvcTsw/JAX.jpg" alt="JAX" /></a>
                            </p>
                            <p>Location: Jacksonville, FL</p>
                            <h2>
                                  <p>Date : March 15</p>
                                <p>Away Team:10</p>
                                <p>Home Team: 2</p>
                                <p>Home Points: 5 </p>
                                <p>Away Points: 8</p>
                        </div>
                        </h2>


                        <div><b>Name:</b> Green Bay Packers
                            <p> Logo:
                                <a href="https://postimg.cc/jLkChhv3" target="_blank"><img src="https://i.postimg.cc/jLkChhv3/GB.jpg" alt="GB" /></a>
                            </p>
                            <p>Location: Green Bay, WI</p>
                            <h2>
                                    <p>Date : March 15</p>
                                <p>Away Team :10</p>
                                <p>Home Team: 2</p>
                                <p>Home Points: 5 </p>
                                <p>Away Points: 8</p>
                        </div>
                        </h2>

                        <div><b>Name:</b> Los Angeles Rams
                            <p>Logo :
                                <a href="https://postimg.cc/GH9m9yrF" target="_blank"><img src="https://i.postimg.cc/GH9m9yrF/LA.jpg" alt="LA" /></a>
                            </p>
                            <p>Location: Los Angeles, CA</p>
                            <h2>
                                     <p>Final Date : March 15</p>
                                <p>Away Team:10</p>
                                <p>Home Team: 2</p>
                                <p>Home Points: 5 </p>
                                <p>Away Points: 8</p>
                        </div>
                        </h2>


                        <div><b>Name:</b>Minnesota Vikings
                            <p>Logo:
                                <a href="https://postimg.cc/mPhR9M0y" target="_blank"><img src="https://i.postimg.cc/mPhR9M0y/MIN.jpg" alt="MIN" /></a>
                            </p>
                            <h2>
                               <p>Final Date : March 15</p>
                                <p>Home Away :10</p>
                                <p>Home Team: 2</p>
                                <p>Home Points: 5 </p>
                                <p>Away Points: 8</p>
                        </div>
                        </h2>


                        <div><b>Name:</b> New Orleans Saints
                            <p>Logo:
                                <a href="https://postimg.cc/tsrQCTJn" target="_blank"><img src="https://i.postimg.cc/tsrQCTJn/NO.jpg" alt="NO" /></a>
                            </p>
                            <p>Location: New Orleans, LA</p>
                            <h2>
                                  <p>Date : March 15</p>
                                <p>Home Away :10</p>
                                <p>Home Team: 2</p>
                                <p>Home Points: 5 </p>
                                <p>Away Points: 8</p>
                        </div>
                        </h2>

                        <div><b>Name:</b> New York Giants
                            <p>Logo:
                                <a href="https://postimg.cc/ZWdYxzW0" target="_blank"><img src="https://i.postimg.cc/ZWdYxzW0/NYG.jpg" alt="NYG" /></a>
                            </p>
                            <p>Location: New York</p>
                            <h2>
                                     <p>Date : March 15</p>
                                <p>Away Team:10</p>
                                <p>Home Team: 2</p>
                                <p>Home Points: 5 </p>
                                <p>Away Points: 8</p>
                        </div>
                        </h2>

                        <div><b>Name:</b>Denver Broncos
                            <p>Logo:
                                <a href="https://postimg.cc/jDxZ54nZ" target="_blank"><img src="https://i.postimg.cc/jDxZ54nZ/DEN.png" alt="DEN" /></a>
                            </p>
                            <p>Location: Denver, CO</p>
                            <h2>
                                   <p>Final Date : March 15</p>
                                <p>Away Team :10</p>
                                <p>Home Team: 2</p>
                                <p>Home Points: 5 </p>
                                <p>Away Points: 8</p>
                        </div>
                        </h2>

                        <div><b>Name:</b>Houston Texan
                            <p>Logo:
                                <a href="https://postimg.cc/4nHHYVB6" target="_blank"><img src="https://i.postimg.cc/4nHHYVB6/HOU.jpg" alt="HOU" /></a>
                            </p>
                            <p>Location: Houston, TX</p>
                            <h2>
                                      <p> Date : March 15</p>
                                <p>Away Team :10</p>
                                <p>Home Team: 2</p>
                                <p>Home Points: 5 </p>
                                <p>Away Points: 8</p>
                        </div>
                        </h2>


                        <div><b>Name:</b>Miami Dolphins
                            <p>Logo:
                                <a href="https://postimg.cc/DSDhP0hk" target="_blank"><img src="https://i.postimg.cc/DSDhP0hk/MIA.jpg" alt="MIA" /></a>
                            </p>
                            <p>Location: Miami, FL</p>
                            <h2>
                               <p> Date : March 15</p>
                                <p>Away Team : Jacksonville Jaguar</p>
                                <p>Home Team: Dolphins</p>
                                <p>Home Points: 5 </p>
                                <p>Away Points: 8</p>
                        </div>
                        </h2>

                        <div><b>Name:</b>Tennessee Titans
                            <p>Logo:
                                <a href="https://postimg.cc/v4b42jMh" target="_blank"><img src="https://i.postimg.cc/v4b42jMh/TEN.jpg" alt="TEN" /></a>
                            </p>
                            <p>Location: Tennessee</p>
                            <h2>
                                  <p>Date : March 15</p>
                                <p>Away Team : Miami Doplhin</p>
                                <p>Home Team: Titans</p>
                                <p>Home Points: 5 </p>
                                <p>Away Points: 8</p>
                                </div>
                        </h2>


                        <div><b>Name:</b> Buffalo Bills
                            <p>Logo:
                                <a href="https://postimg.cc/3drD1NhN" target="_blank"><img src="https://i.postimg.cc/3drD1NhN/BUF.jpg" alt="BUF" /></a>
                            </p>
                            <p>Location:Buffalo, NY</p>
                            <h2>
                              <p>Date : March 15</p>
                                <p>Away Team :10</p>
                                <p>Home Team: 2</p>
                                <p>Home Points: 5 </p>
                                <p>Away Points: 8</p>
                        </div>
                            </h2>

</button>
                
             
</div>            

</div>


</form>
            </body>

        </html>
        <!-- partial -->
        <script src="./script.js"></script>

        </body>

</html>

</div>
    <section></section>

    </p>
  </form>
</div>
<!-- partial -->
  <script  src="./script.js"></script>

</body>
</html>
