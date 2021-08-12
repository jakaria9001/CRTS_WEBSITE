import React, { useState } from 'react';
import { setUserSession } from './Utils/Common';

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
    <div className="loginForm">
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