import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//App컴포넌트를 아이디가 root인 엘리먼트에 그린다(render)
//ReactDOM.render()함수의 첫번째 매개변수로 App컴포넌트 반환, 두번째로 위치반환
ReactDOM.render(<App />, document.getElementById('root'));
