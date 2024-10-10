import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";

const ProductAll = () => {
  const [productList, setproductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    const serarchQuery = query.get("q") || "";
    console.log(serarchQuery);
    const url = `http://localhost:3000/products?q=${serarchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    setproductList(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Container>
      <Row>
        {productList.map((menu, index) => (
          <Col key={index} lg={3}>
            <ProductCard item={menu} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
