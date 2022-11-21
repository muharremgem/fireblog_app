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

import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function RecipeReviewCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"></Avatar>
        }
        action={<IconButton aria-label="settings"></IconButton>}
        title="Muharrem Gem"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://hips.hearstapps.com/hmg-prod/images/2023-bmw-z4-108-1663892711.jpg?crop=0.641xw:0.721xh;0.280xw,0.180xh&resize=640:*"
        alt="bmw"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
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
