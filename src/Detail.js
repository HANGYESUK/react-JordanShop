import React from 'react'

function Detail() {
  return (
      <div className='container'>
          <div className='row'>
              <div className='col-md-6'>
                  <img src=''/>
              </div>
              <div className='col-md-6 mt-4'>
                  <h4 className='pt-5'>상품명</h4>
                  <p>상품 설명</p>
                  <p>1200000</p>
                  <button className='btn btn-danger'>주문하기</button>
              </div>
          </div>
      </div>
  )
}

export default Detail