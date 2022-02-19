import React from 'react';
import shoesData from './shoesData';
import { useState, useEffect } from 'react';
import Product from './Product';
import { Button } from 'react-bootstrap'
import './Home.css'

function Home(ShoesData) {

    let [shoesData, setShoesData] = useState(ShoesData.ShoesData)

    let [show, setShow] = useState(true)

    useEffect(()=>{})

  return (
      <>
        <div className='jumboTron'>
            <div className='jumboTronBack colum'>
                <h1>20% Season of!</h1>
                <h4>조던 드가즈아~</h4>
                <Button variant="primary">Primary</Button>
            </div>
        </div>

        <br/>
        <Button variant="danger" onClick={()=>{
                    let shoesCopy = [...shoesData]
                    shoesCopy.sort(function (a,b) {
                        return a.price - b.price
                    })
                    console.log(shoesCopy)
                    setShoesData(shoesCopy)
                }}>가격별 정렬</Button>

        <div className='container'>
            <div className='row'>
            {
                shoesData.map((item, a)=>{
                    console.log(item)
                    return (
                        // a라는 key를 파라미터로 보냄
                        <Product key={a} props={item} id={item.id}/>
                    )
                })
            }
            </div>
        </div>
    </>
  )
}

export default Home