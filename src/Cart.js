import React, { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import styled from 'styled-components'

// redux - import
import { connect } from 'react-redux'
import './Cart.css'


let Box = styled.div`
    background-color: red;
    padding: 20px;
    color : white;
    border-radius: 10px;
    width: 100%;
    height: 70px;
    text-align: center;
    margin-top: 30px;
    max-width: 500px;
`;


// redux- props로 사용
function Cart(props) {
    
  return (
    <div>
        <div className='cart calum'>
            <h1>장바구니</h1>
            <Table striped="striped" bordered="bordered" hover="hover" variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>가격</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.state.map((item, a)=>{
                            console.log(item.id)
                            return (
                                    <tr key={a}>
                                        <td>{ item.id }</td>
                                        <td>{ item.title }</td>
                                        <td>{ item.stock }</td>
                                        <td>{ item.price * item.stock }</td>
                                        <td><button onClick={()=>{
                                            let setStock = item.stock
                                            props.dispatch({type : '감소',
                                                            payload : { stock : setStock }})
                                        }}>-</button>
                                        <button onClick={()=>{
                                            let setStock = item.stock
                                            props.dispatch({type : '증가', payload : {stock : setStock}})
                                        }}>+</button></td>
                                    </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            {
                props.alertState == true
                ? <Box className='Box'>
                    <h2>지금 구매하시면 신규할인 20%</h2>
                 </Box>
                : null
            }
            <br></br>
              <button className='btn btn-primary' onClick={()=>{
                  if(props.alertState == true) {
                    props.dispatch({type : "close"})
                  }
                  else if(props.alertState == false) {
                    props.dispatch({type : "open"})

                  }
              }}>닫기</button>
        </div>
    </div>
  )
}

// redux - state를 props형태로 바꿔줌
function Store(state){
    return {
        state : state.reducer,
        alertState : state.reducer2
    }
}

// redux - export 바꿔야됨
export default connect(Store)(Cart)


// export default Cart