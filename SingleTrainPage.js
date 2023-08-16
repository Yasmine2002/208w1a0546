// SingleTrainPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import { fetchSingleTrain } from './api'; // Make sure you have an appropriate API function

const SingleTrainPage = () => {
  const { trainId } = useParams();
  const [train, setTrain] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSingleTrain(trainId) // Use an appropriate API function to fetch a single train by ID
      .then(data => {
        setTrain(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching single train:', error);
        setLoading(false);
      });
  }, [trainId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Typography variant="h4">Train Details</Typography>
      <div>
        <h2>{train.name}</h2>
        <p>Departure: {train.departureTime}</p>
        <p>Arrival: {train.arrivalTime}</p>
        <p>Price: {train.price}</p>
        <p>Seat Availability: {train.seatsAvailable}</p>
        {/* Display other train details */}
      </div>
    </Container>
  );
};

export default SingleTrainPage;
