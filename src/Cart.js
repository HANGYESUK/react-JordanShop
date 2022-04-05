import React, { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import styled from 'styled-components'

// redux - import
import { connect, useDispatch, useSelector } from 'react-redux'
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

let btnBox = {
    minWidth: "70px",
    textAlign: "center"
}

let btn = {
    border: "none",
    borderRadius: "2px",
    backgroundColor: "white",
    margin: "3px"
}


// redux- props로 사용 - Hook써도 무조건 있어야 됨
function Cart(props) {

    //useSelector Hook사용 - 밑에서 function선언 안해도 됨
    let state = useSelector((state) => state)

    //dispatch Hook사용
    let dispatch = useDispatch()

    let [total, setTotal] = useState(0)

    let totalCopy = 0;

    useEffect(()=>{

        setTotal(totalCopy)

    }, [state.reducer])

    console.log(total)


  return (
    <div>
        <div className='cart calum'>
            <h1>장바구니</h1>
            <Table striped="striped" bordered="bordered" hover="hover" variant="dark">
                <thead>
                    <tr>
                        <th>상품번호</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>가격</th>
                        <th style={btnBox}>변경</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.reducer.map((item, a)=>{

                            totalCopy += (item.price * item.stock)
                        
                            return (
                                    <tr key={a}>
                                        <td>{ item.id }</td>
                                        <td>{ item.title }</td>
                                        <td>{ item.stock }</td>
                                        <td>{ item.price * item.stock } 원</td>
                                        <td><button style={btn} onClick={()=>{
                                            let id = item.id
                                            dispatch({type : 'minus', payload : { id: id }})
                                        }}>-</button>
                                        <button style={btn} onClick={()=>{
                                            let id = item.id
                                            dispatch({type : 'plus', payload : { id: id,  stock: item.stock }})
                                        }}>+</button></td>
                                        <td><button style={btn} onClick={()=>{
                                            let id = item.id
                                            dispatch({type : 'delete', payload : { id: id }})
                                        }}>X</button></td>
                                    </tr>
                            )
                        })
                    }
                    <tr>
                        <td>총 금액</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{total} 원</td>
                    </tr>
                </tbody>
            </Table>

            
            <button className='btn btn-primary'>주문하기</button>
                

            {
                state.reducer2 == true
                ? <Box className='Box'>
                    <h2>지금 구매하시면 신규할인 20%</h2>
                 </Box>
                : null
            }
            <br></br>
              <button className='btn btn-success' onClick={()=>{
                  if(state.reducer2 == true) {
                    dispatch({type : "close"})
                  }
                  else if(state.reducer2 == false) {
                    dispatch({type : "open"})

                  }
              }}>닫기</button>
        </div>
    </div>
  )
}

// redux - state를 props형태로 바꿔줌
// function Store(state){
//     return {
//         state : state.reducer,
//         alertState : state.reducer2
//     }
// }

// redux - export 바꿔야됨
// export default connect(Store)(Cart)


export default Cart;