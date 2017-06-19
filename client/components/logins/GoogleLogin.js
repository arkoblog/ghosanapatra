import React from 'react';
import { GoogleLogin } from 'react-google-login-component';

 
class Login extends React.Component{
 
  constructor (props, context) {
    super(props, context);
  }
 
  responseGoogle (googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
  }
 
  render () {
    return (
      <div>
        <GoogleLogin socialId="1006818650712-6s129845iii803eeq5758g79eu53e9m0.apps.googleusercontent.com"
                     class="google-login btn btn-danger btn-lg"
                     scope="profile"
                     responseHandler={this.responseGoogle}
                     buttonText="Login With Google"/>
      </div>
    );
  }
 
}
 
export default Login;