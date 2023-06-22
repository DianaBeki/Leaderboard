import { getScores } from './request.js';

const renderScores = async () => {
    const scores = await getScores();
  const nameScoresElement = document.getElementById('nameScores');
  nameScoresElement.innerHTML = '';

  scores.result.forEach((score) => {
    const scoreElement = document.createElement('p');
    scoreElement.textContent = `${score.user}: ${score.score}`;
    nameScoresElement.appendChild(scoreElement);
  });
};

export default renderScores; 