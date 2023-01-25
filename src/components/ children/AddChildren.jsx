import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../context/AuthHelp";

const AddChildren= () => {
  const navigate = useNavigate();
  const { addProduct , addChildren } = useProducts();
  console.log(addChildren);
  const arr = [1,2,3];

  const [product, setProduct] = useState({
    first_name: "",
    last_name: "",
    age: "",
    bio: "",
    sum: "",
  });
  const obj ={
    first_name: "fdsa",
    last_name: "fda",
    age: "21",
    bio: "fdsa",
    sum: "fdsa",
  }

//   console.log(product);

  return (
    <Box sx={{ width: "60vw", margin: "10vh auto" }}>
      <TextField
        value={product.first_name}
        onChange={(e) =>
          setProduct((prev) => ({ ...prev, first_name: e.target.value }))
        }
        fullWidth
        id="outlined-basic"
        label="Name"
        variant="outlined"
        name="name"
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Last Name"
        variant="outlined"
        name="lastName"
        value={product.last_name}
        onChange={(e) =>
          setProduct((prev) => ({ ...prev, last_name: e.target.value }))
        }
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Age"
        variant="outlined"
        name="age"
        value={product.age}
        onChange={(e) =>
          setProduct((prev) => ({ ...prev, age: e.target.value }))
        }
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Bio"
        variant="outlined"
        name="bio"
        value={product.bio}
        onChange={(e) =>
          setProduct((prev) => ({ ...prev, bio: e.target.value }))
        }
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Sum"
        variant="outlined"
        name="sum"
        value={product.sum}
        onChange={(e) =>
          setProduct((prev) => ({ ...prev, sum: e.target.value }))
        }
      />
      <Button
        onClick={() => {
            addChildren(product);
          navigate("/deti");
        }}
        variant="outlined"
        fullWidth
        size="large"
      >
        CREATE CARD
      </Button>
    </Box>
  );
};

export default AddChildren;
