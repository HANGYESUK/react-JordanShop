import React from 'react'
import shoesData from './shoesData'
import { useNavigate, useParams } from 'react-router-dom' //리액트 V6버전 부터 history 대신 navi로 제공

function Detail(props) {

    let {id} = useParams(); //라우터 뒤에 있는 번호

    let prdId = parseInt(id)

    let shoes = props.ShoesData

    let navi = useNavigate(); //navi 선언

    //함수 내에 navi에 이동할 경로를 파라미터로 넣음
    function goHome() {
        navi('/')
    }

  return (
      <div className='container'>
          <div className='row'>
              <div className='col-md-6'>
                  <img src={shoes[prdId].src}/>
              </div>
              <div className='col-md-6 mt-4'>
                  <h4 className='pt-5'>{shoes[prdId].name}</h4>
                  <p>상품 설명</p>
                  <p>{shoes[prdId].price} 원</p>
                  <button className='btn btn-danger'>주문하기</button>&nbsp;
                  <button className='btn btn-danger' onClick={goHome}>뒤로가기</button>
              </div>
          </div>
      </div>
  )
}

export default Detail