import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

export default function RecipeReviewCard({ data }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{ maxWidth: 345 }}
      onClick={() => navigate(`/posts/${data.userId}`, { state: data })}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"></Avatar>
        }
        action={<IconButton aria-label="settings"></IconButton>}
        title={data.username}
        subheader={data.logDate}
      />
      <CardMedia component="img" height="194" image={data.image} alt="bmw" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data.textArea}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share"></IconButton>
      </CardActions>
    </Card>
  );
}
