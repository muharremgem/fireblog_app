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
import Layout from "../components/Layout";
import { useLocation } from "react-router-dom";

const Details = () => {
  const { state: details } = useLocation();

  return (
    <Layout>
      <div className="">
        <Card sx={{ maxWidth: "90vw" }} className="mx-auto ">
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"></Avatar>
            }
            action={<IconButton aria-label="settings"></IconButton>}
            title={details.username}
            subheader={details.logDate}
          />
          <CardMedia
            component="img"
            height="194"
            image={details.image}
            alt="bmw"
          />
          <Typography
            sx={{ textAlign: "center", mt: "1.5rem", fontSize: "2rem" }}
          >
            {details.title}
          </Typography>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {details.textArea}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share"></IconButton>
          </CardActions>
        </Card>
      </div>
    </Layout>
  );
};

export default Details;
