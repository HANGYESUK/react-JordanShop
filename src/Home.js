import React from 'react';
import shoesData from './shoesData';
import { useState } from 'react';
import Product from './Product';
import { Button } from 'react-bootstrap'

function Home(ShoesData) {

    let [shoesData, setShoesData] = useState(ShoesData.ShoesData)

  return (
      <>
        <div className='jumboTron'>
            <h1>20% Season of!</h1>
            <p>조던 드가즈아~</p>
            <Button variant="primary">Primary</Button>
        </div>

        <div className='container'>
            <div className='row'>
            {
                shoesData.map((item, a)=>{
                    return (
                        <Product props={item} onClick={()=>{
                            window.location('')
                        }}/>
                    )
                })
            }
            </div>
        </div>
    </>
  )
}

export default Home