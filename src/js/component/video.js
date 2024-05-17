import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const VideoCard = () => {
  return (
    <Card style={{ maxWidth: 600, margin: "20px auto" }}>
      <CardMedia>
        <video autoPlay width="100%" controls>
          <source src="../../img/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </CardMedia>
      <CardContent>
        <Typography variant="h6" component="div">
          Video Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Video description goes here. This is a sample video inside a card.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
