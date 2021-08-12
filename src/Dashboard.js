import React from 'react';
import {getUser, removeUserSession} from './Utils/Common';

function Dashboard(props) {
    const user = getUser();


  // handle click event of logout button
  const handleLogout = () => { 
    removeUserSession();   
    props.history.push('/login');
  }
 
  return (
    <div>
      All registered complaints below! <br/>
      Logged In as {user.username}<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}
 
export default Dashboard;