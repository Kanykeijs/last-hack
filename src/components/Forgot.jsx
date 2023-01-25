import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Forgot = () => {
    const {getPassword} = useAuth()
    const [state, setState] = useState("")
console.log(state);
    return (
        <div>
            
            <TextField type="text" value={state} onChange={(e)=> setState(e.target.value)}/>
            <Button onClick={()=> getPassword(state)}>send</Button>
        </div>
    );
};

export default Forgot;