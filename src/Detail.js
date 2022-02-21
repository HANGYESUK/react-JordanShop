import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom' //리액트 V6버전 부터 history 대신 navi로 제공
import styled from 'styled-components'
import './Detail.scss'


// 스타일 컴포넌트 - 대문자로 작명해야 됨
let Box = styled.div`
    background-color: red;
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    height: 70px;
    text-align: center;
    margin-top: 30px;
    max-width: 500px;
`;

let Title = styled.h2`
    color : ${ props => props.color }
`;



function Detail(props) {

    let [alert, setAlert] = useState(true);


    // Hook - 컴포넌트 라이프사이클에 후크를 건다
    useEffect(()=>{
        let Timer = setTimeout(()=>{
            document.getElementsByClassName('badge-pop')[0].classList.add('display-none')
            document.getElementsByClassName('Box')[0].classList.add('display-none')
        }, 2000)

        // 컴포넌트가 사라질때 실행하는 함수
        return function unMount() {
            clearTimeout(Timer)
        }

        // [컴포넌트] - 괄호 내에 컴포넌트가 업데이트 될 때 실행하는 함수
    }, [])

    let shoes = props.ShoesData


    let {id} = useParams(); //라우터 뒤에 있는 번호

    let findData = shoes.find((item)=>{
      return item.id == id
    });


    let navi = useNavigate(); //navi 선언

    //함수 내에 navi에 이동할 경로를 파라미터로 넣음
    function goHome() {
        navi('/')
    }

    console.log(shoes)

  return (
      <div className='container colum'>
          {
            findData.stock < 4
            ?   <Box className='Box'>
                    <Title color="white">마감임박</Title>
                </Box>
            :null
          }
        <div className='badge-pop low'><Title>인기상품</Title></div>&nbsp;
        <div className='row'>
            <div className='col-md-6'>
                <img src={findData.src}/>
            </div>
            <div className='col-md-6 mt-4'>
                <h4 className='pt-5'>{findData.title}</h4>
                <p>상품 설명</p>
                <p>재고 : {findData.stock}</p>
                <p>{findData.price} 원</p>
                <button className='btn btn-primary'>주문하기</button>&nbsp;
                <button className='btn btn-danger' onClick={goHome}>뒤로가기</button>
            </div>
        </div>
      </div>
  )
}

export default Detail