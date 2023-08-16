// src/api.js
const API_BASE_URL = 'https://api.johndoerailways.com';

export const fetchAllTrains = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/trains`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching trains:', error);
    throw error;
  }
};

// Add more API functions as needed
