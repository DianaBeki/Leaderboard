import './style.css';
import refreshScores from './leaderboard.js';

// Add event listener to the refresh button
const refreshButton = document.getElementById('refreshBtn');
refreshButton.addEventListener('click', () => {
  refreshScores();
});

// Initial rendering of scores
refreshScores();
