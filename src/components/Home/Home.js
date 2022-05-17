import React, { useState, useEffect } from "react";
import useData from "../../hooks/useData";
//import api from "../../api/products";
import classes from "./Home.module.css";
import HomeBackground from "../../assets/img/Homebackground.jpg";
import ProductCard from "../ProductCard/ProductCard";
const Home = () => {
  const [data] = useData();
  // const [productList, setProductList] = useState([]);
  // const getDataFromServer = async () => {
  //   const response = await api.get("/products");
  //   return response.data;
  // };

  // useEffect(() => {
  //   const getAllData = async () => {
  //     const productsData = await getDataFromServer();
  //     if (productsData) setProductList(productsData);
  //   };
  //   getAllData();
  // }, []);
  return (
    <div className={classes.home}>
      <div className={classes["home__container"]}>
        <div className={classes["home__img"]}>
          <img src={HomeBackground} alt="amazon background" />
        </div>
        <div className={classes["products__layout"]}>
          <div className={classes["products__homeRow"]}>
            {data.map((product) => (
              <ProductCard
                id={product.id}
                title={product.title}
                price={product.price}
                rating={product.rating}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
