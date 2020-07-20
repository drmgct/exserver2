import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '이순신',
  'birthday': '961222',
  'gender': '남자',
  'job': '킹제네럴'
  },
  {
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '킹세종',
  'birthday': '880321',
  'gender': '남자',
  'job': '그레이트킹'
  },
  {
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '광개토',
  'birthday': '751231',
  'gender': '남자',
  'job': '킹장군'
  }
]
// custormer 는 이렇게 정의 한다.
// [] 는 배열형태로 표시할 때 사용한다.

class App extends Component {
  render () {
    return (
      <div>
        { // .map 은 반복되는 코드를 매핑하게 해준다.
          // .map(c) 에서 c 는 임의의 문자로 정의해서 해도 상관없다.
          // .map은 파이썬과 C# 함수와 똑같아 파이썬에서도 사용 가능하다.
          customers.map(c=> {
            return (
              <Customer
                key={c.id} // .map 을 사용할 땐 key 값을 반드시 설정해줘야하고 key 값은 원소를 구분할 수 있는 것(각각 다른 것)으로 지정한다.
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
    );
  };
};

// 'C'ustomer."js 파일"에 가서 이렇게 매칭 해줘라.
// 2개 이상이 되면 반드시 div 태그로 묶어 준다.

export default App;