import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import ProductCard from './ProductCard';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductAll = ({authenticate}) => {

  const [productList, setProductList] = useState([]);

  const [query, setQuery] = useSearchParams();
  
  const navigate = useNavigate();
  const search = (e) => {
    let keyword = e.target.value;
    if(e.key == "Enter") {
      navigate(`/?q=${keyword}`);
    }
  }

  const getProduct = async () => {
    const keyword = query.get('q') || '';
    let url = `http://localhost:3000/products/?q=${keyword}`;
    // let url = `https://my-json-server.typicode.com/JungHyun-Ahn/React_ShoppingMall/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    setProductList(data);
  }

  useEffect(() => {
    getProduct();
  }, [query]);

  const shopMenuList = [
    'ALL',
    '만월 원액',
    '만월 굿즈',
    '선물하기',
    '단체주문',
  ];

  return (
    <div>
      <div className='productContainer'>
        <div className='product-topNav'>
          <ul className='shopMenuList'>
            {shopMenuList.map((list) => (
              <li>
                <a>{list}</a>
              </li>
            ))}
          </ul>
          <div className='search-box'>
            <FontAwesomeIcon icon={faSearch} />
            <input type='text' placeholder='제품검색' onKeyPress={search} />
          </div>
        </div>
        <Row>
          {productList.map((item) => (
            <Col md={4} sm={12} key={item.id}>
              <ProductCard item={item} authenticate={authenticate} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default ProductAll
