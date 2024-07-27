import React from "react";
import {
  Card as MuiCard,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const Card = ({ id, name, age }) => {
  return (
    <MuiCard sx={{ maxWidth: 345 }}>
      {/* <CardMedia component="img" height="140" /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {age}
        </Typography>
      </CardContent>
      <br />
    </MuiCard>
  );
};

export default Card;
