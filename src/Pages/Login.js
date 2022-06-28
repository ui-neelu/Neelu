
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Heading, TextStyle } from '@shopify/polaris';
import LogoCedcoss from '../Assets/Images/logo-cedcoss.svg'

const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
   <div className='login_page'>
        <div className='login-inner'>
          <div className='login_heading'>
          <Heading>LOGIN</Heading>
         <TextStyle>Welcome at CedCommerce</TextStyle>
          </div>

        
      <Form name="normal_login" className="login-form" initialValues={{ remember: true, }} onFinish={onFinish}>
      <Form.Item name="username"  label="CedCommerce ID:" rules={[
          {
            required: false,
            message: 'Please input your Username!',
          },
        ]}
      >
      <Input  placeholder="Username" />
      </Form.Item>
      <Form.Item name="password"  label="Password:"
        rules={[
          {
            required: false,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input  type="password" placeholder="Password"/>
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href=""> Forgot password</a>
      </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>Or <a href="">Register now!</a>
        </Form.Item>
    </Form>
    <div className='logo_section'>
     <img src={LogoCedcoss} alt="logo"/>
     <div className='copyright-txt'>
     <TextStyle>All right Reserved 2022 Cedcommerce</TextStyle>
     </div>
   </div>
   </div>

   
   </div>
  );
};

export default Login;