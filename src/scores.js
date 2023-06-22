import { addScore } from "./request.js";
import renderScores from  './leaderboard.js';

const nameInput = document.getElementById('inputName');
const scoreInput = document.getElementById('inputScore');
const form = document.getElementById('form');
const refreshButton = document.getElementById('refreshBtn');

   form.addEventListener('submit', async(event) => {
    event.preventDefault();

    const name = nameInput.value;
    const score = scoreInput.value;
  
    if (name.length > 0 && score.length > 0 ) {
     await addScore(name, score);
       form.reset();
          
        }
    } );

  refreshButton.addEventListener('click', (event) => {
    event.preventDefault();
  renderScores();
  });
  