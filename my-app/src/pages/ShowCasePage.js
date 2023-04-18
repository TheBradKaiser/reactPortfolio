
import React from 'react';
import   {Link} from "react-router-dom";

function ShowCasePage() {
    return <div><h1 class='h1-title'>Gander apoun my scrappy wares!</h1>;
  <div class='div-container'>
    <ul class='div-container-2'>
        <li>
    <Link to="https://github.com/TheBradKaiser/spotify-api-test">An API that returns your Spotify top 50 and autoplays Rick Astley's "Never gonna give you up"</Link>
    </li>
    <li>
    <Link to="https://github.com/TheBradKaiser/cookieClicker">A little cookie clicker made while exploring Svelte</Link>
    </li>
    <li>
    <Link to="https://github.com/TheBradKaiser/Pathfinding-app">A path finding application made using JQuery</Link> <b><Link to="https://codepen.io/raptoring/pen/bGvZaWK">(Demo)</Link></b>
    </li>
    </ul>
  </div>


  </div>
  }
  export default ShowCasePage;