import { Box, CircularProgress, Grid, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/productsContext";
import ChildrenCard from "./ChildrenCard";

const ChildrenList = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { getProducts, products } = useProducts();

  const [page, setPage] = useState(1);

  const itemsPerPage = 5;

  const count = Math.ceil(products.length / itemsPerPage);

  const handleChange = (e,p) =>{
    console.log(p);
    setPage(p);
  };



  function currentData (){
    const begin = (page -1) * itemsPerPage //0
    const end = begin + itemsPerPage //5
    return products.slice(begin,end)
  }

  // const [page, setPage] = useState(
  //   searchParams.get("_page")? searchParams.get("_page"): 1);

  // const [limit, setlimit] = useState(
  //   searchParams.get("_limit")? searchParams.get("_limit"): 5);


  // useEffect(() => {
  //   setSearchParams({
  //     _page: page,
  //     _limit: limit,
  //   })
  // }, [page,limit]);
  
  useEffect(() => {
    getProducts();
  }, [searchParams]);

  // useEffect(() => {
  //   setSearchParams({
  //     _page: page,
  //     _limit: limit,
  //   })
  // }, [page,limit]);

  return (
    <Grid
      item
      md={9}
      sx={{ justifyContent: "center", display: "flex", flexWrap: "wrap" }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          minHeight: "40vh",
          gap: "10px",
        }}
      >
     


{products.length > 0 ? (
          currentData().map((item) => <ChildrenCard item={item} key={item.id} />)
        ) : (
          <>
            <CircularProgress color="inherit" />
          </>
        )}

        {products.map((item) => (
          <ChildrenCard item={item} key={item.id} />
        ))}
      </Box>
      <Pagination
      sx={{m: 3}}
      count={count}
      page={page}
      onChange={handleChange}
      shape="rounded" />
    </Grid>
  );
};

export default ChildrenList;
