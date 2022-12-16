import React,{useState} from "react"

export const Login = () => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('');
    const [error, setError]=useState('');

    const handleUsenameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange =(e)=> {
        setPassword(e.target.value);

    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-ct-web-pt/users/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username,
              password,
            }),
          });
          if (response.ok) {
            // Redirect the user to the home page
          } else {
            setError('Invalid username or password');
          }
        } catch (error) {
          setError('An error occurred while logging in');
        }
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsenameChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
        </form>
      );
    };
    