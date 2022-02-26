import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import shoesData from './shoesData';

//redux import
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';


let alertBase = true;

function reducer2(state = alertBase, action) {
  
  if(action.type === "close"){
    state = false
    return state
  }
  else if(action.type === "open") {
    state = true
    return state
  }

  return state
}


let baseState = [{
  id : 0,
  title : "조던 비싼 디올",
  src : 'https://kream-phinf.pstatic.net/MjAyMDEwMjJfMTQ0/MDAxNjAzMzMzOTY5MTkz.eMa9T-j0gx_Uy25kkSe6lbfQp8M-edeBvvoBes5oGtQg.ESYf1qAW4ShCtF3q8jVh-TUUXidDUkKjmkucdIEydIIg.PNG/p_23597_0_db16c49862104d97a3985e7225f1b7da.png?type=l',
  price : 100000000,
  stock : 1
}]


function reducer(state = baseState, action) {
  if(action.type === '항목추가') {
    console.log(action.payload) 
    let copy = [...state, ]

    return copy
  }

  else if (action.type === '감소') {
    console.log(action.payload) 
    let copy = [...state]

    return copy

  }

  else {
    return state
  }
  
}

//redux 사용 - 변수선언 하고 state 리턴(데이터 임포트해서 가져와도 가능)
let store = createStore(combineReducers({reducer, reducer2}))



ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}> {/* 라우터 내부에 Provider로 감싸고 전송할 변수 props로 보내줌 */}
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

