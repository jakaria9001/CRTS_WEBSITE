import React, { useState } from 'react';
import { setUserSession } from './Utils/Common';
import './login.css';

var passwordHash = require('password-hash');
var hashedPassword = passwordHash.generate('Admin@123');

function Login(props) {
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // handle button click of login form
  const handleLogin = () => {
        setError(null);
        setLoading(true);

        // verify username and password here:
        let uname = username.value;
        let pass = password.value;
        
        if( uname === "crts.admin@gmail.com" && passwordHash.verify(pass, hashedPassword)){
            setLoading(false);
            setUserSession({ username: uname, password: hashedPassword });
            props.history.push('/dashboard');
        }else{
            setLoading(false); 
            setError("Invalid credentials. Please try again.");
        }
  }

  return (
    <div>

    {/* <div className="loginForm">
      <p style={{  textAlign: 'center' }}>Login</p><br />
      <div>
        Username<br />
        <input type="text" {...username} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />

    </div> */}

    <div className="pt-5 mt-5" >
        
      <div class="container h-100">
      <div class="d-flex justify-content-center h-100">
        <div class="user_card">
          <div class="d-flex justify-content-center">
            <div class="brand_logo_container">
              <img src="/images/logo.png" class="brand_logo" alt="Logo"/>
            </div>
          </div>
          <div class="d-flex justify-content-center form_container">
            <form>
              <div class="input-group mb-3">
                  <span class="input-group-text"><i class="fa fa-user"></i></span>
                <input type="text" name="" class="form-control input_user" value="" placeholder="email" {...username} autoComplete="new-password"/>
              </div>
              <div class="input-group mb-2">
                  <span class="input-group-text"><i class="fa fa-key"></i></span>
                <input type="password" name="" class="form-control input_pass" value="" placeholder="password" {...password} autoComplete="new-password"/>
              </div>
              <div class="form-group">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customControlInline"/>
                  <label class="custom-control-label" for="customControlInline">Remember me</label>
                </div>
              </div>
                <div class="d-flex justify-content-center mt-3 login_container">
            <button type="button" name="button" class="btn login_btn" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading}>Login</button>
            </div>
            </form>
          </div>
      
          <div class="mt-4">
            <div class="d-flex justify-content-center links">
              Don't have an account? <a href="#" class="ml-2">Sign Up</a>
            </div>
            <div class="d-flex justify-content-center links">
              <a href="#">Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;