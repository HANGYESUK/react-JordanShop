import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import shoesData from './shoesData';

//redux import
import { Provider } from 'react-redux';
import { createStore } from 'redux';


let baseState = shoesData


function reducer(state = baseState, action) {
  if(action.type === '증가') {

    let copy = [...state]
    copy[0].stock++;

    return copy
  }
  else if (action.type = '감소') {

    let copy = [...state]
    copy[0].stock--;

    return copy

  }
  else {
    return state
  }
}

//redux 사용 - 변수선언 하고 state 리턴(데이터 임포트해서 가져와도 가능)
let store = createStore(reducer)


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}> {/* 라우터 내부에 Provider로 감싸고 전송할 변수 props로 보내줌 */}
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

