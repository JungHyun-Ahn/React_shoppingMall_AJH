import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ item, authenticate }) => {

  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  }

  return (
    <div className='card' onClick={showDetail}>
      <div className='cardImg'><img src={item.img} /></div>
      <div className='prodName'>{item.title}</div>
      <div className='prodPrice'>
        {authenticate ? item.price : <span style={{color: "#999"}}>로그인 후 확인 가능합니다</span>}
      </div>
      <div className='label'>
        <div>{item.best ? <span className='bestLabel'>Best</span> : ""}</div>
        <div>{item.new ? <span className='newLabel'>New</span> : ""}</div>
      </div>
    </div>
  )
}

export default ProductCard
