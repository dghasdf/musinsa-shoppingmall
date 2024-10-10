import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Container, Row, col, Dropdown, Button } from "react-bootstrap";

const Img = styled.img`
  width: 100%;
  border-radius: 10px;
`;
const ProductDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 22px;
  padding: 10px;
`;
const ProductTitle = styled.div`
  font-weight: 600;
`;
const ProductPrice = styled.div`
  font-size: 18px;
`;

const ProductChoice = styled.div``;

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const getProductDetail = async () => {
    const url = `http://localhost:3000/products${id}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };

  const formattedPrice = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  }).format(product.price);

  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col>
          <Img src={product && product?.img} alt={product && product?.id} />
        </Col>
        <Col>
          <ProductDesc>
            <ProductTitle>
              상품명:{product && product?.img} alt={product && product?.title}
            </ProductTitle>
            <ProductPrice>
              상품가격 : {product && product?.img} alt=
              {product && product?.Price}
            </ProductPrice>
            <ProductChoice>
              {product && product?.choice ? "Conscious choice" : ""}{" "}
            </ProductChoice>
            <Dropdown>
              <Dropdown.Toggle variant="outline=dark" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {product &&
                  product?.size.lengt > 0 &&
                  product?.size.map((item, index) => (
                    <Dropdown.Item key={index} href="#/action-1">
                      {item}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="primary">장바구니</Button>
            <Button>상품결제</Button>
          </ProductDesc>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
