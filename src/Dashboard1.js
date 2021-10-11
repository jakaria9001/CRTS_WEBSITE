import React from 'react';
import {getUser, removeUserSession} from './Utils/Common';

import {fetchUtils, Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import Complaints from './components/Complaints';

const httpClient = (url, options = {}) => {
  // ...
  return fetchUtils.fetchJson(url, options);
}
const dataProvider = jsonServerProvider('https://crtsapp.herokuapp.com/api/complaint/', httpClient);

function Dashboard(props) {
    const user = getUser();

  // handle click event of logout button
  const handleLogout = () => { 
    removeUserSession();   
    props.history.push('/login');
  } 
  return (
      <div>
        <Admin dataProvider={dataProvider} >
            <Resource name='allComplaints' list={Complaints}/>
        </Admin>
        <div>
            All registered complaints below! <br/>
            Logged In as {user.username}<br /><br />
            <input type="button" onClick={handleLogout} value="Logout" />
        </div>
    </div>
  );
}
 
export default Dashboard;