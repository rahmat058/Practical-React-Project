import React from 'react';
import MyButton from '../utils/button';

const RegisterLogin = () => {
  return (
    <div className="page_wrapper">
      <div className="container">
        <div className="register_login_container">
          <div className="left">
            <h1>Nes Customers</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, est itaque deleniti, sed dolorum illum totam autem fuga animi quaerat, laudantium ipsam natus! Officiis quibusdam fugiat cupiditate asperiores error nulla.</p>
            <MyButton 
              type="default"
              title="Create an account"
              linkto="/register"
              addStyles={{
                margin: '10px 0 0 0'
              }}
            />
          </div>
          <div className="right">
            <h2>Registered customers</h2>
            <p>If you have an account please log in.</p>
            LOGIN
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterLogin;
