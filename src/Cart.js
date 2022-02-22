import React from 'react'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import './Cart.css'

function Cart() {
  return (
    <div>
        <div className='cart'>
            <h1>장바구니</h1>
            <Table striped="striped" bordered="bordered" hover="hover" variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>{  }</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </div>
  )
}

function Store(state){
    return {
        product : state.name
    }
}

export default connect(Store)(Cart)


// export default Cart