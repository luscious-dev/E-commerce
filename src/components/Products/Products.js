import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";

// const products = [
//   {
//     id: 1,
//     name: "Shoes",
//     description: "Running shoes",
//     price: "$5",
//     image: "https://m.media-amazon.com/images/I/71UBtYOWS8L._AC_UL320_.jpg",
//   },
//   {
//     id: 2,
//     name: "Macbook",
//     description: "Apple Macbook",
//     price: "$10",
//     image:
//       "https://www.apple.com/euro/macbook-pro/b/screens_alt/images/overview/hero_mbp__fsgedw8koju6_medium.jpg",
//   },
// ];

const Products = ({ products }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar}></div>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
