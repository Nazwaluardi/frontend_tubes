import React, { useState } from 'react';
import "./FormStyles.css"
import Axios from 'axios';
import { useEffect } from 'react';

const FormRegister = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        const data = {
          name: name,
          username: username,
          email: email,
          password: password
        }
    
        console.log(data)
    
        Axios.post("http://localhost:9080/register", data).then(() => {
          alert("Register success")
          console.log("success")
        }).catch(err => {
          console.log(err)
        })
    }
    
    useEffect(() => {
        console.log(username)
    }, [username])

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <label>Your Name</label>
                <input type='text' id="namaLengkap" value={name} onChange={(event) => setName(event.target.value)} required></input>
                <label>Username</label>
                <input type='text' id="username" value={username} onChange={(event) => setUsername(event.target.value)} required></input>
                <label>Email</label>
                <input type='email' id="email" value={email} onChange={(event) => setEmail(event.target.value)} required></input>
                <label>Password</label>
                <input type='password' id="password" value={password} onChange={(event) => setPassword(event.target.value)} required></input>
                <button className='btn' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FormRegister