import { Component } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
 
class Login extends React.Component{
	render(){
		return(
            <LoginBlock/>
		);
	}
}

function TextInput(props){
    return(
      <input value={props.input_value}></input>
    );
}
  
class LoginBlock extends Component{
  
    render(){
      return (
        <div className="login_container">
          <h2>登录</h2>
          <div><p>用户名</p></div>
          <div><TextInput input_value="请输入用户名"></TextInput></div>
          <div><p>密码</p></div>
          <div><TextInput input_value="请输入密码"></TextInput></div>
          <div>
            <Link to="/Register/" className="registertag">注册</Link>
          </div>
          <button className="loginbutton">登录</button>
        </div>
      )
    }
}
 
export default Login;