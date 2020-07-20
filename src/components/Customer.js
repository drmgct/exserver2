import React from 'react';

class Customer extends React.Component {
    render() {
        return (
            <div> 
                <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
                <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.gender}/>
            </div>
        )
    }
}

// 매칭된 내용을 이런 식으로 프로필과 인포로 나누어라.
// 그리고 표시는 아래와 같이 하는 거다.
// react 를 사용할 때 표시 내용이 위와 같이 2개 이상의 항목이 될 경우
// 반드시 div 태그로 감싸줘야 한다. 

class CustomerProfile extends React.Component {
    render () {
        return (
            <div>
                <img src={this.props.image} alt='profile'/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

// 프로필을 먼저 표시하는 데 표시 방법은 이렇게 해라.

class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
            <p>{this.props.birthday}</p>
            <p>{this.props.gender}</p>
            <p>{this.props.job}</p>
        </div>
        )
    }
}

// 프로필 다음엔 인포를 표시해주는 데 표시 방법은 이렇게 해라.

export  default Customer;
