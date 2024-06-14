import { useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { setLogin } from "../../redux/state";
import { useDispatch } from "react-redux"

function Login() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const formData = new FormData(e.target);
    
    const username = formData.get("username");
    const password = formData.get("password");
    
    try {
      const res = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message);
      }

      const data = await res.json();

      if (data) {
        dispatch (
          setLogin({
            user: data.user,
            token: data.token
          })
        )
      }
      
      // updateUser(data)
      console.log(data);
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input
            name="username"
            required
            minLength={3}
            maxLength={20}
            type="text"
            placeholder="Username"
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
          />
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;