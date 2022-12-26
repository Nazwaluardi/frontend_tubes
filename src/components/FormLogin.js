import React, { useState } from 'react';
import "./FormStyles.css"
import Axios from 'axios';

const FormLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username: username,
      password: password
    }

    Axios.post("http://localhost:9080/login", data).then((result) => {
      console.log(result);
      console.log("Login successful!");
      console.log(username, password);

      if(result.data.username === username && result.data.password === password) {
        window.location = "/homelogin"
      }else{
        alert("Username/password wrong!");
      }
      
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className='form'>
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type='text' id="username" value={username} onChange={(event) => setUsername(event.target.value)} required></input>
            <label>Password</label>
            <input type='password' id="password" value={password} onChange={(event) => setPassword(event.target.value)} required></input>
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default FormLogin