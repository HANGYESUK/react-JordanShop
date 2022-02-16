import React from 'react'

function Product(props) {
  return (
    <div className='col-md-4'>
        <img src={props.props.src}></img>
        <h4>상품명 : {props.props.name}</h4>
        <p>상품설명 & 가격 :  {props.props.price}</p>
    </div>
  )
}

export default Product