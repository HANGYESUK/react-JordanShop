import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Product.css'

function Product(props) {

  let id = props.id

  let navi = useNavigate();

  function detail() {
    navi(`/detail/${id}`)
  }

  return (
    <div className='col-md-4 contentBox' onClick={detail}>
      {
        props.props.src == null
        ?<><img src={'https://codingapple1.github.io/shop/shoes' + (id - 1) + '.jpg'}></img>
          <h4>상품명 : {props.props.title}</h4>
          <p>상품설명 & 가격 :  {props.props.price}원</p></>
        :<><img src={props.props.src}></img>
          <h4>상품명 : {props.props.title}</h4>
          <p>상품설명 & 가격 :  {props.props.price}원</p></>
      }

    </div>
  )
}

export default Product