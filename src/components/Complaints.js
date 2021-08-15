import React from 'react';
import {List, Datagrid, TextField} from 'react-admin';

function Complaints(props){
    return ( 
        <List {...props}>
            <Datagrid>
                <TextField source='_id'/>
                <TextField source='name'/>
                <TextField source='email'/>
                <TextField source='c_type'/>
            </Datagrid>
        </List>
    );
}

export default Complaints;