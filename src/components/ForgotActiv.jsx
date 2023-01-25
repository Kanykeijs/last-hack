import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const ForgotActiv = () => {
    const {postActivity} = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirm, setPasswordConfirm] = useState("")
    const [key, setKey] = useState("")
    let formData = new FormData()
    formData.append("email", email)
    formData.append("password", password)
    formData.append("password_confirm", password_confirm)
    formData.append("activation_code", key)


    return (
        <div>
                        <TextField type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                        <TextField type="text" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                        <TextField type="text" value={password_confirm} onChange={(e)=> setPasswordConfirm(e.target.value)}/>
                        <TextField type="text" value={key} onChange={(e)=> setKey(e.target.value)}/>
                        <Button onClick={()=> postActivity(formData, key)}>add</Button>

        </div>
    );
};

export default ForgotActiv;