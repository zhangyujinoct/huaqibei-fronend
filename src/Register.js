import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
 
class Register extends React.Component{
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
          <h2>注册账户</h2>
          <div><p>用户名</p></div>
          <div><TextInput input_value="请输入手机号/邮箱"></TextInput></div>
          <div><p>密码</p></div>
          <div><TextInput input_value="请输入密码"></TextInput></div>
          <div><p>确认密码</p></div>
          <div><TextInput input_value="请再次输入密码"></TextInput></div>
          <div>
            <Link to="/Login/" className="registertag">已有账号？立即登录</Link>
          </div>
          <button className="loginbutton">注册</button>
        </div>
      )
    }
}
 
export default Register;
