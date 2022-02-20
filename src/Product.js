import React from 'react'
import './Product.css'

function Product(props) {

  let id = props.id

  return (
    <div className='col-md-4 contentBox' onClick={()=>{
      window.location.href=`/detail/${id}`
    }}>
        <img src={props.props.src}></img>
        <h4>상품명 : {props.props.name}</h4>
        <p>상품설명 & 가격 :  {props.props.price}원</p>
    </div>
  )
}

export default Product