import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const ProductDetail = () => {
  let {id} = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const getProductDetail = async () => {
    let url = `http://localhost:3000/products/${id}`;
    // let url = `https://my-json-server.typicode.com/JungHyun-Ahn/React_ShoppingMall/products/${id}`;

    let response = await fetch(url);
    let data = await response.json();
    setLoading(false);
    setProduct(data);
  }
  useEffect(() => {
    getProductDetail();
  }, []);

  if(loading || product == null) return <h1>Loading</h1>;

  return (
    <div className='detailContainer'>
      <Container>
        <Row>
          <Col md={6} sm={12} className='product-detail-img'>
            <img src={product.img} /> 
          </Col>
          <Col md={6} sm={12}>
            <div className='product-info'>{product.title}</div>
            <div className='product-info'>{product.price}</div>
            <Button variant='dark' className='add-button'>추가</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductDetail
