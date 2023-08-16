// AllTrainsPage.js
import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { fetchAllTrains } from './api'; // Make sure you have an appropriate API function

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndUpdateData = () => {
      fetchAllTrains()
        .then(data => {
          setTrains(data);
        })
        .catch(error => {
          console.error('Error fetching trains:', error);
        });
    };

    fetchAndUpdateData();

    const interval = setInterval(fetchAndUpdateData, 60000); // Update every minute

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    fetchAllTrains()
      .then(data => {
        setTrains(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching trains:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Typography variant="h4">All Trains Schedule</Typography>
      <Grid container spacing={2}>
        {trains.map(train => (
          <Grid item key={train.id} xs={12} sm={6} md={4}>
            <div>
              <h2>{train.name}</h2>
              <p>Departure: {train.departureTime}</p>
              <p>Arrival: {train.arrivalTime}</p>
              <p>Price: {train.price}</p>
              <p>Seat Availability: {train.seatsAvailable}</p>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllTrainsPage;
