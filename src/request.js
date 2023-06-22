const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const id = 'Dee12';
// Function to add a new score to the leaderboard via the API
export const addScore = async (user, score) => {
     
      const response = await fetch(`${url}games/${id}/scores/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user, score }),
      });
      const data = await response.json();
      return data;
  };

// Function to retrieve the leaderboard scores from the API
 export const getScores = async () => {

      const response = await fetch(`${url}games/${id}/scores/`); // Replace 'API_ENDPOINT' with the actual API endpoint URL
      const data = await response.json();
      return data;
    } 
  