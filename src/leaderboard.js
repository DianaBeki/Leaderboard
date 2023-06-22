import { getScores, addScore } from './scores.js';

const renderScores = (scores) => {
  const nameScoresElement = document.getElementById('nameScores');
  nameScoresElement.innerHTML = '';

  scores.forEach((score) => {
    const scoreElement = document.createElement('p');
    scoreElement.textContent = `${score.name}: ${score.score}`;
    nameScoresElement.appendChild(scoreElement);
  });
};

const refreshScores = () => {
  getScores()
    .then((updatedScores) => {
      renderScores(updatedScores);
    })
    .catch((error) => (`Error retrieving score: ${error}`));
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  const nameInput = document.getElementById('inputName');
  const scoreInput = document.getElementById('inputScore');

  const name = nameInput.value.trim();
  const score = parseInt(scoreInput.value.trim(), 10);

  if (name && !Number.isNaN(score)) {
    addScore(name, score)
      .then(() => {
        nameInput.value = '';
        scoreInput.value = '';
        refreshScores();
      })
      .catch((error) => (`Error adding score: ${error}`));
  }
};

const formElement = document.getElementById('form');
formElement.addEventListener('submit', handleFormSubmit);

export default refreshScores();
