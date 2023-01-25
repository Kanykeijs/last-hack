import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useAuth } from "../../contexts/authContext";
import { ADMIN } from "../../helpers/consts";

import { useProducts } from "../../contexts/productsContext";
import { useNavigate } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function ChildrenCard({ item }) {
  const navigate = useNavigate();

  const { deleteChildren } = useProducts();
  const {
    user: { email },
  } = useAuth();

  return (
    <Card sx={{ maxWidth: 345,}}>
      <CardMedia
        sx={{ height: 140, cursor: "pointer" }}
        image={item.picture}
        title="green iguana"
        onClick={() => navigate(`/deti/${item.id}`)}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.first_name}
        </Typography>
        <Typography
          sx={{ color: "green", fontWeight: "700" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {item.age}$
        </Typography>
        <Typography
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "3",
            WebkitBoxOrient: "vertical",
          }}
          variant="body2"
          color="text.secondary"
        >
          {item.bio}
        </Typography>
      </CardContent>
      <CardActions>
        {email == ADMIN ? (
          <>
            <Button onClick={() => deleteProduct(item.id)}>Delete</Button>
            <Button onClick={() => navigate(`/edit/${item.id}`)}>Edit</Button>
          </>
        ) : (
          null
        )}
      </CardActions>
    </Card>
  );
}
