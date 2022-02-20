import React from 'react';
import shoesData from './shoesData';
import { useState, useEffect } from 'react';
import Product from './Product';
import { Button } from 'react-bootstrap'
import './Home.css'
import axios from 'axios';

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
                        return a.stock - b.stock
                    })
                    console.log(shoesCopy)
                    setShoesData(shoesCopy)
                }}>인기순 정렬
        </Button>&nbsp;&nbsp;&nbsp;




        <Button variant="success" onClick={()=>{
                    let shoesCopy = [...shoesData]
                    shoesCopy.sort(function (a,b) {
                        return a.price - b.price
                    })
                    console.log(shoesCopy)
                    setShoesData(shoesCopy)
                }}>가격순 정렬
        </Button>&nbsp;&nbsp;&nbsp;


        <Button variant="primary" onClick={()=>{

                let request_body = {
                    "startDate": "2017-08-01",
                    "endDate": "2017-09-30",
                    "timeUnit": "month",
                    "category": [
                        {"name": "패션의류", "param": ["50000000"]},
                        {"name": "화장품/미용", "param": ["50000002"]}
                    ],
                    "device": "pc",
                    "ages": ["20", "30"],
                    "gender": "m"
                };


                const ID_KEY = '2ibhN9SxL5RkEJL2VVBp';
                const SECRET_KEY = 'DkmSRj7nOm';
                let api_url = 'https://openapi.naver.com/v1/datalab/shopping/categories';


                axios.post({
                    url:api_url,
                    body : JSON.stringify(request_body),
                    headers : {
                        'X-Naver-Client-Id':ID_KEY,
                        'X-Naver-Client-Secret': SECRET_KEY,
                        'Content-Type': 'application/json'
                    }
                })
                .then((err, response, body)=>{
                    console.log(response.statusCode)
                    console.log(body)
                })
                .catch((err)=>{console.log(err)})

                }}>데이터추가
        </Button>



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