import React, { useState, useEffect } from "react";
//import useData from "../../hooks/useData";
import api from "../../api/products";
import classes from "./Home.module.css";
import HomeBackground from "../../assets/img/Homebackground.jpg";
import ProductCard from "../ProductCard/ProductCard";

const Home = ({ searchData }) => {
  const [productList, setProductList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  // const getDataFromServer = async () => {
  //   const response = await api.get("/products");
  //   return response.data;
  // };

  useEffect(() => {
    const getAllData = async () => {
      try {
        const productsData = await api.get("/products");

        setProductList(productsData.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    getAllData();
  }, []);

  useEffect(() => {
    const filteredData = productList.filter(
      (product) =>
        product.title.toLowerCase().indexOf(searchData.toLowerCase()) !== -1
    );

    setFilteredList(filteredData);
  }, [searchData]);

  const products = filteredList.length
    ? filteredList
    : productList;

  return (
    <div className={classes.home}>
      <div className={classes["home__container"]}>
        <div className={classes["home__img"]}>
          <img src={HomeBackground} alt="amazon background" />
        </div>
        <div className={classes["products__layout"]}>
          <div className={classes["products__homeRow"]}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
