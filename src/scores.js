// Simulated data representing the leaderboard scores
const scores = [
  { name: 'John', score: 100 },
  { name: 'Jane', score: 20 },
  { name: 'Bob', score: 50 },
  { name: 'Alice', score: 78 },
  { name: 'Mike', score: 125 },
  { name: 'Sarah', score: 77 },
  { name: 'Tom', score: 42 },
];

// Function to retrieve the leaderboard scores
export const getScores = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve([...scores]); // Return a copy of scores to avoid direct modification
  }, 1000);
});

// Function to add a new score to the leaderboard
export const addScore = (name, score) => new Promise((resolve) => {
  setTimeout(() => {
    scores.push({ name, score });
    resolve();
  }, 500);
});
